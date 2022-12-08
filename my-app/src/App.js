import Home from './Home';
import './Home';
import SecondPage from './SecondPage';
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