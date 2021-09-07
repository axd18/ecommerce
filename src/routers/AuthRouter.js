import { Redirect, Route, Switch } from "react-router-dom"
import CrearProducto from '../components/pages/CrearProducto';
import RegisterScreen from '../components/auth/RegisterScreen';
import LoginScreen from '../components/auth/LoginScreen';


export const AuthRouter = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/auth/login" component={LoginScreen} />
                <Route exact path="/auth/registro" component={RegisterScreen} />
                <Redirect to="/auth/login"/>
            </Switch>
        </div>
    )
}