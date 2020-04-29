import React from 'react';
import { 
    BrowserRouter as Router,
    Route,
    Switch 
} from 'react-router-dom';

import { ThemeProvider } from 'emotion-theming';
import preset from '@rebass/preset';


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
        }
        return (
            <ThemeProvider theme={theme}>
        
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