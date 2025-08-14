import './App.css';

// Components
import Education from './components/education/Education';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Overview from './components/overview/Overview';
import Summary from './components/summary/Summary';
import Workhistory from './components/workhistory/Workhistory';
import Skills from './components/skills/Skills';
import Timeline from './components/timeline/Timeline';
import Languages from './components/languages/Languages';
import Contact from './components/contact/Contact';
import Notfound from './components/notfound/Notfound';

// Router
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/VeereshPortfolio">
      <div className="w-[100%] mx-auto">
        
        {/* Navigation */}
        <nav className="flex gap-6 mb-6 p-4 bg-gray-200">
          <Link to="/" className="text-blue-500 hover:underline">Home</Link>
          <Link to="/contact" className="text-blue-500 hover:underline">Contact</Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Summary />
                <Overview />
                <Workhistory />
                <Education />
                <Skills />
                <Languages />
                <Timeline />
                <Footer />
              </>
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
