import preset from '@rebass/preset';
import { ThemeProvider } from 'emotion-theming';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { toast, ToastContainer, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import AddRecipe from './components/AddRecipe';
import Backdrop from './components/Backdrop';
import Categories from './components/Categories';
import Navbar from './components/Navbar';
import Recipes from './components/Recipes';
import SlideDrawer from './components/SlideDrawer';
import RecipeDetails from './components/RecipeDetails';

class App extends React.Component {
  state = { drawerOpen: false }

  backdropClickHandler = () => {
    this.setState({
      drawerOpen: false
    })
  };

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.drawerToggleClickHandler = this.drawerToggleClickHandler.bind(this);
    this.backdropClickHandler = this.backdropClickHandler.bind(this);
  }

  drawerToggleClickHandler = () => {
    this.setState({
      drawerOpen: !this.state.drawerOpen
    })
  };
  
  handleClick() {
    this.setState(prevState => {
      return {
        loggedIn: !prevState.loggedIn
      };
    });
  }

  render() {
    const theme = {
      ...preset,
      buttons: {
        primary: {
          color: 'white',
          bg: 'primary',
        },
        outline: {
          color: 'primary',
          bg: 'transparent',
          boxShadow: 'inset 0 0 0 2px'
        },
      },

    }

    toast.configure();

    let backdrop;
    if (this.state.drawerOpen) {
      backdrop = <Backdrop close={this.backdropClickHandler} />;
    }

    return (
      <ThemeProvider theme={theme}>
        <ToastContainer transition={Slide} />

        <Navbar toggle={this.drawerToggleClickHandler} />
        < SlideDrawer show={this.state.drawerOpen} />
        {backdrop}
        <Router toggle={this.drawerToggleClickHandler}>
          <Switch>
            <Route path="/" exact component={Categories} />
            <Route path="/add-recipe" component={AddRecipe} />
            <Route path="/recipes/:name" exact component = {RecipeDetails} />
            <Route path="/recipes/categories" exact component={Categories} />
            <Route path="/recipes/categories/:category" component={Recipes} />
          </Switch>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
