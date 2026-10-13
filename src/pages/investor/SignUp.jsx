
import PageContainer from '../../components/common/PageContainer';
import '../PagesDesign/SignUp.css';

function SignUp() {
  return (
    <PageContainer>
      <div className="signup-page">
        <div className="signup-intro">
          <div className="signup-brand">
            <span className="signup-brand-icon">H</span>
            <span>Hissa</span>
          </div>

          <div className="signup-intro-content">
            <span className="signup-label">GET STARTED</span>

            <h1>
              Start your real estate investment journey.
            </h1>

            <p>
              Create your account and discover a smarter way
              to invest in real estate, one share at a time.
            </p>

            <div className="signup-stats">
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

          <span className="signup-footer">
            Graduation project · MVP
          </span>
        </div>

        <div className="signup-form-section">
          <div className="signup-form-container">
            <h2>Create your account</h2>

            <p className="signup-subtitle">
              Start investing in property shares today.
            </p>

            <div className="signup-login-link">
              <a href="/login">Log in</a>
              <span className="signup-active-tab">Sign up</span>
            </div>

            <form className="signup-form">
              <div className="signup-role-section">
                <label>I want to join as</label>

                <div className="signup-role-options">
                  <label className="signup-role-card">
                    <input
                      type="radio"
                      name="role"
                      value="investor"
                      defaultChecked
                    />

                    <span className="signup-role-icon">↗</span>
                    <strong>Investor</strong>
                    <small>Buy property shares</small>
                  </label>

                  <label className="signup-role-card">
                    <input
                      type="radio"
                      name="role"
                      value="owner"
                    />

                    <span className="signup-role-icon">▤</span>
                    <strong>Property owner</strong>
                    <small>List your property</small>
                  </label>
                </div>
              </div>

              <div className="signup-field">
                <label htmlFor="fullName">Full name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="e.g. Ahmad Khaled"
                />
              </div>

              <div className="signup-field">
                <label htmlFor="signupEmail">Email</label>
                <input
                  type="email"
                  id="signupEmail"
                  name="email"
                  placeholder="name@email.com"
                />
              </div>

              <div className="signup-field">
                <label htmlFor="signupPassword">Password</label>
                <input
                  type="password"
                  id="signupPassword"
                  name="password"
                  placeholder="At least 8 characters"
                />
              </div>

              <button type="submit" className="signup-button">
                Create account
              </button>
            </form>

            <p className="signup-bottom-text">
              Already have an account? <a href="/login">Log in</a>
            </p>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}

export default SignUp;