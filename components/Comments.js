'use client';

import { useState, useEffect } from 'react';
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  deleteDoc,
  doc,
  setDoc,
  getDoc,
  serverTimestamp,
  increment,
  updateDoc
} from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { useAuth } from './AuthProvider';

export default function Comments() {
  const { user, signInWithGoogle } = useAuth();
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');
  const [posting, setPosting] = useState(false);

  useEffect(() => {
    const q = query(collection(db, 'comments'), orderBy('timestamp', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const commentsData = [];
      snapshot.forEach((doc) => {
        commentsData.push({ id: doc.id, ...doc.data() });
      });
      setComments(commentsData);
    });

    return unsubscribe;
  }, []);

  const handlePostComment = async () => {
    if (!commentText.trim()) {
      alert('Please enter a comment');
      return;
    }

    setPosting(true);
    try {
      await addDoc(collection(db, 'comments'), {
        userId: user.uid,
        userName: user.displayName || 'Anonymous',
        userPhotoURL: user.photoURL || '',
        text: commentText.trim(),
        timestamp: serverTimestamp(),
        likeCount: 0
      });
      setCommentText('');
    } catch (error) {
      console.error('Error posting comment:', error);
      alert('Failed to post comment');
    } finally {
      setPosting(false);
    }
  };

  const handleToggleLike = async (commentId) => {
    if (!user) {
      alert('Please sign in to like comments');
      return;
    }

    const likeId = `${user.uid}_${commentId}`;
    const likeDocRef = doc(db, 'likes', likeId);
    const commentDocRef = doc(db, 'comments', commentId);

    try {
      const likeDoc = await getDoc(likeDocRef);

      if (likeDoc.exists()) {
        await deleteDoc(likeDocRef);
        await updateDoc(commentDocRef, { likeCount: increment(-1) });
      } else {
        await setDoc(likeDocRef, {
          userId: user.uid,
          commentId: commentId,
          timestamp: serverTimestamp()
        });
        await updateDoc(commentDocRef, { likeCount: increment(1) });
      }
    } catch (error) {
      console.error('Error toggling like:', error);
    }
  };

  const checkUserLiked = async (commentId) => {
    if (!user) return false;
    const likeId = `${user.uid}_${commentId}`;
    const likeDoc = await getDoc(doc(db, 'likes', likeId));
    return likeDoc.exists();
  };

  const formatTimestamp = (timestamp) => {
    if (!timestamp) return 'Just now';
    const date = timestamp.toDate();
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <section id="comments-section">
      <h2>Community Comments</h2>
      <p className="comments-subtitle">Share your thoughts and connect with others</p>

      <div id="add-comment-container">
        {user ? (
          <div id="comment-form">
            <textarea
              id="comment-input"
              placeholder="Share your thoughts..."
              rows="3"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            />
            <button
              onClick={handlePostComment}
              disabled={posting}
              className="primary-btn"
            >
              {posting ? 'Posting...' : 'Post Comment'}
            </button>
          </div>
        ) : (
          <div id="sign-in-prompt">
            <p>Please sign in to post a comment</p>
            <button onClick={signInWithGoogle} className="auth-btn">
              Sign In with Google
            </button>
          </div>
        )}
      </div>

      <div id="comments-list">
        {comments.length === 0 ? (
          <p className="no-comments">No comments yet. Be the first to share your thoughts!</p>
        ) : (
          comments.map((comment) => (
            <Comment
              key={comment.id}
              comment={comment}
              onToggleLike={handleToggleLike}
              checkUserLiked={checkUserLiked}
              formatTimestamp={formatTimestamp}
            />
          ))
        )}
      </div>
    </section>
  );
}

function Comment({ comment, onToggleLike, checkUserLiked, formatTimestamp }) {
  const [userLiked, setUserLiked] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      checkUserLiked(comment.id).then(setUserLiked);
    }
  }, [user, comment.id]);

  return (
    <div className="comment">
      <div className="comment-header">
        <img
          src={comment.userPhotoURL || 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22><rect fill=%22%23ddd%22 width=%2240%22 height=%2240%22/></svg>'}
          className="comment-user-photo"
          alt={comment.userName}
        />
        <div className="comment-user-info">
          <span className="comment-user-name">{comment.userName}</span>
          <span className="comment-timestamp">{formatTimestamp(comment.timestamp)}</span>
        </div>
      </div>
      <p className="comment-text">{comment.text}</p>
      <div className="comment-actions">
        <button
          className={`like-btn ${userLiked ? 'liked' : ''}`}
          onClick={() => onToggleLike(comment.id)}
        >
          <span className="like-icon">{userLiked ? '❤️' : '🤍'}</span>
          <span className="like-count">{comment.likeCount || 0}</span>
        </button>
      </div>
    </div>
  );
}
