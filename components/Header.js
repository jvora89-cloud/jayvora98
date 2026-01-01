'use client';

import { useAuth } from './AuthProvider';

export default function Header({ title, subtitle, showAuth = true }) {
  const { user, signInWithGoogle, signOutUser } = useAuth();

  return (
    <header>
      <h1>{title}</h1>
      <p className="subtitle">{subtitle}</p>

      {showAuth && (
        <div id="auth-container">
          {!user ? (
            <button onClick={signInWithGoogle} className="auth-btn">
              Sign In with Google
            </button>
          ) : (
            <div id="user-profile">
              <img
                src={user.photoURL || ''}
                className="user-photo"
                alt={user.displayName || 'User'}
              />
              <span id="user-name">{user.displayName || 'User'}</span>
              <button onClick={signOutUser} className="auth-btn-small">
                Sign Out
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
