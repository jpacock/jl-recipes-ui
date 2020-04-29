import React from 'react';

import {Box, Flex, Heading} from 'rebass';
import {Input, Label, Select} from '@rebass/forms';

function NewRecipe() {
    return (
        <Box>
             <Flex justifyContent='center'>
                <Heading as='h1'>Add Recipe</Heading>
            </Flex>
            <hr />
            <Box>
                <Label > Name: </Label>
                <Input ></Input>
            </Box>
            <Box>
                <Label > Description: </Label>
                <Input ></Input>
            </Box>
            <Flex justifyContent='center'>
                <Heading as='h3'>Ingredients</Heading>
            </Flex>
            <Flex>
                <Input
                    maxWidth='80px'
                    m={1} >
                </Input>
                <Select
                    my={1}
                    minWidth='80px'
                    id='measurement'
                    name='measurement'
                    defaultValue='tsp'>
                    <option>tsp</option>
                    <option>Tbsp</option>
                    <option>cup</option>
                </Select>
                <Input
                    flex='1'
                    my={1}
                    mx={1} >
                </Input>
            </Flex>
            <hr />
            <Flex justifyContent='center'>
                <Heading as='h3'>Directions</Heading>
            </Flex>
            <Flex>
                
                <Input
                    flex='1'
                    my={1}
                    mx={1} >
                </Input>
            </Flex>
        </Box>
    );
}

export default NewRecipe;