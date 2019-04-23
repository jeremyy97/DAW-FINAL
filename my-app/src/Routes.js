import React from 'react';
import {Route,Switch} from 'react-router-dom';
import App from './App.js';
import Begin from './Begin.js';
import login from './login.js';
import Pelicula from './formularios/Peliculas'

const AppRoutes = () => 
    <Begin>
        <Switch>
            <Route path="/menu" component={App}></Route>
            <Route path="/" component={login}></Route>

        </Switch>
    </Begin>;

export default AppRoutes;