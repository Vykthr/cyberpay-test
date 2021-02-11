import React from 'react'
import NavBar from '../../viewComponents/NavBar'
import { makeStyles, Container, Grid, Input, InputLabel, Box, Button, FormControl, Select } from "@material-ui/core";
import Dstv from '../../../assets/svgs/dstv2.svg';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: "2rem 0",
      padding: 0,
      minWidth: 365,
      height: 50,
      borderRadius: 4,
    },
    input: {
      height: 50,
      padding: "10px 15px",
      border: "1px solid #b4b4bb",
      borderRadius: '4px',
      backgroundColor: "#fff"
    },
    select: {
      height: 50,
      marginTop: ".8rem",
      border: "1px solid #b4b4bb",
      borderRadius: '4px',
      backgroundColor: "#fff"
    },
    button: {
        marginBottom: "1rem",
        background: "linear-gradient(90deg, #0EB3E4 2.49%, #0E9CD2 100%)",
        boxShadow: "0px 20px 40px rgba(13, 57, 120, 0.21)",
        borderRadius: "5px",
        fontWeight: 500,
        fontSize: "16px",
        lineHeight: "125.5%",
        letterSpacing: "0.1em",
        width: "367px",
        height: "54px",
    },
  }));
function Subscription() {
    const classes = useStyles();

    const handleProceed = () => {
        window.location.href="/payment"
    }
    return (
        <>
            <NavBar />
            <Container>
                <Box mt={10} mb={15}>
                    <Container style={{maxWidth: "90%", margin: "auto"}}>
                        <Grid container spacing={4}>
                            <Grid item xs={6} sm={12} md={6}>
                                <img src={Dstv} alt="" />
                                <p className="prodDes">Product Description</p>
                                <p className="prodInfo">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit lacus sagittis velit erat odio habitasse. At euismod ac sit augue quis posuere elit. Enim rutrum tristique nunc gravida at. In turpis enim eu nunc quis. Dictumst lorem sollicitudin volutpat neque. </p>
                            </Grid>
                            <Grid item xs={6} sm={12} md={6}>
                                <Box>
                                    <Box>
                                        <p className="cable">CABLE SUBSCRIPTION</p>
                                        <p className="cableSub">Dstv Cable Subscription</p>
                                    </Box>
                                    <FormControl variant="outlined" className={classes.formControl}>
                                        <label>Packages</label>
                                        <Select native className={classes.select}>
                                            <option defaultValue value="">Select</option>
                                        </Select>
                                    </FormControl>

                                    <FormControl variant="outlined" className={classes.formControl}>
                                        <label>Dstv Smart Card Number</label>
                                        <Input placeholder="Enter Smart Card Number" className={classes.input}/>
                                    </FormControl>

                                    <FormControl variant="outlined" className={classes.formControl}>
                                        <label>Amount</label>
                                        <Input placeholder="Enter Amount" className={classes.input}/>
                                    </FormControl>
                                    <Box mt={4}>
                                        <Button onClick={handleProceed} variant="contained" color="primary" className={classes.button} >PROCEED</Button>
                                        <Button variant="outlined"  color="primary" className={classes.button} style={{background: "#fff", marginTop:".5rem"}}>
                                            BACK TO PACKAGES</Button>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Container>
        </>
    )
}

export default Subscription
