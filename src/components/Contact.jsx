import { useState } from 'react';

function Contact() {
  // useState 1: Controlled input for real-time capturing
  const [message, setMessage] = useState('');

  // useState 2: Toggle UI visibility (e.g., help tooltip)
  const [showTooltip, setShowTooltip] = useState(false);

  // Form submission feedback
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <div className="content-container contact-page">
      <h2 className="section-title">Contact Me</h2>
      <p className="page-intro">
        Feel free to reach out for collaborations, project discussions, or questions!
      </p>

      <div className="contact-card">
        {/* Help Tooltip Toggle */}
        <div className="tooltip-container">
          <button
            type="button"
            className="toggle-btn"
            onClick={() => setShowTooltip(!showTooltip)}
          >
            {showTooltip ? '✕ Hide Instructions' : 'ℹ Show Form Help'}
          </button>

          {showTooltip && (
            <div className="help-tooltip">
              <p>💡 <strong>Tip:</strong> Type your message in the input below. Watch the live preview update instantly in real time using React's <code>useState</code> hook!</p>
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="messageInput">Your Message / Feedback:</label>
            <input
              id="messageInput"
              type="text"
              className="form-input"
              placeholder="Type your message here..."
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                setSubmitted(false);
              }}
              required
            />
            {/* Live character count */}
            <span className="char-count">
              Character Count: {message.length}
            </span>
          </div>

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>

        {submitted && (
          <div className="success-banner">
            ✅ Message received: "{message}"
          </div>
        )}

        {/* Real-time Display of User Input */}
        <div className="live-preview-box">
          <h3>Real-Time Live Preview</h3>
          <p className="preview-text">
            {message ? message : 'Start typing above to see your input rendered here dynamically in real time...'}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
