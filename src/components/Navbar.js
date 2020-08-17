import React from 'react';
import { Flex, Box } from 'rebass';

import { FaBars } from 'react-icons/fa'


function Navbar(props) {
    return (
        <Flex
            px={2}
            color='#E39774'
            alignItems='center'
            minHeight='80px'>
            <FaBars style={{ position: "absolute", paddingLeft: "25px", left: 10 }} onClick={props.toggle} />
            <Box mx='auto' />
            {/* middle icon */}
            <a href="/" style={{
                    textDecoration: "none"
                }}>
                <div style={{
                    color: "#E39774",
                    fontFamily: "Snell Roundhand, cursive",
                    fontSize: "40px",
                    fontWeight: 700
                }}>Recipes</div>
            </a>

            <Box mx='auto' />
            
        </Flex>
    )
}

export default Navbar;

