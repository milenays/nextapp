import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-gray-100">
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    {/* Diğer route'lar buraya gelecek */}
                </Switch>
            </div>
        </Router>
    );
}

export default App;
