
import './App.css'
// import Counter from './components/counter/Counter'
// import Counting from './components/counting/Counting'
import Education from './components/education/Education'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Overview from './components/overview/Overview'
import Summary from './components/summary/Summary'
// import Userapi from './components/usertableapi/Userapi'
import Workhistory from './components/workhistory/Workhistory'
import Skills from './components/skills/Skills'
import Timeline from './components/timeline/Timeline'
import { BrowserRouter, Routes } from "react-router-dom";
import Languages from './components/languages/Languages'
import Contact from './components/contact/Contact'
import Notfound from './components/notfound/Notfound'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {

  return (
    <BrowserRouter basename="/VeereshPortfolio">
    <div className="w-[100%] mx-auto">
      <Router>
        <nav className="flex gap-6 mb-6">
          <Link to="/" className="text-blue-500 hover:underline">Home</Link>
          <Link to="/contact" className="text-blue-500 hover:underline">Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} /> {/* Wildcard Route */}
        </Routes>

      </Router>
      <Header />     
      <Summary /> 
      <Overview />
      <Workhistory />
      <Education />
      <Skills />
      <Languages />
      <Timeline />
      {/* <Userapi /> */}
      {/* <Counting /> */}
      <Footer />
      {/* <Counter /> */}
    </div>
      </BrowserRouter>
    
  )
}

export default App
