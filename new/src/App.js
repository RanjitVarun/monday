import React from 'react';
import {Route} from 'react-router-dom';

import login from './components/login';
import signup from './components/signup';
import forgotpassword from './components/forgotpassword';
import navbar from './components/navbar';
import movies from './components/movies';
import addmovies from './components/addmovies';
import movieview from './components/movieview';
import userlist from './components/userlist';
import theatrelist from './components/theatrelist';
import adminlogin from './components/adminlogin';



class App extends React.Component{


  render(){
  return (
    <div className="ui container">
     

      <Route path="/" exact component={login}></Route>
      
      <Route path="/login" exact component={login}></Route>
      <Route path="/signup" exact component={signup}></Route>
      <Route path="/forgotpassword" exact component={forgotpassword}></Route>
      <Route path="/navbar" exact component={navbar}></Route>
      <Route path="/movies" exact component={movies}></Route>
      <Route path="/addmovies" exact component={addmovies}></Route>
      <Route path="/movieview" exact component={movieview}></Route>
      <Route path="/userlist" exact component={userlist}></Route>
      <Route path="/theatrelist" exact component={theatrelist}></Route>
      <Route path="/adminlogin" exact component={adminlogin}></Route>
    
    </div>
  );
}
}





export default App;