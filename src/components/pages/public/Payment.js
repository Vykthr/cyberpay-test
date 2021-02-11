import React from 'react';
import NavBar from '../../viewComponents/NavBar'
import { makeStyles, Container, Grid, Box, Button, ListItem, ListItemText } from "@material-ui/core";
import verve from '../../../assets/svgs/verve.svg'
import mastercard from '../../../assets/svgs/mastercard.svg'
import visa from '../../../assets/svgs/visa.svg'

const useStyles = makeStyles((theme) => ({
    button: {
        marginBottom: "1rem",
        background: "linear-gradient(90deg, #0EB3E4 2.49%, #0E9CD2 100%)",
        boxShadow: "0px 20px 40px rgba(13, 57, 120, 0.21)",
        borderRadius: "5px",
        fontWeight: 500,
        fontSize: "16px",
        lineHeight: "125.5%",
        letterSpacing: "0.1em",
        width: "100%",
        height: "54px",
    },
    text: {
        color: "#3C4257",
        width: "59px",
        fontFamily: "Roboto Slab",
        left: "571px",
        top: "361px",
        padding: "5px",
        fontSize: "15px",
        lineHeight: "20px",
    }
  }));

function Payment() {
    const classes = useStyles();
    return (
        <>
            <NavBar/>
            <Container>
                <Box style={{width: "380px", margin: "100px auto 150px"}}>
                    <Box mb={3} style={{background: "#FDFDFD", width: "100%", borderRadius: "5px", padding: "10px", boxSizing: "border-box"}}>
                        <ListItem dense button style={{borderBottom: "1px solid #979797"}}>
                            <ListItemText className={classes.text}>Order Summary</ListItemText>
                        </ListItem>

                        <ListItem dense button style={{borderBottom: "1px solid #979797"}}>
                            <ListItemText className={classes.text}>Subtotal</ListItemText>
                            <ListItemText style={{textAlign: "right"}}  className={classes.text}>NGN 6,200.00</ListItemText>
                        </ListItem>

                        <ListItem dense button style={{borderBottom: "1px solid #979797"}}>
                            <ListItemText className={classes.text}>Package Details</ListItemText>
                            <ListItemText style={{textAlign: "right"}} className={classes.text}>Asia (Dstv Cable Subscription)</ListItemText>
                        </ListItem>

                        <ListItem dense button >
                            <ListItemText className={classes.text}>Total (NGN)</ListItemText>
                            <ListItemText style={{textAlign: "right"}} className={classes.text}>NGN 6,200.00</ListItemText>
                        </ListItem>

                    </Box>
                    <Button variant="contained" color="primary" className={classes.button} >Make Payment</Button>
                    <Button variant="outlined"  color="primary" className={classes.button} style={{background: "#fff", marginTop:".5rem"}}>
                        BACK</Button>

                        <Box style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <img style={{margin: ".5rem"}} src={verve} alt=""/>
                            <img style={{margin: ".5rem"}} src={mastercard} alt=""/>
                            <img style={{margin: ".5rem"}} src={visa} alt=""/>
                        </Box>
       
                </Box>    
            </Container>   
        </>
    )
}

export default Payment
