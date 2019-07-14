import React from 'react';
import {Link} from 'react-router-dom';
import { Form, Button, Grid } from 'semantic-ui-react';




function signup() {
   
  return (
    <div>
     <h1 align="center"> Sign In</h1>
                <Form >
                    <Form.Field>
                        <label>Username</label>
                        <input type="text" id="Username" name="Username" placeholder="Username"></input>
                        <label>Email</label>
                        <input type="email" id="email" name="email" placeholder="example@domain.com"></input>
                        <label>Password</label>
                        <input type="password" id="password"  placeholder="keep it secure"></input>
                        <label>Gender</label>
                        <input type="text" id="gender" ></input>
                        <label>Mobile</label>
                        <input type="text" id="mobile" ></input>
                        <label>Address</label>
                        <input type="text" id="Address" ></input>
                        <Grid>
    <Grid.Column textAlign="center">
        <Link to="/login">
        <Button  primary >Register</Button>  </Link> 
    </Grid.Column>
  </Grid>

                    </Form.Field>
</Form>
                   
    
    </div>
  );
  }


export default signup;
