import React from 'react';
import {Link} from 'react-router-dom';
import { Form, Button, Grid } from 'semantic-ui-react';



function forgotpassword() {
  return (
    <div>
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

    
    </div>
  );
}

export default forgotpassword;



