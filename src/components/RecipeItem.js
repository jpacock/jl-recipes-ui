import React from "react";
import Collapsible from 'react-collapsible';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { IoMdOpen } from 'react-icons/io';
import {
  Box,
  Card,
  Flex,
  Heading,
  Text
} from 'rebass';

class RecipeItem extends React.Component {
  constructor() {
    super()
    this.state = {
      open: false
    }
    this.toggleCollapsible = this.toggleCollapsible.bind(this);
  }

  toggleCollapsible() {
    this.setState(prevState => {
      return {
        open: !prevState.open
      }
    })
  }

  render() {
    return (
      <Box fontFamily='Arial'>
        <Flex>
          <Card flex='1'
            my='1'>
            <Collapsible open={this.state.open} transitionTime={100} trigger={
              <Flex bg='#264653'
                color='#eeeeee'
                alignItems='center'
                onClick={e => this.toggleCollapsible()}>
                <Flex flex='1'
                  p={1}
                  my={10}
                  fontSize={2}
                  padding='10'>
                  <Text
                    p={3}
                    fontSize={[3, 4, 5]}>
                    {this.props.recipe.recipeMetadata.displayName}
                  </Text>
                </Flex>
                <Box mx='auto' />
                <Flex p={4}
                  justifyContent='center'
                  alignItems='center'>
                  {this.state.open ? <FaChevronUp /> : <FaChevronDown />}
                </Flex>
              </Flex>
            }>
              <Box>
                <Flex width="100%">
                  <Heading
                    as='h1'
                    p={2}>
                    Ingredients
                  </Heading>
                  <Box mx='auto' />
                  <a href={`/recipes/${this.props.recipe.name}`}
                    style={{ textDecoration: 'none', "color": "#048ba8" }}>
                    <Box
                      padding="10px 25px">
                      <IoMdOpen size={32} />
                    </Box>
                  </a>
                </Flex>
                <ul
                  style={{
                    "listStyleType": "none"
                  }}>
                  {this.props.recipe.recipeMetadata.ingredients?.map(ingredient =>
                    <li key={ingredient}><Box my={2}>{ingredient}</Box></li>)}
                </ul>
              </Box>
              <Box hidden={this.props.recipe.recipeMetadata.instructions ? false : true}>
                <Heading
                  as='h1'
                  p={2}>
                  Instructions
                        </Heading>
                <ul
                  style={{
                    "listStyleType": "none"
                  }}>
                  {this.props.recipe.recipeMetadata.instructions?.map(instruction =>
                    <li key={instruction.step}><Flex my={2} >
                      <Box minWidth="8px">{instruction.step}.</Box>
                      <Box padding="0px 10px">{instruction.text}</Box>
                    </Flex>
                    </li>)}
                </ul>
              </Box>
            </Collapsible>
          </Card>
        </Flex>
      </Box>

    )
  }
}

export default RecipeItem;
