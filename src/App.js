import React from 'react';

import { ThemeProvider } from 'emotion-theming';
import preset from '@rebass/preset';
import { Flex } from 'rebass';
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
        }).sort((a,b) =>  {
            if (a.name > b.name) return 1;
            else if (a.name < b.name) return -1;
            return 0;
        })
        const recipes = filteredRecipes.map(recipe => <RecipeItem key={recipe.id} recipe={recipe} />)
        const theme = {
            ...preset,
        }
        return (
            <ThemeProvider theme={theme}>
                <Navbar />
                <Flex my={2}>
                    <Input
                        flex='1'
                        color='lightgray'
                        id='email'
                        name='email'
                        placeholder='Find Recipe'
                        onChange={e => this.handleType(e.target.value)}
                    />
                </Flex>
                {recipes}
            </ThemeProvider>
        )
    }


}

export default App;