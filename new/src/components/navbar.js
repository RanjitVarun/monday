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
import userlist from './userlist';
import theatrelist from './theatrelist';
import homepage from './homepage';







class navbar extends React.Component {
    

state = { activeItem: 'home' }

handleItemClick = (e, { name }) => this.setState({ activeItem: name })

handlelogout(){
  window.location = './login'


}

 render(){
   
    const { activeItem } = this.state
     return(

 

<div>
<HashRouter>

<Menu pointing secondary>
<NavLink to="/homepage">
<Menu.Item name='home' active={activeItem === 'home'}
 onClick={this.handleItemClick} />
</NavLink>

<NavLink to="/movies">
<Menu.Item
  name='Movies'
  active={activeItem === 'Movies'}
  onClick={this.handleItemClick}
/></NavLink>

<NavLink to="/theatrelist">
<Menu.Item
  name='Theatre'
  active={activeItem === 'Theatre'}
  onClick={this.handleItemClick}
/></NavLink>





<NavLink to="/userlist">
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
    onClick={this.handlelogout}
  /></Link>
</Menu.Menu>

</Menu>
<div>

    
    <Route path="/movies" exact component={movies}></Route>
    <Route path="/addmovies" exact component={addmovies}></Route>
    <Route path="/movieview" exact component={movieview}></Route>
    <Route path="/userlist" exact component={userlist}></Route>
    <Route path="/theatrelist" exact component={theatrelist}></Route>
    <Route path="/homepage" exact component={homepage}></Route>
    
    
   
</div>

</HashRouter>




</div>
  );
    }
}

   

export default navbar;
