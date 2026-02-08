import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

import Information from "pages/LandingPages/AboutUs/sections/Information";
import Featuring from "pages/LandingPages/AboutUs/sections/Featuring";

import routes from "routes";
import companyBG from "assets/images/company.jpg";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/bg-about-us.jpg";
import MapContainer from "./MapContainer";
import { makeStyles } from '@mui/styles';
import { CardHeader, CardContent, Typography, IconButton, Collapse } from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import CircleIcon from '@mui/icons-material/Circle';
// import ArrowRightAltIcon from '@mui/icons-material/SwipeRightAlt';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import React from "react";

const useStyles = makeStyles((theme) => ({
  card: {
    // backgroundColor: '',
    // color: '#fff',
    // marginBottom: theme.spacing(3),
    // borderRadius: theme.spacing(1),
    // boxShadow: '0px 3px 6px rgba(0,0,0,0.2)',
  },
  // header: {
  //   paddingBottom: 0,
  // },
  // content: {
  //   paddingTop: 0,
  // },
  title: {
    fontWeight: 'bold',
    fontSize: '1.2rem',
    marginBottom: theme.spacing(2),
  },
  description: {
    fontSize: '1rem',
    lineHeight: '1.5',
    marginBottom: theme.spacing(2),
  },
  expandIcon: {
    color: '#fff',
  },
}));

function AboutUs() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(true);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  return (
    <>
      <DefaultNavbar
        routes={routes}
        // transparent
        light
      />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${companyBG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        {/* <MapContainer/>  */}
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
                mt:"358px"
              })}
            >
              About Us
            </MKTypography>
            <MKTypography variant="h6" color="white" mt={2} mb={1}>
              Find us on
            </MKTypography>
            <MKBox display="flex" justifyContent="center" alignItems="center">
              <MKTypography component="a" variant="body1" color="white" href="#" mr={3}>
                <i className="fab fa-facebook" />
              </MKTypography>
              <MKTypography component="a" variant="body1" color="white" href="#" mr={3}>
                <i className="fab fa-instagram" />
              </MKTypography>
              <MKTypography component="a" variant="body1" color="white" href="#" mr={3}>
                <i className="fab fa-twitter" />
              </MKTypography>
              <MKTypography component="a" variant="body1" color="white" href="#">
                <i className="fab fa-google-plus" />
              </MKTypography>
            </MKBox>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -2,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <MKTypography variant="h6" sx={{textAlign:"center"}}>Our plants world wide</MKTypography>
        <MapContainer/> 
        <Grid container spacing={2}>
        <Grid item md={12}>
        <Card className={classes.card} sx={{mt:"14px"}}>
      <CardHeader
        className={classes.header}
        title={
          <Typography variant="h3" sx={{textAlign:"center"}} className={classes.title}>
            Company Overview
          </Typography>
        }
        action={
          <IconButton  onClick={handleExpandClick}>
            <ExpandMoreIcon />
          </IconButton>
        }
      />
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent className={classes.content}>
          <Typography variant="body1" className={classes.description}>
          <ArrowRightAltIcon /> A Green Revolution in the field of Block Ice Making Plant in INDIA.
          <br/>
          <br/>

          <ArrowRightAltIcon /> For the last 5 years, we have been serving the fishing industry, by installing and commissioning Ice plants, cold storage, freezing plants etc with Ammonia as its refrigerant for various customers, a list of few of our Customers are attached, most of them are still working without much problems.
          <br/>
          <br/>


          <ArrowRightAltIcon /> In India, almost 90 % of ice plants are working with ammonia as refrigerant, which is highly toxic and even causing deaths in the event of ammonia leaks from such factories.
          <br/>
          <br/>
          <ArrowRightAltIcon /> Plants which were installed 30 to 40 years back, by us as well as by others also, are still working, where ammonia leaks have become a common thing. This is highly dangerous, especially in places like Kerala where the density of population is very high.
          <br/>
          <br/>
          <ArrowRightAltIcon /> Thrivious Ice & Cooling System has launched a new product, Direct Refrigeration System Block Ice Machine with a German Technology, which have got the following advantages over the conventional plants in India.
          <br/>
          <br/>
          <ArrowRightAltIcon /> Thrivious Ice & Cooling System Block Ice Machine adopts the world's most advanced block ice making technology and we are proud to be one of the global leading manufacturers of this innovative cooling solution.
          <br/>
          <br/>
          <ArrowRightAltIcon /> Here at Thrivious, we set no limit to our competence. We believe the sky is the limit! Contact us now and find out more.
          <br/>
          <br/>
          <ArrowRightAltIcon /> Thrivious, the global leader in ice cooling solutions!
          <br/>
          <br/>
          <ArrowRightAltIcon />We use Bitzer (Made in Germany) and Frascold Company (Made in Italy) Instrument in our machine.
        

          </Typography>
        </CardContent>
      </Collapse>
    </Card>        </Grid>
        {/* <Grid item md={6}>
        <MKTypography variant="h6" sx={{textAlign:"center"}}>setit</MKTypography>
        </Grid> */}
        </Grid>

        {/* <Information />
        <Featuring /> */}
      </Card>
        <DefaultFooter content={footerRoutes} />
    </>
  );
}

export default AboutUs;
