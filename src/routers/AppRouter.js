import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthRouter } from './AuthRouter';
import { Home } from '../components/pages/Home';
import { CrearProducto } from '../components/pages/CrearProducto';
import { firebase } from '../firebase/firebase-config';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';

export const AppRouter = () => {
    
    const dispatch = useDispatch() 
    
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if(user?.uid) {
                dispatch(login(user.uid, user.displayName) );
            }
        })
    }, [dispatch])
    
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/auth" component={ AuthRouter } />
                    <Route exact path="/" component={ Home } />
                    <Route exact path="/crear-producto" component={CrearProducto} />
                </Switch>
            </div>
            
        </Router>
    )
}