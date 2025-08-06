import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MoodCheckin from './components/MoodCheckin';
import Dashboard from './components/Dashboard';
import FeedbackBox from './components/FeedbackBox';

const App = () => {
    return (
        <Router>
            <div>
                <h1>NeuroFlow</h1>
                <Switch>
                    <Route path="/" exact component={MoodCheckin} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/feedback" component={FeedbackBox} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;