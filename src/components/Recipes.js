import React from 'react';
import { Box, Flex } from 'rebass';
import { Input } from '@rebass/forms';

import RecipeItem from './RecipeItem';

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
        const { params } = this.props.match;
        const category = params.category;
        console.log(category);
        this.setState(prevState => Object.assign(prevState, { loading: true }))
        fetch(`https://family-recipes-api.mybluemix.net/recipes/categories/${category}`)
             .then (response => response.json())
             .then(data => {
                console.log(data);
                this.setState(prevState => Object.assign(prevState, {recipes: data, loading: false}))
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
            return recipe.recipeMetadata.displayName.toLowerCase().indexOf(this.state.searchStr.toLowerCase()) > -1
        }).sort((a, b) => {
            if (a.recipeMetadata.displayName > b.recipeMetadata.displayName) return 1;
            else if (a.recipeMetadata.displayName < b.recipeMetadata.displayName) return -1;
            return 0;
        })

        const recipeItemComponents = filteredRecipes.map(recipe => { 
            return <RecipeItem key={recipe.name} recipe={recipe} />
        })
        
        return (
            <Box>
                <Flex my = {2} >
                    <Input
                        flex='1'
                        color='lightgray'
                        id='email'
                        margin="0px 10px"
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