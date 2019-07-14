import React from 'react';
import {Link} from 'react-router-dom';
import { Form, Button, Grid } from 'semantic-ui-react';
import './loginstyle.css';



class adminlogin extends React.Component {
    
    state = {
        userdata: {
            name: "admin",
           
            password: "admin",
           
        },


        data: {

            name: '',
            password: '',

        }
    }

    dataChange = (e) => {


        this.setState({


            data: { name:e.target.value}
        });
       
    
        //console.log(this.state.data.name);


    }

    dataChangepass = (e) => {
        this.setState({
            data: { password: e.target.value }
        });
        // console.log(this.state.data.password);
    }




    render(){
        const { data } = this.state;
  return (
    
     
     
  <div className="bg">
                
     
  
                <Grid>
    <Grid.Column floated='left' width={9}>
      <h4 style={{ padding: '90px' }}></h4><br/>
      <h1 style={{ padding: '20px' }}>ADMIN</h1><br/>
      
    </Grid.Column>
    <Grid.Column floated='right'  width={6} style={{ padding: '90px' }}>
    <h1 align="center"> ADMIN</h1>
    <Form >
                    <Form.Field>
                        <label>Admin</label>
                        <input type="text" id="name" name="name" placeholder="name" value={data.name} onChange={this.dataChange}></input>
                        
                        <label>Password</label>
                        <input type="password" id="password"  placeholder="keep it secure"   value={data.password} onChange={this.dataChangepass}></input><br/><br/>
                        
                        
                        
                        <Grid>
<Grid.Column textAlign="center">             
                       
        <Link to="/login">
        <Button  primary >GO</Button>  </Link> 
        </Grid.Column>
  </Grid>
    
  </Form.Field>
  </Form>
    </Grid.Column>
  </Grid>



    </div>
  );
}
}

export default adminlogin;



