import Home from './Home';
import './Home.css';
import SecondPage from '../components/SecondPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="SecondPage/:address"
                    element={<SecondPage />}
                />
            </Routes>
        </Router>
    );
}

export default App;