
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// // Import your page components
// // import ContentCreatorProfileView from '../components/profileview/profileview';
// // import ContentCreatorProfileEdit from '../components/profileedit/profileedit';
// // import ProductCompanySearchPage from '../components/profilesearch/profilesearch';

// // Import global CSS (if any)

// import ContentCreatorProfileEdit from './components/profileedit/profileedit';
// import ContentCreatorProfileView from './components/profileview/profileview';
// import ProductCompanySearchPage from './components/profilesearch/profilesearch';
// import Navbar from './components/navbar/navbar';
// import ProfilePage from './components/profilprovider';

// function App() {
//   return (
//     <Router>
//       <div className="App">
       
//         <Navbar></Navbar>
//         <Routes>
//           {/* Define routes for different pages */}
//           <Route path="/" element={<ContentCreatorProfileView/>} />
//           <Route path="/edit-profile" element={<ContentCreatorProfileEdit />} />
//           <Route path="/search" element={<ProductCompanySearchPage />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContentCreatorProfileEdit from './components/profileedit/profileedit';
import ContentCreatorProfileView from './components/profileview/profileview';
import ProductCompanySearchPage from './components/profilesearch/profilesearch';
import Navbar from './components/navbar/navbar';
import { ProfileProvider } from './components/profileContext';

function App() {
  return (
    <ProfileProvider>
      
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<ContentCreatorProfileView />} />
            <Route path="/edit-profile" element={<ContentCreatorProfileEdit />} />
            <Route path="/search" element={<ProductCompanySearchPage />} />
          </Routes>
        </div>
      </Router>
    </ProfileProvider>
  );
}

export default App;
