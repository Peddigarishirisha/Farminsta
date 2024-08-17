import React, { createContext, useState } from 'react';

// Create a context for the profile
export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState({
    name: 'Shirisha Peddigari ',
    email: 'shirishapeddigari6@example.com',
    description: 'Experienced Content Creator specializing in short-form video content.',
    languages: 'English, Hindi',
    education: "Bachelor's in Media Studies",
    specialization: 'Video Editing, Social Media Marketing',
  });

  const updateProfile = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  return (
    <ProfileContext.Provider value={{ profile, updateProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};
