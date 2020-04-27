import React from 'react';

import { ThemeProvider } from 'emotion-theming';
import preset from '@rebass/preset';
import { Box } from 'rebass';
import { Label, Input } from '@rebass/forms';

import Navbar from './components/Navbar';
import RecipeItem from './components/RecipeItem';
import recipesData from './data/recipesData';


class App extends React.Component {

    constructor() {
        super();
        this.state = {
            loggedIn: false,
            recipes: recipesData,
            searchStr: ""
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleType = this.handleType.bind(this);
    }

    handleClick() {
        console.log("logging", this.state.loggedIn ? "out" : "in", "...")
        this.setState(prevState => {
            return {
                loggedIn: !prevState.loggedIn
            }
        })
    }

    handleType() {
        console.log("character pressed:")
    }

    render() {
        const recipes = this.state.recipes.map(item => <RecipeItem key={item.id} recipe={item} />)
        const theme = {
            ...preset,
        }
        return (
            <ThemeProvider theme={theme}>
                <Navbar />
                <Box>
                    <Label htmlFor='email'>Email</Label>
                    <Input
                        id='email'
                        name='email'
                        type='email'
                        placeholder='jane@example.com'
                    />
                </Box>
                {recipes}
            </ThemeProvider>
        )
    }


}

export default App;