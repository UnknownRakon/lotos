import { HashRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import Container from './components/Container/Container';

const App = () => {
    return (
        <Router>
            <Container>
                <Header />
            </Container>
        </Router>
    );
};

export default App;
