import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import { ThemeProvider } from 'emotion-theming';
import preset from '@rebass/preset';

import { toast, ToastContainer, Slide } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

import Navbar from './components/Navbar';
import Recipes from './components/Recipes';
import AddRecipe from './components/AddRecipe';



class App extends React.Component {

    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log("logging", this.state.loggedIn ? "out" : "in", "...")
        this.setState(prevState => {
            return {
                loggedIn: !prevState.loggedIn
            }
        })
    }

    render() {
        const theme = {
            ...preset,
            buttons: {
                primary: {
                  color: 'white',
                  bg: 'primary',
                },
                outline: {
                  color: 'primary',
                  bg: 'transparent',
                  boxShadow: 'inset 0 0 0 2px'
                },
              },

        }
        console.log(theme);

        const theme2 = {

        }
        
        toast.configure();


        return (
            <ThemeProvider theme={theme}>
                <ToastContainer transition={Slide} />
                <Navbar />
                <Router>
                    <Switch>
                        <Route path="/" exact component={Recipes} />
                        <Route path="/add-recipe" component={AddRecipe} />
                    </Switch>
                </Router>
            </ThemeProvider>
        );
    }


}

export default App;