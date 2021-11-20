import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Container from './components/Container/Container';
import MainPage from './pages/MainPage/MainPage';
import Footer from './components/Footer/Footer';

const App = () => {
    return (
        <Router>
            <Container>
                <Header />
                <Routes>
                    <Route exact path="/" element={<MainPage />} />
                </Routes>
            </Container>
            <Footer />
        </Router>
    );
};

export default App;
