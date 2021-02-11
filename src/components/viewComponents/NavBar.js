import React from 'react'
import { Container, Grid, Toolbar, Link } from "@material-ui/core";

function NavBar() {
    return (
      <Container>
          <Toolbar>
        <Grid container spacing={3}>
            <Grid item xs={3} sm={3} md={3}>
                    <p className="navLogo"><a href="home">Cyberpay</a></p>
            </Grid>
            <Grid item xs={9} sm={9} md={9}>
                <ul className="navLink">
                    <li><a href="#" >Integration</a></li>
                    <li><a href="#" >Documentation</a></li>
                    <li><a href="#" >Pricing</a></li>
                    <li><a href="login" >Log In</a></li>
                    <li style={{border: "1px solid #fff", borderRadius: "5px"}}><a href="login" >SignUp</a></li>
                </ul>
            </Grid>
        </Grid>
        </Toolbar>
    </Container>
    )
}

export default NavBar
