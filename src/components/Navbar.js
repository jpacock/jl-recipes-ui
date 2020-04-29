import React from 'react';
import { Flex, Box, Image, Link } from 'rebass';
import logo from './logo.png'


function Navbar() {
    return (
        <Flex
            px={2}
            color='white'
            bg='#E39774'
            alignItems='center'
            minHeight='80px'>
            <Image src={logo} sx={{
                width: 50,
                
            }} ></Image>
            <Box mx='auto' />
            <Link variant='nav' href='#!' fontSize="50">
                Profile
            </Link>
        </Flex>
    )
}

export default Navbar;

