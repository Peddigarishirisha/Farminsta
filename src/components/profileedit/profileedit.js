import React, { useContext } from 'react';

import './profileedit.css';
import { ProfileContext } from '../profileContext';

const ContentCreatorProfileEdit = () => {
  const { profile, updateProfile } = useContext(ProfileContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Additional logic if needed
  };

  return (
    <div className='maineditor'>
      <h1>Content Editor</h1>
      <form className="edit-form" onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" value={profile.name} onChange={updateProfile} />
        
        <label>Email</label>
        <input type="email" name="email" value={profile.email} onChange={updateProfile} />
        
        <label>Description</label>
        <textarea name="description" value={profile.description} onChange={updateProfile}></textarea>
        
        <label>Languages</label>
        <input type="text" name="languages" value={profile.languages} onChange={updateProfile} />
        
        <label>Education</label>
        <input type="text" name="education" value={profile.education} onChange={updateProfile} />
        
        <label>Specialization</label>
        <input type="text" name="specialization" value={profile.specialization} onChange={updateProfile} />
        
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default ContentCreatorProfileEdit;
