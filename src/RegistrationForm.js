import React, { useState } from 'react';
import './RegistrationForm.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    linkedIn: '',
    gender: '',
    skills: {
      javascript: false,
      html: false,
      css: false
    }
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        skills: {
          ...formData.skills,
          [name]: checked
        }
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleClear = () => {
    setFormData({
      username: '',
      email: '',
      linkedIn: '',
      gender: '',
      skills: {
        javascript: false,
        html: false,
        css: false
      }
    });
    setSubmittedData(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
        username: '',
        email: '',
        linkedIn: '',
        gender: '',
        skills: {
          javascript: false,
          html: false,
          css: false
        }
      });
    setSubmittedData(formData);
  };

  return (
    <div className="registration-container">
      <form className="registration-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>LinkedIn Profile:</label>
          <input type="url" name="linkedIn" value={formData.linkedIn} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Gender:</label>
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group skills">
          <label>Skills:</label>
          <div className="checkbox-group">
            <label>
              <input type="checkbox" name="javascript" checked={formData.skills.javascript} onChange={handleChange}/>
              JavaScript
            </label>
            <label>
              <input type="checkbox" name="html" checked={formData.skills.html} onChange={handleChange} />
              HTML
            </label>
            <label>
              <input type="checkbox" name="css" checked={formData.skills.css} onChange={handleChange} />
              CSS
            </label>
          </div>
        </div>
        <div className="form-actions">
          <button type="submit">Enroll</button>&nbsp;&nbsp;
          <button type="button" onClick={handleClear}>Clear</button>
        </div>
      </form>

      {submittedData && (
        <div className="submitted-data">
          <h2>Student Details</h2>
          <p><strong>Username:</strong> {submittedData.username}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>LinkedIn:</strong> <a href={submittedData.linkedIn} target="_blank" rel="noopener noreferrer">{submittedData.linkedIn}</a></p>
          <p><strong>Gender:</strong> {submittedData.gender}</p>
          <p><strong>Skills:</strong> {Object.keys(submittedData.skills).filter(skill => submittedData.skills[skill]).join(', ')}</p>
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;
