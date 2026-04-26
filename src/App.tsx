import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/company/About';
import CEO from './pages/company/CEO';
import Location from './pages/company/Location';
import Gallery from './pages/Gallery';
import Services from './pages/Services';
import FirstMarriage from './pages/services/FirstMarriage';
import Remarriage from './pages/services/Remarriage';
import Noblesse from './pages/services/Noblesse';
import Saeteomin from './pages/services/Saeteomin';
import Procedure from './pages/membership/Procedure';
import Fee from './pages/membership/Fee';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="ceo" element={<CEO />} />
          <Route path="location" element={<Location />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="services" element={<Services />} />
          <Route path="services/first-marriage" element={<FirstMarriage />} />
          <Route path="services/remarriage" element={<Remarriage />} />
          <Route path="services/noblesse" element={<Noblesse />} />
          <Route path="services/saeteomin" element={<Saeteomin />} />
          <Route path="membership/procedure" element={<Procedure />} />
          <Route path="membership/fee" element={<Fee />} />
        </Route>
      </Routes>
    </Router>
  );
}
