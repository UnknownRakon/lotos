import { HashRouter as Router } from 'react-router-dom';
import Header from './components/header/Header';
import Container from './components/container/Container';

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
