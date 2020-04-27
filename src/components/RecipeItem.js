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
                        <li>1 tsp Flour</li>
                        <li>1 tsp Flour</li>
                        <li>1 tsp Flour</li>
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
                        <li>1. Open up spices</li>
                        <li>2. Remoe the blank from the blank</li>
                        <li>3. Start to mix in the asdf and the asdfk</li>
                    </ul>
                </Card>
            </Flex>
        </div>

    )
}
export default RecipeItem;