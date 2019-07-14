import React from 'react';
import {Link} from 'react-router-dom';
import { Form, Button, Grid } from 'semantic-ui-react';
import './loginstyle.css';



function signup() {
   
  return (
    
    


     <div className="bg">
                
     

                <Grid>
    <Grid.Column floated='left' width={9}>
      <h4 style={{ padding: '90px' }}></h4><br/>
      <h1 style={{ padding: '20px' }}>SIGN UP AND GET EXICTING PROMOCODES!</h1><br/>
      
    </Grid.Column>
    <Grid.Column floated='right'  width={6} style={{ padding: '90px' }}>
    <h1 align="center"> Sign Up</h1>
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
    </Grid.Column>
  </Grid>










    </div>
  );
  }


export default signup;
