import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '@components/Header';
import Container from '@components/Container';
import MainPage from '@pages/MainPage';
import Footer from '@components/Footer';
import BookingPage from '@pages/BookingPage';
import ServicePage from '@pages/ServicesPage/ServicePage';
import AboutPage from '@pages/AboutPage';
import ContactPage from '@pages/ContactPage';
import PromoPage from '@pages/PromoPage';
import News from '@pages/NewsPage';

const App = () => {
    return (
        <Router>
            <Container>
                <Header />
                <Routes>
                    <Route exact path="/" element={<MainPage />} />
                    <Route exact path="/booking" element={<BookingPage />} />
                    <Route exact path="/services" element={<ServicePage />} />
                    <Route exact path="/news" element={<News />} />
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
