import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Posts from './Components/Posts/Posts';
import Comment from "./Components/Comment/Comment";
import Todos from './Components/Todos/Todos';
import Album from './Components/Album/Album';
import Photos from './Components/Photos/Photos';

const App = () => {

    return (
        <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/posts" component={Posts}/>
                    <Route exact path="/comment" component={Comment}/>
                    <Route exact path="/todos" component={Todos}/>
                    <Route exact path="/album" component={Album}/>
                    <Route exact path="/photo" component={Photos}/>
                </Switch>

        </BrowserRouter>
    )
}

export default App
