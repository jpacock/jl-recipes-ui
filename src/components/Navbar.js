import React from 'react';
import {Flex, Box, Text, Link} from 'rebass';


function Navbar() {
    return (
        <Flex
            px={2}
            color='white'
            bg='primary'
            alignItems='center'
            height='50'>
            <Text p={2} fontWeight='bold'>JL Recipes</Text>
            <Box mx='auto' />
            <Link variant='nav' href='#!'>
                Profile
            </Link>
        </Flex>
    )
}

export default Navbar;

 