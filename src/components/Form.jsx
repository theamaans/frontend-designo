import React from 'react';

function Form() {
  return (
    <div>
      <div className="form-container">
        <div className="form-content">
          <h1 className="form-title">LET'S TALK</h1>
          <form className="form">
            <div className="form-inputs">
              <input
                type="text"
                placeholder="What's Your Name"
                className="input-field"
              />
              <input
                type="email"
                placeholder="Your E-mail"
                className="input-field"
              />
            </div>
            <textarea
              placeholder="Tell Us About Your Project"
              className="textarea-field"
            />
            <button className="submit-button">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
