import React from 'react';

import { ThemeProvider } from 'emotion-theming';
import preset from '@rebass/preset';

import Navbar from './components/Navbar'
import RecipeItem from './components/RecipeItem'
import recipesData from './data/recipesData'

class App extends React.Component {
    
    constructor(){
        super();
        this.state = {
            loggedIn: false,
            recipes: recipesData
        }
        
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        console.log("logging",this.state.loggedIn ? "out" : "in", "..." )
        this.setState(prevState => {
            return {
                loggedIn: !prevState.loggedIn
            }
        })
    }

    render () {
        const recipes = this.state.recipes.map(item => <RecipeItem key={item.id} recipe={item}/>)
        const theme = {
            ...preset,
        }
        return (
            <ThemeProvider theme={theme}>
                <Navbar />
                {recipes}
            </ThemeProvider>
        )
    }


}

export default App;