import React from 'react';
import { Flex, Box, Image, Link } from 'rebass';
import logo from './logo.png'

import {FaPlus} from 'react-icons/fa'


function Navbar() {
    return (
        <Flex
            px={2}
            color='white'
            bg='#E39774'
            alignItems='center'
            minHeight='80px'>
            <a href="/" >
                <Image src={logo} sx={{
                width: 50,
                }} ></Image>
            </a>
            <Box mx='auto' />
            <Link variant='nav' href='/add-recipe'><FaPlus /></Link>
        </Flex>
    )
}

export default Navbar;

