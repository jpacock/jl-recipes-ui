import React from 'react';

import { ThemeProvider } from 'emotion-theming';
import preset from '@rebass/preset';
import { Box } from 'rebass';
import { Input } from '@rebass/forms';

import Navbar from './components/Navbar';
import RecipeItem from './components/RecipeItem';
import recipesData from './data/recipesData';


class App extends React.Component {

    constructor() {
        super();
        this.state = {
            loggedIn: false,
            recipes: recipesData,
            searchStr: ""
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleType = this.handleType.bind(this);
    }

    handleClick() {
        console.log("logging", this.state.loggedIn ? "out" : "in", "...")
        this.setState(prevState => {
            return {
                loggedIn: !prevState.loggedIn
            }
        })
    }

    handleType(char) {
        console.log("character pressed:", char)
        this.setState(prevState => {
            return Object.assign(prevState, {searchStr: char})
        })
    }

    render() {
        const filteredRecipes = this.state.recipes.filter(recipe => {
            return recipe.name.toLowerCase().indexOf(this.state.searchStr.toLowerCase()) > -1
        })
        const recipes = filteredRecipes.map(item => <RecipeItem key={item.id} recipe={item} />)
        const theme = {
            ...preset,
        }
        return (
            <ThemeProvider theme={theme}>
                <Navbar />
                <Box>
                    <Input
                        m={1}
                        id='email'
                        name='email'
                        placeholder='Find Recipe'
                        onChange={e => this.handleType(e.target.value)}
                    />
                </Box>
                {recipes}
            </ThemeProvider>
        )
    }


}

export default App;