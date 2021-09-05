import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthRouter } from './AuthRouter';
import { Home } from '../components/pages/Home';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/auth" component={ AuthRouter } />
                    <Route exact path="/" component={ Home } />
                </Switch>
            </div>
            
        </Router>
    )
}