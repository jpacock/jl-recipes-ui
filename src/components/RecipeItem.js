import React from "react";

import { Box, Card, Flex, Heading, Text } from 'rebass';
import Collapsible from 'react-collapsible';

function RecipeItem(props){
    return (
        <div>
            <Flex>
                <Card flex='1'
                    my='1'>
                    <Collapsible transitionTime={100} trigger={
                        <Flex bg='#326273'
                            color='#eeeeee'>
                            <Box flex='1'
                                p={1}
                                my={10}
                                fontSize={2}
                                padding='10'>
                                <Text
                                    p={1}
                                    fontSize={[3, 4, 5]}>
                                    {props.recipe.name}
                                </Text>
                                <Box flex='auto'></Box>
                                <Text
                                    py={1}
                                    px={2}>
                                    {props.recipe.description}
                                </Text>
                                <Box position='absolute' float='right'></Box>
                            </Box>
                            <Box mx='auto' />
                            <Flex p={4} 
                                justifyContent='center'
                                alignItems='center'>
                                
                            </Flex>
                        </Flex>
                    }>
                        <Box hidden={props.recipe.ingredients ? false : true}>
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
                                {props.recipe.ingredients?.map(ingredient => <li>{ingredient}</li>)}
                            </ul>
                        </Box>
                        <Box hidden={props.recipe.instructions ? false : true}>
                            <Heading
                                as='h1'
                                p={2}>
                                Instructions
                        </Heading>
                            <ul
                                style={{
                                    "listStyleType": "none"
                                }}>
                                {props.recipe.instructions?.map(instruction => <li>{instruction.step}. {instruction.text}</li>)}
                            </ul>
                        </Box>
                    </Collapsible>
                </Card>
            </Flex>
        </div>

    )
}
export default RecipeItem;