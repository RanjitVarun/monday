import React from 'react';
import { Component } from 'react';
import {Link} from 'react-router-dom';
import { Form, Button, Grid, TableBody } from 'semantic-ui-react';
import { Header, Table, Rating } from 'semantic-ui-react'
import {connect} from 'react-redux';
import * as dispatchActions from '../actions/dispatchActions';




class addmovies extends React.Component {

   constructor(props){
     super(props);
     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
      
     this.state = {
       name: '',
       rating:'',
       Director:'',
       Lead:'',
       DOP:''
    
       
     }
   }

 
   handleChange(e){
     const name=e.target.name;
     const value=e.target.value;
     this.setState({
       [name]: value
     })
   }
 
   
 
 
   handleSubmit(e){
     e.preventDefault();
 
     let contact = {
       name: this.state.name,
       rating:this.state.rating,
       Director:this.state.Director,
       Lead:this.state.Lead,
       DOP:this.state.DOP,
 
       
       
      
     
     }
     this.setState({
       name: '',
       rating:'',
       Director:'',
       Lead:'',
       DOP:''
    
     });
     this.props.createContact(contact);
     
   }
 
   
 
   render() {
 
     return(
       <div>
           <h3>Add Movies</h3>
 
     
 
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
                
                 <Table.Row >
                 <Table.Cell>
         
          <input type="text" name="name" ref="name" onChange={this.handleChange} className="form-control" value={this.state.name}/>
       
        </Table.Cell >
        <Table.Cell singleLine>  <input type="text" name="rating" ref="rating" onChange={this.handleChange}  value={this.state.rating}/></Table.Cell>
        <Table.Cell>
        <input type="text" name="Director"ref ="Director" onChange={this.handleChange} className="form-control" value={this.state.Director}/><br />
        </Table.Cell>
        <Table.Cell textAlign='right'><input type="text" name="Lead"  onChange={this.handleChange}  value={this.state.Lead}/>
        </Table.Cell>
        <Table.Cell>
       
<Button positive onClick={(e)=>this.handleSubmit(e)} > ADD </Button>
       
        </Table.Cell>

               </Table.Row>
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
 

 export default connect(mapStateToProps, mapDispatchToProps)(addmovies);
 


