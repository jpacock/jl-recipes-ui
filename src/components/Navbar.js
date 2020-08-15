import React from 'react';
import { Flex, Box, Image, Link } from 'rebass';
import logo from './logo.png'

import {FaBars} from 'react-icons/fa'


function Navbar() {
    return (
        <Flex
            px={2}
            color='#E39774'
            // bg=''
            alignItems='center'
            minHeight='80px'>
                <Box mx='auto' />
            <a href="/" >
                <Image src={logo} sx={{
                width: 50,
                }} ></Image>
            </a>
            <Box mx='auto' />
            <FaBars style ={{position: "absolute", paddingRight: "25px", right: 20}}/>
        </Flex>
    )
}

export default Navbar;

