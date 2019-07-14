import React from 'react'
import { Button, Icon, Image, Item, Label, Table , Grid, Rating} from 'semantic-ui-react';
import {connect} from 'react-redux';



class movieview extends React.Component{


createlistitems(){

let index=localStorage.getItem("index");


return this.props.contacts.map((user)=>{

  if(index==user.id){


return(
  
<div>
 
  <h3>
  <Item.Header as='a'>{user.name}</Item.Header></h3>

  <Rating icon='star'   defaultRating={user.rating} maxRating={5} ></Rating>
  <Item.Description>
        {user.Lead},{user.Director},{user.Cinematography}
        </Item.Description><br/>
        <Item.Description>
       {user.Descp}
        </Item.Description>


</div>

);
  }
});

}





    render(){

      const colors = [
       
        'green'
        
      ]
        return(

          <div>
  
  <Item.Group divided>
    <Item>
      <Item.Image src='https://react.semantic-ui.com/images/wireframe/image.png' />

      <Item.Content>

      {this.createlistitems()}    
        <Item.Meta>
          <span className='cinema'>Union Square 14</span>
        </Item.Meta>
        
        <Item.Extra>
          <Label>IMAX</Label>
          <Label icon='globe' content='Additional Languages' />
          
        </Item.Extra>
      </Item.Content>
    </Item>
    
  </Item.Group>
  <br/>
  <br/>
  <Grid columns={3} divided>
    <Grid.Row>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
     <p></p>
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
  <br/>
  <br/>
  <br/>


  {colors.map(color => (
      <Table color={color} key={color}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>THEATRE</Table.HeaderCell>
            <Table.HeaderCell>SHOW DATE</Table.HeaderCell>
            <Table.HeaderCell>SHOW TIME</Table.HeaderCell>
            <Table.HeaderCell>EXPERINCE</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>PVR PXL VR Chennai Anna Nagar

PVR Cinemas, 3Rd Floor , VR Mall, Metrozone</Table.Cell>
            <Table.Cell><Button>FRI 12</Button></Table.Cell>
            <Table.Cell>3.00PM</Table.Cell>
            <Table.Cell> <Button primary floated='right'>
            Book tickets
            <Icon name='right chevron' />
          </Button>
          </Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>PVR Ampa Mall - Nelson Manickam Road </Table.Cell>
            <Table.Cell><Button>FRI 12</Button></Table.Cell>
            <Table.Cell>3.00PM 6.00PM</Table.Cell>
            <Table.Cell> <Button primary floated='right'>
            Book tickets
            <Icon name='right chevron' />
          </Button>
          </Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell> INOX The Marina Mall - OMR </Table.Cell>
            <Table.Cell><Button>FRI 12</Button></Table.Cell>
            <Table.Cell>5.00PM</Table.Cell>
            <Table.Cell> <Button primary floated='right'>
            Book tickets
            <Icon name='right chevron' />
          </Button>
          </Table.Cell>
          </Table.Row>
         
        </Table.Body>
      </Table>
    ))}
    </div>
        );
}
}




const mapStateToProps = (state, ownProps) => {
  return {
    contacts: state.contacts,
    name:state.contacts[ownProps.id]
    
  }
};


export default connect(mapStateToProps)(movieview);