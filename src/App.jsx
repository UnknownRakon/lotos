import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Container from './components/Container/Container';
import MainPage from './pages/MainPage/MainPage';
import Footer from './components/Footer/Footer';
import BookingPage from './components/BookingPage/BookingPage';
import ServicePage from './pages/Services/ServicePage';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';
import PromoPage from './pages/PromoPage/PromoPage';

const App = () => {
    return (
        <Router>
            <Container>
                <Header />
                <Routes>
                    <Route exact path="/" element={<MainPage />} />
                    <Route exact path="/booking" element={<BookingPage />} />
                    <Route exact path="/services" element={<ServicePage />} />
                    <Route exact path="/contacts" element={<ContactPage />} />
                    <Route exact path="/about" element={<AboutPage />} />
                    <Route exact path="/stock" element={<PromoPage />} />
                </Routes>
            </Container>
            <Footer />
        </Router>
    );
};

export default App;
