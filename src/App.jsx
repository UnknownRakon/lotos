import { HashRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import Container from './components/Container/Container';
import BookingPage from './components/BookingPage/BookingPage';

const App = () => {
    return (
        <Router>
            <Container>
                <Header />
                <BookingPage />
            </Container>
        </Router>
    );
};

export default App;
