import '../PagesDesign/Login.css';

export default function Login() {
  return (
    <div className="login-page">
      <div className="login-intro">
        <div className="login-brand">
          <span className="login-brand-icon">H</span>
          <span>Hissa</span>
        </div>

        <div className="login-intro-content">
          <span className="login-label">WELCOME BACK</span>
          <h1>Welcome back to smarter investing.</h1>
          <p>
            Sign in to explore properties, track your investments,
            and manage your real estate portfolio.
          </p>

          <div className="login-stats">
            <div>
              <strong>JD 100</strong>
              <span>Minimum investment</span>
            </div>
            <div>
              <strong>8–12%</strong>
              <span>Expected yearly return</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>Transparency</span>
            </div>
          </div>
        </div>

        <span className="login-footer">Graduation project · MVP</span>
      </div>

      <div className="login-form-section">
        <div className="login-form-container">
          <h2>Log in</h2>
          <p className="login-subtitle">
            Welcome back! Please sign in to continue.
          </p>

          <form className="login-form">
            <div className="login-field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="login-field">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
              />
            </div>

            <button type="submit" className="login-button">
              Sign in
            </button>
          </form>

          <p className="login-signup">
            Don't have an account? <a href="/signup">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
}