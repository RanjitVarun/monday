import React from 'react';
import { Component } from 'react';
import {Link} from 'react-router-dom';
import { Form, Button, Grid, List, Image } from 'semantic-ui-react';
import { Header, Table, Rating } from 'semantic-ui-react'
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';
import addmovies from './addmovies';
import movieview from './movieview';
import * as dispatchActions from '../actions/dispatchActions';





class userlist extends React.Component{



 

 listView(data, index){
   return (



        
        

<Table.Row>
<Table.Cell>{data.name}</Table.Cell>
<Table.Cell>{data.address}</Table.Cell>
<Table.Cell>{data.showdate}</Table.Cell>
<Table.Cell>{data.showtime}</Table.Cell>
<Table.Cell textAlign='right'><Button negative onClick={(e) => this.deleteContact(e, index)} className="btn btn-danger">
           Remove
         </Button></Table.Cell>
</Table.Row>





   )
 }



 
   

 deleteContact(e, index){
   e.preventDefault();
   this.props.deleteContact(index);
 }


 render() {

   return(
     <div>
         <h3>Theatre list</h3>


      <Table unstackable>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Location</Table.HeaderCell>
        <Table.HeaderCell>Show Date</Table.HeaderCell>
        <Table.HeaderCell>Show Time</Table.HeaderCell>
        <Table.HeaderCell textAlign='right'>Delete</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
    {this.props.theatre.map((contact, i) => this.listView(contact, i))}
    </Table.Body>
  </Table>



         
   
   
  
        
       
      
            
              
              
     </div>
   )
 }
}

const mapStateToProps = (state, ownProps) => {
 return {
   theatre: state.theatre
   
 }
};

const mapDispatchToProps = (dispatch) => {
 return {
  
   deleteContact: index =>dispatch(dispatchActions.deleteContact(index)),
    
 }
};


export default connect(mapStateToProps, mapDispatchToProps)(userlist);


