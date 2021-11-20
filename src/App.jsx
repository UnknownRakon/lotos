import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Container from './components/Container/Container';
import MainPage from './pages/MainPage/MainPage';

const App = () => {
    return (
        <Router>
            <Container>
                <Header />
                <Routes>
                    <Route exact path="/" element={<MainPage />} />
                </Routes>
            </Container>
        </Router>
    );
};

export default App;
