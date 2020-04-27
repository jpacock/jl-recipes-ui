import React from "react";

import { Box, Card, Flex, Heading, Text } from 'rebass';

function RecipeItem(props) {
    return (
        <div>
            <Flex>
                <Card
                flex='1'
                my='1'>
                    <Box
                        flex='1'
                        align
                        p={1}
                        my={10}
                        fontSize={2}
                        color='white'
                        bg='primary'
                        padding='10'>
                        <Heading
                            p={1}
                            fontSize={[3, 4, 5]}
                            color='white'>
                            {props.recipe.name}
                        </Heading>
                        <Text
                            py={1}
                            px={2}>
                                {props.recipe.description}
                        </Text>
                    </Box>
                    <Heading 
                        as='h1'
                        p={2}>
                            Ingredients
                    </Heading>
                    <ul
                        style={{
                                "listStyleType": "none"
                        }}>
                        {props.recipe.ingredients?.map(ingredient => <li>{ingredient}</li>)}
                    </ul>
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
                </Card>
            </Flex>
        </div>

    )
}
export default RecipeItem;