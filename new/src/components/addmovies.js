import React from 'react';
import { Component } from 'react';
import {Link} from 'react-router-dom';
import {  Button, Grid, TableBody ,  Form} from 'semantic-ui-react';
import { Header, Table, Rating } from 'semantic-ui-react'
import {connect} from 'react-redux';
import * as dispatchActions from '../actions/dispatchActions';
import {  Input } from 'reactstrap';






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
       DOP:'',
       Thumb:'',
       Descp:''
    
       
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
       Thumb:this.state.Thumb,
       Descp:this.state.Descp
 
       
       
      
     
     }
     this.setState({
       name: '',
       rating:'',
       Director:'',
       Lead:'',
       DOP:'',
       Thumb:'',
       Descp:''
    
     });
     
     this.props.createContact(contact);
     alert("Movie added Successfully");

     
   }
 
   
 
   render() {
 
     return(
       <div>
           <h3>Add Movies</h3>
 
  
               <Form>
    <Form.Field>
      <label>Movie Name</label>
      <input type="text" name="name" ref="name" onChange={this.handleChange} className="form-control" value={this.state.name}/>
    </Form.Field>
    <Form.Field>
      <label>Rating</label>
      <input type="text" name="rating" ref="rating" onChange={this.handleChange}  value={this.state.rating}/>
     </Form.Field>
    <Form.Field>
      <label>Lead</label>
      <input type="text" name="Lead"  onChange={this.handleChange}  value={this.state.Lead}/>
    </Form.Field>
    <Form.Field>
      <label>Director</label>
      <input type="text" name="Director"ref ="Director" onChange={this.handleChange} className="form-control" value={this.state.Director}/>
    </Form.Field>
    <Form.Field>
      <label>DOP</label>
     <input type="text" name="DOP"  onChange={this.handleChange}  value={this.state.DOP}/>
    </Form.Field>

    <Form.Field>
      <label>Movie thumbnail</label>
      <Input type="file" name="Thumb"  onChange={this.handleChange}  value={this.state.Thumb}   id="exampleFile" />
    </Form.Field>
   


    <Form.Field>
    <Form.TextArea label='Description' name="Descp" placeholder='Tell us more about movie...'  onChange={this.handleChange}  value={this.state.Descp}   />
    </Form.Field>
    <Button positive onClick={(e)=>this.handleSubmit(e)} > ADD </Button>
  </Form>

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
  
      
   }
 };
 

 export default connect(mapStateToProps, mapDispatchToProps)(addmovies);
 


