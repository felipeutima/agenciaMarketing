
//import './styles/App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import store from './store';
import { Provider } from 'react-redux'; 
import Error404 from 'containers/errors/Error404';
import Home from 'containers/pages/Home';
import Cases from 'containers/pages/Cases';
import Services from 'containers/pages/Services';
import Contact from 'containers/pages/Contact';
import Careers from 'containers/pages/Careers';
import About from 'containers/pages/About';
import Blog from 'containers/pages/Blog';

function App() { 
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/*Error Display */}
          <Route path="*" element={<Error404 />} />

          {/*Home Display */}
          <Route path="/" element={<Home />} />
          <Route path="/Cases" element={<Cases/>} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Careers" element={<Careers />} />
          <Route path="/About" element={<About />} />
          <Route path="/Blog" element={<Blog />} />

        </Routes>
      </Router>
    </Provider>

  );
}

export default App;
