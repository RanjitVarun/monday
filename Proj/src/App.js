import React from 'react';
import {Route} from 'react-router-dom';

import login from './components/login';
import signup from './components/signup';
import forgotpassword from './components/forgotpassword';
import navbar from './components/navbar';
import movies from './components/movies';
import addmovies from './components/addmovies';
import movieview from './components/movieview';




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
    
    </div>
  );
}
}





export default App;