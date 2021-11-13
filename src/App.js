import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import Shop from "./components/pages/Shop/Shop";
import SingleProduct from "./components/singleComponents/SingleProduct/SingleProduct";
import Register from "./components/pages/Register/Register";
import Login from "./components/pages/Login/Login";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./routes/PrivateRoute";
import SingleCheckout from "./components/pages/SingleCheckout/SingleCheckout";
import AppBar from './components/sharedComponents/AppBar/AppBar'
import Footer from "./components/sharedComponents/Footer/Footer";
import Contact from "./components/pages/Contact/Contact";

function App() {
    return (
        <div className='App'>
            <AuthProvider>
                <Router>
                    <Switch>
                        <Route exact path='/'>
                            <Home></Home>
                        </Route>
                        <Route exact path='/shop'>
                            <Shop></Shop>
                        </Route>
                        <Route exact path='/login'>
                            <Login></Login>
                        </Route>
                        <Route exact path='/register'>
                            <Register></Register>
                        </Route>
                        <Route exact path='/contact'>
                            <Contact></Contact>
                        </Route>
                        <PrivateRoute exact path='/shop/:id'>
                            <SingleProduct></SingleProduct>
                        </PrivateRoute>
                        <PrivateRoute path='/checkout/:id'>
                            <SingleCheckout></SingleCheckout>
                        </PrivateRoute>
                        <PrivateRoute path='/dashboard'>
                            <Dashboard></Dashboard>
                        </PrivateRoute>
                    </Switch>
                </Router>
            </AuthProvider>
        </div>
    );
}

export default App;
