import React, { useState } from 'react';
import './profilesearch.css';
const profileData = [
  {
    id: 1,
    profilePic: 'https://randomuser.me/api/portraits/men/11.jpg',
    name: 'Chris Evans',
    email: 'chris.evans@example.com',
    language: 'English',
    education: 'B.Tech',
    specialization: 'Data Science',
  },
  {
    id: 2,
    profilePic: 'https://randomuser.me/api/portraits/women/11.jpg',
    name: 'Olivia Johnson',
    email: 'olivia.johnson@example.com',
    language: 'French',
    education: 'M.Tech',
    specialization: 'Machine Learning',
  },
  {
    id: 3,
    profilePic: 'https://randomuser.me/api/portraits/men/12.jpg',
    name: 'Liam Brown',
    email: 'liam.brown@example.com',
    language: 'English',
    education: 'B.Tech',
    specialization: 'PHP Development',
  },
  {
    id: 4,
    profilePic: 'https://randomuser.me/api/portraits/women/12.jpg',
    name: 'Emma Davis',
    email: 'emma.davis@example.com',
    language: 'Spanish',
    education: 'M.Sc',
    specialization: 'Data Science',
  },
  {
    id: 5,
    profilePic: 'https://randomuser.me/api/portraits/men/13.jpg',
    name: 'Noah Wilson',
    email: 'noah.wilson@example.com',
    language: 'German',
    education: 'PhD',
    specialization: 'Artificial Intelligence',
  },
  {
    id: 6,
    profilePic: 'https://randomuser.me/api/portraits/women/13.jpg',
    name: 'Sophia Miller',
    email: 'sophia.miller@example.com',
    language: 'English',
    education: 'MBA',
    specialization: 'Business Analytics',
  },
  {
    id: 7,
    profilePic: 'https://randomuser.me/api/portraits/men/14.jpg',
    name: 'William Moore',
    email: 'william.moore@example.com',
    language: 'Italian',
    education: 'B.Sc',
    specialization: 'Cybersecurity',
  },
  {
    id: 8,
    profilePic: 'https://randomuser.me/api/portraits/women/14.jpg',
    name: 'Mia Taylor',
    email: 'mia.taylor@example.com',
    language: 'English',
    education: 'M.Tech',
    specialization: 'Software Engineering',
  },
  {
    id: 9,
    profilePic: 'https://randomuser.me/api/portraits/men/15.jpg',
    name: 'James Anderson',
    email: 'james.anderson@example.com',
    language: 'English',
    education: 'BCA',
    specialization: 'Web Development',
  },
  {
    id: 10,
    profilePic: 'https://randomuser.me/api/portraits/women/15.jpg',
    name: 'Isabella Thomas',
    email: 'isabella.thomas@example.com',
    language: 'Portuguese',
    education: 'MCA',
    specialization: 'Mobile App Development',
  },
  {
    id: 11,
    profilePic: 'https://randomuser.me/api/portraits/men/16.jpg',
    name: 'Elijah Martin',
    email: 'elijah.martin@example.com',
    language: 'French',
    education: 'M.Sc',
    specialization: 'Cloud Computing',
  },
  {
    id: 12,
    profilePic: 'https://randomuser.me/api/portraits/women/16.jpg',
    name: 'Amelia Harris',
    email: 'amelia.harris@example.com',
    language: 'Spanish',
    education: 'B.Tech',
    specialization: 'Data Engineering',
  },
  {
    id: 13,
    profilePic: 'https://randomuser.me/api/portraits/men/17.jpg',
    name: 'Logan Lee',
    email: 'logan.lee@example.com',
    language: 'English',
    education: 'M.Sc',
    specialization: 'Network Engineering',
  },
  {
    id: 14,
    profilePic: 'https://randomuser.me/api/portraits/women/17.jpg',
    name: 'Ava Walker',
    email: 'ava.walker@example.com',
    language: 'German',
    education: 'MBA',
    specialization: 'IT Management',
  },
  {
    id: 15,
    profilePic: 'https://randomuser.me/api/portraits/men/18.jpg',
    name: 'Mason Perez',
    email: 'mason.perez@example.com',
    language: 'Italian',
    education: 'B.Tech',
    specialization: 'Blockchain Development',
  },
  {
    id: 16,
    profilePic: 'https://randomuser.me/api/portraits/women/18.jpg',
    name: 'Harper Wright',
    email: 'harper.wright@example.com',
    language: 'English',
    education: 'M.Sc',
    specialization: 'Artificial Intelligence',
  },
  {
    id: 17,
    profilePic: 'https://randomuser.me/api/portraits/men/19.jpg',
    name: 'Ethan Hall',
    email: 'ethan.hall@example.com',
    language: 'Spanish',
    education: 'M.Tech',
    specialization: 'Data Analytics',
  },
  {
    id: 18,
    profilePic: 'https://randomuser.me/api/portraits/women/19.jpg',
    name: 'Charlotte Allen',
    email: 'charlotte.allen@example.com',
    language: 'English',
    education: 'B.Sc',
    specialization: 'UI/UX Design',
  },
  {
    id: 19,
    profilePic: 'https://randomuser.me/api/portraits/men/20.jpg',
    name: 'Lucas Young',
    email: 'lucas.young@example.com',
    language: 'French',
    education: 'PhD',
    specialization: 'Natural Language Processing',
  },
  {
    id: 20,
    profilePic: 'https://randomuser.me/api/portraits/women/20.jpg',
    name: 'Ella King',
    email: 'ella.king@example.com',
    language: 'Portuguese',
    education: 'MBA',
    specialization: 'Project Management',
  },
  {
    id: 21,
    profilePic: 'https://randomuser.me/api/portraits/men/21.jpg',
    name: 'Jacob Scott',
    email: 'jacob.scott@example.com',
    language: 'English',
    education: 'B.Tech',
    specialization: 'DevOps',
  },
  {
    id: 22,
    profilePic: 'https://randomuser.me/api/portraits/women/21.jpg',
    name: 'Abigail Lewis',
    email: 'abigail.lewis@example.com',
    language: 'French',
    education: 'M.Sc',
    specialization: 'Robotics',
  },
  {
    id: 23,
    profilePic: 'https://randomuser.me/api/portraits/men/22.jpg',
    name: 'Benjamin Robinson',
    email: 'benjamin.robinson@example.com',
    language: 'German',
    education: 'PhD',
    specialization: 'Quantum Computing',
  },
  {
    id: 24,
    profilePic: 'https://randomuser.me/api/portraits/women/22.jpg',
    name: 'Emily Rodriguez',
    email: 'emily.rodriguez@example.com',
    language: 'Spanish',
    education: 'MCA',
    specialization: 'Game Development',
  },
  {
    id: 25,
    profilePic: 'https://randomuser.me/api/portraits/men/23.jpg',
    name: 'Henry Martinez',
    email: 'henry.martinez@example.com',
    language: 'English',
    education: 'B.Tech',
    specialization: 'Full Stack Development',
  },
];




const Profilesearch = () => {
  const [data, setData] = useState(profileData);
  const [searchLanguage, setSearchLanguage] = useState('');
  const [searchEducation, setSearchEducation] = useState('');
  const [searchSpecialization, setSearchSpecialization] = useState('');
  const [searchEmail, setSearchEmail] = useState('');


  const handleSearch = () => {
    const filteredData = profileData.filter((profile) => {
      return (
        (searchLanguage === '' || profile.language.toLowerCase().includes(searchLanguage.toLowerCase())) &&
        (searchEducation === '' || profile.education.toLowerCase().includes(searchEducation.toLowerCase())) &&
        (searchSpecialization === '' || profile.specialization.toLowerCase().includes(searchSpecialization.toLowerCase()))&&
        (searchEmail=== '' || profile.email.toLowerCase().includes(searchEmail.toLowerCase()))
      );
    });
    setData(filteredData);
  };

  return (

    <div className='mainsearch'>
    <div className="homepage">
      <div className="search-container">
        <input
        className='searchinput'
          type="text"
          placeholder="Search by Language"
          value={searchLanguage}
          onChange={(e) => setSearchLanguage(e.target.value)}
        />
        <input
        className='searchinput'
          type="text"
          placeholder="Search by Education"
          value={searchEducation}
          onChange={(e) => setSearchEducation(e.target.value)}
        />
        <input
          type="text"
          className='searchinput'
          placeholder="Search by Specialization"
          value={searchSpecialization}
          onChange={(e) => setSearchSpecialization(e.target.value)}
        />
        <input
          type="text"
          className='searchinput'
          placeholder="Search by email"
          value={searchEmail}
          onChange={(e) => setSearchEmail(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="cards-container">
        {data.map((profile) => (
          <div key={profile.id} className="card">
            <img src={profile.profilePic} alt={profile.name} />
            <h2>{profile.name}</h2>
            <p>Language: {profile.language}</p>
            <p>Education: {profile.education}</p>
            <p>Specialization: {profile.specialization}</p>
            <p>Email:{profile.email}</p>
          </div>
        ))}
      </div>
    </div>

    </div>
  );
};

export default Profilesearch;