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
        <Table.Cell>
          <Header as='h4' image>
          <Image avatar src='https://react.semantic-ui.com/images/avatar/small/christian.jpg' />
            <Header.Content>
              {data.name}
              
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell> <Button negative onClick={(e) => this.deleteContact(e, index)} className="btn btn-danger">
           Remove
         </Button> </Table.Cell>
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
         <h3>User list</h3>


         <Table basic='very' celled collapsing>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>User</Table.HeaderCell>
        <Table.HeaderCell>Delete</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
    {this.props.user.map((contact, i) => this.listView(contact, i))}
      </Table.Body>
      </Table>





         
   
   
  
        
       
      
            
              
              
     </div>
   )
 }
}

const mapStateToProps = (state, ownProps) => {
 return {
   user: state.user
   
 }
};

const mapDispatchToProps = (dispatch) => {
 return {
  
   deleteContact: index =>dispatch(dispatchActions.deleteContact(index)),
    
 }
};


export default connect(mapStateToProps, mapDispatchToProps)(userlist);


