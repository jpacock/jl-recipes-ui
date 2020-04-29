import React from "react";

import { Box, Card, Flex, Heading, Text } from 'rebass';

import Collapsible from 'react-collapsible';

import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

class RecipeItem extends React.Component {
    constructor() {
        super()
        this.state = {
            open: false
        }

        this.toggleCollapsible = this.toggleCollapsible.bind(this);
    }

    toggleCollapsible() {
        console.log("open or close")
        this.setState(prevState => {
            return {
                open: !prevState.open
            }
        })
        console.log(this.state.open)
    }

    render() {
        return (
            <Box>
                <Flex>
                    <Card flex='1'
                        my='1'>
                        <Collapsible open={this.state.open} transitionTime={100} trigger={
                            <Flex bg='#326273'
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
                                        {this.props.recipe.name}
                                    </Text>
                                    {/* <Box flex='auto'></Box> */}
                                    {/* <Text
                                        py={1}
                                        px={2}>
                                        {this.props.recipe.description}
                                    </Text> */}
                                    {/* <Box position='absolute' float='right'></Box> */}
                                </Flex>
                                <Box mx='auto' />
                                <Flex p={4}
                                    justifyContent='center'
                                    alignItems='center'>
                                    {this.state.open ?  <FaChevronUp /> : <FaChevronDown />}
                                </Flex>
                            </Flex>
                        }>
                            <Box hidden={this.props.recipe.ingredients ? false : true}>
                                <Heading
                                    as='h1'
                                    p={2}
                                >
                                    Ingredients
                        </Heading>
                                <ul
                                    style={{
                                        "listStyleType": "none"
                                    }}>
                                    {this.props.recipe.ingredients?.map(ingredient =>
                                        <li key={ingredient}><Box my={2}>{ingredient}</Box></li>)}
                                </ul>
                            </Box>
                            <Box hidden={this.props.recipe.instructions ? false : true}>
                                <Heading
                                    as='h1'
                                    p={2}>
                                    Instructions
                        </Heading>
                                <ul
                                    style={{
                                        "listStyleType": "none"
                                    }}>
                                    {this.props.recipe.instructions?.map(instruction =>
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