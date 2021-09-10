import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthRouter } from './AuthRouter';
import Footer from '../components/footer/Footer';

// import { LoginScreen } from '../components/auth/LoginScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/auth" component={ AuthRouter } />
                    <Route exact path="/" component={Footer} />
                    {/* <Route exact path="/" component={ LoginScreen } /> */}
                </Switch>
            </div>
            
        </Router>
    )
}