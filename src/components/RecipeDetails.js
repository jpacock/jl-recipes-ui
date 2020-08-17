import React from 'react';
import { Box, Flex, Heading } from 'rebass';
import Spinner from './Spinner';

class RecipeDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      recipe: {},
    }
  }
  componentDidMount() {
    const { params } = this.props.match;
    const { name } = params;
    console.log('test')
    fetch(`https://family-recipes-api.mybluemix.net/recipes/${name}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState(prevState => Object.assign(prevState, { recipe: data[0], loading: false }))
      })
  }

  render() {
    if(this.state.loading) {
      return (<Spinner />)
    }
    return (
      <Box>
        <Flex
        width="100%" justifyContent="center">
          <Heading>{this.state.recipe.recipeMetadata.displayName}</Heading>
        </Flex>
        <Heading
                    as='h1'
                    p={2}>
                    Ingredients
                  </Heading>
        <Box>
          <ul
            style={{
              "listStyleType": "none",
            }}>
            {this.state.recipe.recipeMetadata.ingredients?.map(ingredient =>
              <li key={ingredient}><Box my={2}>{ingredient}</Box></li>)}
          </ul>
        </Box>
        <Box hidden={this.state.recipe.recipeMetadata.instructions ? false : true}>
          <Heading
            as='h1'
            p={2}>
            Instructions
            </Heading>
          <ul
            style={{
              "listStyleType": "none"
            }}>
            {this.state.recipe.recipeMetadata.instructions?.map(instruction =>
              <li key={instruction.step}><Flex my={2} >
                <Box minWidth="8px">{instruction.step}.</Box>
                <Box padding="0px 10px">{instruction.text}</Box>
              </Flex>
              </li>)}
          </ul>
        </Box>
      </Box>
    );
  }
}

export default RecipeDetails;
