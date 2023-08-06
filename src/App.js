import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './Home';
import Services from './Services';
import Pricing from './Pricing';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Intro from './Intro';
import ProductPage from './ProductPage';
import NavBar from './NavBar';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <nav>
                        <NavBar />
                        <ul>
                            <li><Link to="/">Intro</Link></li>
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/pricing">Pricing</Link></li>
                            <li><Link to="/testimonials">Testimonials</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/productpage">ProductPage</Link></li>
                        </ul>
                    </nav>

                    <Routes>
                        <Route path="/productpage" element={<ProductPage />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/testimonials" element={<Testimonials />} />
                        <Route path="/pricing" element={<Pricing />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/" element={<Intro />} />
                    </Routes>
                </div>
            </Router>
        );
    }
}

export default App;
