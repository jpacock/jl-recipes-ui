import React from 'react';

import RecipeItem from './RecipeItem';
import recipesData from '../data/recipesData';

import { Box, Flex } from 'rebass';
import { Input } from '@rebass/forms';

class Recipes extends React.Component {
    constructor() {
        super();

        this.state = {
            recipes: recipesData,
            searchStr: ""
        }
        this.handleType = this.handleType.bind(this);
    }

    handleType(char) {
        console.log("character pressed:", char)
        this.setState(prevState => {
            return Object.assign(prevState, { searchStr: char })
        })
    }

    render() {
        const filteredRecipes = this.state.recipes.filter(recipe => {
            return recipe.name.toLowerCase().indexOf(this.state.searchStr.toLowerCase()) > -1
        }).sort((a, b) => {
            if (a.name > b.name) return 1;
            else if (a.name < b.name) return -1;
            return 0;
        })
        const recipes = filteredRecipes.map(recipe => <RecipeItem key={recipe.id} recipe={recipe} />)
        
        return (
            <Box>
                <Flex my = {2} >
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
            </Box>
        );
    }
}

export default Recipes;