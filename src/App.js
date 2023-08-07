import './App.css';
import About from './component/about/About';
import Home from './component/home/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Service from './component/service/Service';
import Projects from './component/projects/Projects';
import Contact from './component/contact/Contact';
import NotFound from './component/NotFound';
import Qoute from './component/Qoute';
import Team from './component/Team';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/qoute" element={<Qoute />} />
          <Route path="/team" element={<Team />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
