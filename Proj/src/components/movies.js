import React from 'react';
import { Component } from 'react';
import {Link} from 'react-router-dom';
import { Form, Button, Grid } from 'semantic-ui-react';
import { Header, Table, Rating } from 'semantic-ui-react'
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';
import addmovies from './addmovies';
import movieview from './movieview';

import * as dispatchActions from '../actions/dispatchActions';





class movies extends React.Component{



 

 listView(data, index){
   return (
     
        
       

       <Table.Row key={index}>
               <Table.Cell  > {data.name}
     </Table.Cell >
      <Table.Cell singleLine>  <Rating icon='star'   defaultRating={data.rating} maxRating={5} ></Rating>  </Table.Cell>
      <Table.Cell>
         
      {data.Director}
      </Table.Cell>
      <Table.Cell textAlign='right'> {data.Lead}
      </Table.Cell>
     
      <Table.Cell textAlign='right'>
      <Button negative onClick={(e) => this.deleteContact(e, index)} className="btn btn-danger">
           Remove
         </Button>
         <Link to="/movieview"><Button primary key={data.id} onClick={(e)=>this.movieview(data.id)}>View</Button></Link>
      </Table.Cell>

</Table.Row>




   )
 }


 movieview(e){

   localStorage.setItem("index",e);
    }
   

 deleteContact(e, index){
   e.preventDefault();
   this.props.deleteContact(index);
 }


 render() {

   return(
     <div>
         <h3>Movies List</h3>

         <Link to="addmovies" > <Button positive floated="right" >ADD MOVIE</Button></Link>
         <br/>
         <br/>

         <Table celled padded  >
<Table.Header  >
    <Table.Row >
     <Table.HeaderCell>Movie name</Table.HeaderCell>
      <Table.HeaderCell>Rating</Table.HeaderCell>
      <Table.HeaderCell>Cast</Table.HeaderCell>
         <Table.HeaderCell>Release</Table.HeaderCell>
         <Table.HeaderCell></Table.HeaderCell>
    </Table.Row>
  </Table.Header>

               <Table.Body > 
      
             {this.props.contacts.map((contact, i) => this.listView(contact, i))}
               </Table.Body>
             </Table>
              
     </div>
   )
 }
}

const mapStateToProps = (state, ownProps) => {
 return {
   contacts: state.contacts
   
 }
};

const mapDispatchToProps = (dispatch) => {
 return {
   createContact: contact => dispatch(dispatchActions.createContact(contact)),
   deleteContact: index =>dispatch(dispatchActions.deleteContact(index)),
    
 }
};


export default connect(mapStateToProps, mapDispatchToProps)(movies);


