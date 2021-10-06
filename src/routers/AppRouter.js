import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute  } from './PublicRoute';
import { Home } from '../components/pages/Home';
import { Dashboard } from '../components/pages/Dashboard';
import { firebase } from '../firebase/firebase-config';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';

export const AppRouter = () => {
    
    const dispatch = useDispatch();
    const [ checking, setChecking ] = useState(true);
    const [ IsLoggedIn, setIsLoggedIn ] = useState(false);
    
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if(user?.uid) {
                dispatch(login(user.uid, user.displayName) );
                setIsLoggedIn( true );
            } else {
                setIsLoggedIn( false );
            }
            setChecking(false);
        })
    }, [dispatch, setChecking, setIsLoggedIn]);

    if ( checking ) {
        return (
            <h1>Cargando...</h1>
        )
    }
    
    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute path="/auth" component={ AuthRouter } isAuthenticated={ IsLoggedIn }/>
                    <Route exact path="/" component={ Home } />
                    <PrivateRoute exact isAuthenticated={ IsLoggedIn } path="/dashboard" component={Dashboard} />
                </Switch>
            </div>
            
        </Router>
    )
}