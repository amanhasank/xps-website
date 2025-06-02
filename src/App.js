import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/Productss';
import CareersPage from './pages/CareersPage';
import ContactUsPage from './pages/ContactUsPage';
import IndustryPage from './pages/IndustryPage';
import EventsPage from './pages/EventsPage';
import PlantGalleryPage from './pages/PlantGalleryPage';
import ManufacturingPage from './pages/ManufacturingPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/industry" element={<IndustryPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/gallery" element={<PlantGalleryPage />} />
          <Route path="/manufacturing" element={<ManufacturingPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
