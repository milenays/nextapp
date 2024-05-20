import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <Router>
            <Navbar />
            <div className="container mx-auto p-4">
                <Switch>
                    <Route path="/dashboard" component={Dashboard} />
                    {/* Diğer sayfa bileşenlerini buraya ekleyin */}
                </Switch>
            </div>
        </Router>
    );
};

export default App;
