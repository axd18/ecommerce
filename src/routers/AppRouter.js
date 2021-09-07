import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthRouter } from './AuthRouter';
import { Home } from '../components/pages/Home';
import { CrearProducto } from '../components/pages/CrearProducto';
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
                    <Route path="/auth" component={ AuthRouter } />
                    <Route exact path="/" component={ Home } />
                    <Route exact path="/crear-producto" component={CrearProducto} />
                </Switch>
            </div>
            
        </Router>
    )
}