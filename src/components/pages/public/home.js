import React from "react";
import NavBar from "../../viewComponents/NavBar";
import { Container, Box, Button, } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import img from '../../../assets/svgs/25.svg'
import dstv from '../../../assets/svgs/dstv.svg'
import gotv from '../../../assets/svgs/gotv.svg'
import star from '../../../assets/svgs/startimes.svg'
import iroko from '../../../assets/svgs/iroko.svg'
import daar from '../../../assets/svgs/daar.svg'
import actv from '../../../assets/svgs/actv.svg'
import dashboard from '../../../assets/svgs/dashboard.svg'
import google from '../../../assets/svgs/google.svg'
import apple from '../../../assets/svgs/apple.svg'
import phone from '../../../assets/svgs/phone.svg'

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
        background: "linear-gradient(90deg, #0EB3E4 2.49%, #0E9CD2 100%)",
        boxShadow: "0px 20px 40px rgba(13, 57, 120, 0.21)",
        borderRadius: "2px",
        fontWeight: 500,
        fontSize: "16px",
        lineHeight: "125.5%",
        letterSpacing: "0.1em",
        width: "367px",
        height: "54px",
    },
    
  }));

const Home = () => {
    const classes = useStyles();

    const gotoSubscription = (value) => {
        window.location.href="/subscription"
    }

  return (
    <>
    <NavBar />
    <Box mt={18} className="centerText">
        <img className="img" src={img} alt="" />
        <p className="centerMain">Make payment - Whenever, wherever, with Cyberpay</p>
        <p className="subtitle">Don’t get stranded, Discover Various payment option on our platform.</p>
        <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={() => gotoSubscription("dstv") }
        endIcon={<ArrowRightAltIcon/>}
      >
        Learn More
      </Button>
    </Box>
    <Box mt={40} className="imgBox" >
        <img alt="" src={dstv} />
        <img alt="" src={gotv} />
        <img alt="" src={star} />
        <img alt="" src={iroko} />
        <img alt="" src={daar} />
        <img alt="" src={actv} />
    </Box>

    <Box mt={20}>
        <Container style={{marginLeft: "15%"}}>
            <p className="bigText">Monitor your activity as a Merchant & Make decision </p>
            <p className="bigText-Sub">Know how your business is faring and set thing back to order</p>
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                endIcon={<ArrowRightAltIcon />}
            >
                Merchant Dashboard
            </Button>
        </Container>
    </Box>

    <Box style={{margin: "100px auto", display: "flex", justifyContent: "center"}}>
        <img alt="" src={dashboard} style={{width: "65%"}} />
    </Box>

    <Box mt={35}>
        <Container style={{background: '#fff', padding: "30px 100px", borderRadius: "10px"}}>
            <p className="download" >Download Our Mobile App</p>
            <p className="download sub">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem egestas odio cras </p>
            <Button 
                variant="outlined"
                style={{border: "none", color: "#3D8CD6", margin: "0 0 1.5rem", }}
                endIcon={<ArrowRightAltIcon />}
            >
                Get started
            </Button>
            <Box>
                <img src={google} alt="" style={{marginRight: "1rem"}} />
                <img src={apple} alt="" />
            </Box>

            <img className="phone" src={phone} alt="" />

        </Container>
    </Box>
    </>
  );
};


export default Home;
