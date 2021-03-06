import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Grid ,Container,Segment, Divider, Image} from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import inlineerror from './inlineerror';
import './loginstyle.css';
import adminlogin from './adminlogin';





class login extends React.Component {


    state = {
        userdata: [{
            name: "ranjit",
            email: "ranjit@gmail.com",
            password: "ran@98",
            gender: "male",
            role: "viewer",
            mobile: "8098562745",
            address: "plot no.51,1st cross extension, Krishna Nagar, Pondicherry "
        }, {
            name: "varun",
            email: "varun@gmail.com",
            password: "var@98",
            gender: "male",
            role: "viewer",
            mobile: "8098562745",
            address: "plot no.71,2st cross extension, Krishna Nagar, Pondicherry "
        }
            , {
            name: "ram",
            email: "ram@gmail.com",
            password: "ram@98",
            gender: "male",
            role: "viewer",
            mobile: "8098562745",
            address: "plot no.71,2st cross extension, Krishna Nagar, chennai "
        }
            , {
            name: "raj",
            email: "raj@gmail.com",
            password: "raj@98",
            gender: "male",
            role: "viewer",
            mobile: "8098562745",
            address: "plot no.71,2st cross extension, Krishna Nagar, kashmir "
        }
            , {
            name: "jack",
            email: "jack@gmail.com",
            password: "jack@98",
            gender: "male",
            role: "viewer",
            mobile: "8098562745",
            address: "plot no.71,2st cross extension, Krishna Nagar, Pune "
        }],


        data: {

            Username: '',
            password: '',

        },

        loading: false,
        errors: 0,
        redirect: false
    };




    dataChange = (e) => {


        this.setState({


            data: { ...this.state.data, [e.target.name]: e.target.value }
        });
       
    
        //console.log(this.state.data.Username);


    }

    dataChangepass = (e) => {
        this.setState({
            data: { password: e.target.value }
        });
        // console.log(this.state.data.password);
    }





    setRedirect = () => {

        const arr = this.state.userdata;

        const checkname = this.state.data.Username;
        const checkpass = this.state.data.password;
       
 
       
        console.log("1");

        const obj = arr.find(x => (x.name === checkname));
        const obj1 = arr.find(x => (x.password === checkpass));
        //console.log(obj1);
        if (obj == undefined && obj1 == undefined) {
            this.setState({
                data: {
                    Username: '',
                    password: ''
                },
                redirect: false,
                errors: 1
            })
            //alert("enter valid name and password");



        }
        else {

            this.setState({
                redirect: true
            })

        }


    }


renderRedirect = () => {

        if (this.state.redirect) {
            

            return <Redirect to='/navbar' />

        }
    }


    setadmin(){
        window.location = './adminlogin'
    }
    


    render() {

        const { data, errors } = this.state;


        return (


            <div className="bg">
                
                

                <Grid>
    <Grid.Column floated='left' width={9}>
      <h4 style={{ padding: '90px' }}></h4><br/>
      <h1 style={{ padding: '20px' }}>BOOK YOUR FAVORITE SHOW HERE</h1><br/>
      <h4 ></h4><br/>
    </Grid.Column>
    <Grid.Column floated='right'  width={6} style={{ padding: '90px' }}>
    <h1 align="center"> Login</h1>
    <Form >
                    <Form.Field>
                        <label>Username</label>
                        <input type="text" id="Username" name="Username" value={data.Username} onChange={this.dataChange} placeholder="Username"></input>
                        {errors > 0 && (<inlineerror style={{ color: "red" }}>Invalid username</inlineerror>)}


                        <label>Password</label>
                        <input type="password" id="password" value={data.password} onChange={this.dataChangepass} placeholder="keep it secure"></input>
                        {errors > 0 && (<inlineerror style={{ color: "red" }}>Invalid Password</inlineerror>)}
                    </Form.Field>


                    {this.renderRedirect()}


                    <Grid>
    <Grid.Column textAlign="center">
    <Button  primary onClick={this.setRedirect}>LOGIN</Button>   
    </Grid.Column>
  </Grid>

  <Grid>
    <Grid.Column textAlign="center">
    <Link to="/adminlogin">
    <Button  primary >ADMIN</Button>  </Link> 
    </Grid.Column>
  </Grid>



                
  <br/>
  
        
  <Link to="/signup"><button class="ui right floated button">Sign Up</button>  </Link>
  <Link to="/forgotpassword"><button class="ui left floated button">Forgot Password</button></Link> 
  

  



  
                </Form>
    </Grid.Column>
  </Grid>




            
      
   
                

    
               
                
               
                   
                   
               
            </div >
        );
    }
}

export default login;
