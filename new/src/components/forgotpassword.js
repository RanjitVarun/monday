import React from 'react';
import {Link} from 'react-router-dom';
import { Form, Button, Grid } from 'semantic-ui-react';
import './loginstyle.css';



function forgotpassword() {
  return (
    
     
     
  <div className="bg">
                
     
  
                <Grid>
    <Grid.Column floated='left' width={9}>
      <h4 style={{ padding: '90px' }}></h4><br/>
      <h1 style={{ padding: '20px' }}>FORGOT YOUR P@SSWORD YOU ARE ONE STEP AHEAD TO COMPLETE!</h1><br/>
      
    </Grid.Column>
    <Grid.Column floated='right'  width={6} style={{ padding: '90px' }}>
    <h1 align="center"> Forgot password</h1>
    <Form >
                    <Form.Field>
                        <label>Username</label>
                        <input type="text" id="Username" name="Username" placeholder="Username"></input>
                        
                        <label>Existing Password</label>
                        <input type="password" id="password"  placeholder="keep it secure"></input>
                        <label>New Password</label>
                        <input type="password" id="password"  placeholder="keep it secure"></input>
                        
                        
                        <Grid>
<Grid.Column textAlign="center">             
                       
        <Link to="/login">
        <Button  primary >Reset Password</Button>  </Link> 
        </Grid.Column>
  </Grid>
    
  </Form.Field>
  </Form>
    </Grid.Column>
  </Grid>



    </div>
  );
}

export default forgotpassword;



