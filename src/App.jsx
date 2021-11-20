import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Container from './components/Container/Container';
import MainPage from './pages/MainPage/MainPage';
import Footer from './components/Footer/Footer';
import BookingPage from './components/BookingPage/BookingPage';

const App = () => {
    return (
        <Router>
            <Container>
                <Header />
                <Routes>
                    <Route exact path="/" element={<MainPage />} />
                </Routes>
                <Routes>
                    <Route exact path="/booking" element={<BookingPage />} />
                </Routes>
            </Container>
            <Footer />
        </Router>
    );
};

export default App;
