import React from 'react';
import { Component } from 'react';
import {Link} from 'react-router-dom';
import { Form, Button, Grid ,Image} from 'semantic-ui-react';
import { UncontrolledCarousel } from 'reactstrap';
import { Header, Table, Rating } from 'semantic-ui-react'
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';






class homepage extends React.Component{

    
      render() {
        return(
            <div>
                <h3>Now Showing
                </h3>


                <Grid>
    <Grid.Row columns={4}>
      <Grid.Column>
        <Image  src='https://talenthouse-res.cloudinary.com/image/upload/c_fill,f_auto,h_918,w_640/v1559256241/user-998103/submissions/gnoahkodjvrhq8mwxvjg.jpg'  size="medium"/>
      </Grid.Column>
      <Grid.Column>
        <Image src='https://www.joblo.com/assets/images/joblo/posters/2019/02/Dyow9RgX4AElAGN.jpg' size="medium" />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://www.comingtrailer.com/images/poster/Super-301.jpeg' size="medium"/>
      </Grid.Column>
<Grid.Column>
        <Image src='https://is1-ssl.mzstatic.com/image/thumb/Video123/v4/86/0c/95/860c956f-382b-8a5b-d39e-f90bb2782bd2/pr_source.lsr/268x0w.png' size="medium"/>
      </Grid.Column>

    </Grid.Row>
    </Grid>
    <h3>Upcoming Movies
                </h3>
                <Grid>
    <Grid.Row columns={4}>
      <Grid.Column>
        <Image  src='https://m.media-amazon.com/images/M/MV5BOTg4ZTNkZmUtMzNlZi00YmFjLTk1MmUtNWQwNTM0YjcyNTNkXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_UY1200_CR90,0,630,1200_AL_.jpg'  size="medium"/>
      </Grid.Column>
      <Grid.Column>
        <Image src='https://i.pinimg.com/originals/24/4a/68/244a682a598cf67aa6cb90997438330e.jpg' size="medium" />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://i.pinimg.com/originals/f5/6d/29/f56d29378e2fd4a1ed17a1412ca7589a.jpg' size="medium"/>
      </Grid.Column>
<Grid.Column>
        <Image src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/846a9086-8a40-43e0-aa10-2fc7d6d73730/dd8hxkg-9f2db939-4c35-4b57-a0d8-5f87968a35fd.png/v1/fill/w_730,h_1095,strp/frozen_2__2019__fan_poster_by_mintmovi3_dd8hxkg-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTM1MCIsInBhdGgiOiJcL2ZcLzg0NmE5MDg2LThhNDAtNDNlMC1hYTEwLTJmYzdkNmQ3MzczMFwvZGQ4aHhrZy05ZjJkYjkzOS00YzM1LTRiNTctYTBkOC01Zjg3OTY4YTM1ZmQucG5nIiwid2lkdGgiOiI8PTkwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.tvfJfFBNvZh6QwfsGH1kQMdgJGCYLFCCZCLG32-u0Fw' size="medium"/>
      </Grid.Column>

    </Grid.Row>
    </Grid>

</div>
        );
      }
    }
    
    

 


 


export default homepage;


