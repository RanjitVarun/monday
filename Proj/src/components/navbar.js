import React from 'react';
import {Link} from 'react-router-dom';
import { Form, Button, Grid } from 'semantic-ui-react';
import { Menu } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import movies from './movies';

import login from './login';
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
import { Input } from 'semantic-ui-react';
import movieview from './movieview';
import addmovies from './addmovies';






class navbar extends React.Component {
    

state = { activeItem: 'home' }

handleItemClick = (e, { name }) => this.setState({ activeItem: name })



 render(){
   
    const { activeItem } = this.state
     return(

 

<div>
<HashRouter>

<Menu pointing secondary>
<NavLink to="/">
<Menu.Item name='home' active={activeItem === 'home'}
 onClick={this.handleItemClick} />
</NavLink>

<NavLink to="/movies">
<Menu.Item
  name='Movies'
  active={activeItem === 'Movies'}
  onClick={this.handleItemClick}
/></NavLink>


<NavLink to="/User">
<Menu.Item
  name='User'
  active={activeItem === 'User'}
  onClick={this.handleItemClick}
/></NavLink>




<Menu.Menu position='right'>
<Link to="/login">
  <Menu.Item
    name='logout'
    active={activeItem === 'logout'}
    onClick={this.handleItemClick}
  /></Link>
</Menu.Menu>

</Menu>
<div>

    
    <Route path="/movies" exact component={movies}></Route>
    <Route path="/addmovies" exact component={addmovies}></Route>
    <Route path="/movieview" exact component={movieview}></Route>
    
   
</div>

</HashRouter>




</div>
  );
    }
}

   

export default navbar;
