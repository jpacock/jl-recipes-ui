import React from 'react';

import RecipeItem from './RecipeItem';

import { Box, Flex } from 'rebass';
import { Input } from '@rebass/forms';

class Recipes extends React.Component {
    constructor() {
        super();

        this.state = {
            loading: false,
            recipes: {},
            searchStr: ""
        }
        this.handleType = this.handleType.bind(this);
    }

    componentDidMount() {
        this.setState(prevState => Object.assign(prevState, { loading: true }))
        fetch("https://family-recipes-api.mybluemix.net/api/v1/recipes")
             .then (response => response.json())
             .then(data => {
                this.setState(prevState => Object.assign(prevState, {recipes: data.recipes, loading: false}))
             })
    }

    handleType(char) {
        this.setState(prevState => {
            return Object.assign(prevState, { searchStr: char })
        })
    }

    render() {
        if(this.state.loading || Object.keys(this.state.recipes).length === 0)
            return <p>loading...</p>

        const filteredRecipes = this.state.recipes.filter(recipe => {
            return recipe.name.toLowerCase().indexOf(this.state.searchStr.toLowerCase()) > -1
        }).sort((a, b) => {
            if (a.name > b.name) return 1;
            else if (a.name < b.name) return -1;
            return 0;
        })

        const recipeItemComponents = filteredRecipes.map(recipe => { 
            return <RecipeItem key={recipe._id} recipe={recipe} />
        })
        
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
                {recipeItemComponents}
            </Box>
        );
    }
}

export default Recipes;