import React from 'react';

class App extends React.Component {
    
    constructor(){
        super();
        this.state = {
            loggedIn: false
        }
        
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        console.log("logging",this.state.loggedIn ? "out" : "in", "..." )
        this.setState(prevState => {
            return {
                loggedIn: !prevState.loggedIn
            }
        })
    }

    render () {
        return (
            <div>
                <div>
                    {this.state.loggedIn ? "Logged In" : "Logged Out"}
                </div>
                <button type="Button" onClick={() => this.handleClick()} >
                    {this.state.loggedIn ? "Log out" : "Log in"}
                </button>
                
            </div>
        )
    } 
}

export default App;