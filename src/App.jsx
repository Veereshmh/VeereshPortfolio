
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
import { BrowserRouter } from "react-router-dom";

function App() {

  return (
    <BrowserRouter basename="/VeereshPortfolio">
    <div className="w-[100%] mx-auto">
      <Header />     
      <Summary /> 
      <Overview />
      <Workhistory />
      <Education />
      <Skills />
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
