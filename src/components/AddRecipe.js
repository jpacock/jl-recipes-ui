import React from 'react';

import { Redirect } from 'react-router-dom';

import { Box, Button, Flex, Heading } from 'rebass';
import { Input } from '@rebass/forms';

import './Toast.css'

import { toast } from 'react-toastify'

class NewRecipe extends React.Component {

    constructor() {
        super();

        this.state = {
            name: "",
            description: "",
            ingredients: [""],
            instructions: [""]
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleChangeIngredient = this.handleChangeIngredient.bind(this);
        this.handleChangeInstruction = this.handleChangeInstruction.bind(this);
        this.handleAddIngredient = this.handleAddIngredient.bind(this);
        this.handleAddInstruction = this.handleAddInstruction.bind(this);
        this.handleRemoveSpecificInstruction = this.handleRemoveSpecificInstruction.bind(this);
        this.handleRemoveSpecificIngredient = this.handleRemoveSpecificIngredient.bind(this);
        this.submit = this.submit.bind(this)
    }


    handleInputChange(e) {
        const { name, value } = e.target

        this.setState({
            [name]: value
        })
    }



    submit() {
        const notify = () => {
            toast.success('Recipe was added!', {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 4000,
                hideProgressBar: true,
                draggable: true,
                progress: undefined,
            })
        }
        fetch('https://family-recipes-api.mybluemix.net/api/v1/recipes', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    _id: 1,
                    name: this.state.name,
                    ingredients: this.state.ingredients,
                    instructions: this.state.instructions.map((instruction, idx) => {
                        return (
                            {
                                step: idx + 1,
                                text: instruction
                            }
                        )
                    })
                }
            )
        }).then(res => res.json())
            .then(data => {
                notify()

                this.setState(() => ({
                    toDashboard: true
                }))
            })
            .catch((error) => { console.error("caught error:", error); })

    }



    handleAddIngredient() {
        this.setState(prevState => {
            return { ingredients: prevState.ingredients.concat('') }
        })
    }

    handleChangeIngredient(e, idx) {
        const { value } = e.target;
        const ingredients = [...this.state.ingredients];
        ingredients[idx] = value;
        this.setState({
            ingredients
        });
    }

    handleChangeInstruction(e, idx) {
        const { value } = e.target;
        const instructions = [...this.state.instructions];
        instructions[idx] = value;
        this.setState({
            instructions
        });
    }

    handleAddInstruction() {
        this.setState(prevState => {
            return { instructions: prevState.instructions.concat('') }
        })
    }

    handleAddInstruction() {
        this.setState(prevState => {
            return { instructions: prevState.instructions.concat('') }
        })
    }

    handleRemoveSpecificIngredient(idx) {
        const ingredients = [...this.state.ingredients];
        ingredients.splice(idx, 1);
        this.setState({
            ingredients
        });
    }

    handleRemoveSpecificInstruction(idx) {
        const instructions = [...this.state.instructions];
        instructions.splice(idx, 1);
        this.setState({
            instructions
        });
    }



    render() {

        if (this.state.toDashboard === true) {
            return <Redirect to='/' />
        }
        return (
            <div>
                <Box mt={10}>
                    <Input
                        type="text"
                        placeholder="Recipe Name"
                        name="name"
                        onChange={event => this.handleInputChange(event)}
                        value={this.state.name}
                    />
                </Box>
                <Box mt={20}>
                    <Heading>Ingredients</Heading>
                    {

                        this.state.ingredients.map((ingredient, index) => (
                            <Flex>
                                <Input
                                    type="text"
                                    mr={2}
                                    name={(`ingredients`)}
                                    onChange={e => this.handleChangeIngredient(e, index)}
                                    value={this.state.ingredients[index]}
                                >

                                </Input>
                                <Button textAlign='center' bg='#733632' onClick={e => this.handleRemoveSpecificIngredient(index)}>Remove</Button>
                            </Flex>
                        )
                        )
                    }
                    <Button mt={1} bg="#326273" onClick={this.handleAddIngredient}>Add ingredient</Button>
                </Box>
                <Box mt={20}>
                    <Heading>Instructions</Heading>
                    {

                        this.state.instructions.map((instruction, index) => (
                            <Flex>
                                <Input
                                    type="text"
                                    mr={2}
                                    name={(`instructions`)}
                                    onChange={e => this.handleChangeInstruction(e, index)}
                                    value={this.state.instructions[index]}
                                >

                                </Input>
                                <Button bg='#733632' onClick={e => this.handleRemoveSpecificInstruction(index)}>Remove</Button>
                            </Flex>
                        )
                        )
                    }
                    <Button mt={1} bg="#326273" onClick={this.handleAddInstruction}>Add ingredient</Button>
                </Box>
                <Flex mt={40}>
                    <Button flex={1} bg="#326273" onClick={this.submit}>Save Recipe</Button>
                </Flex>
            </div>
        )

    }
}

export default NewRecipe;