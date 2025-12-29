import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

import Information from "pages/LandingPages/IceBlockMakingMachine/sections/Information";
import Featuring from "pages/LandingPages/IceBlockMakingMachine/sections/Featuring";

import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import { IMAGES } from "config/media";

// import bgImage from "https://www.thriviousice-cooling.com/uploads/images/gal_1-PhotoRoom.jpg";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
// import AccessibleTable from "../table";
import BasicTable from "../table";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
// import BM from "https://www.thriviousice-cooling.com/uploads/images/gal_23-PhotoRoom.jpg";
// import BM1 from "https://www.thriviousice-cooling.com/uploads/images/gal_24-PhotoRoom.jpg";
import Newsletter from "./Newsletter";

function DirectRefrigerationBlockIceMachine() {
    const styles = {
        textDecoration: 'none',
        '&:hover': {
          textDecoration: 'underline',
      }
    }
  return (
    <>
      <DefaultNavbar
        routes={routes}
        
        light
        // relative
      />
     <br></br>
     <br></br>

     <MKBox
        minHeight="75vh"
        width="100%"
      
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${IMAGES.bgImage})`,
          backgroundSize: "100% 120%",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
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
              variant="h3"
              color="white"
              sx={{mt:"500px"}}
            //   sx={({ breakpoints, typography: { size } }) => ({
            //     [breakpoints.down("md")]: {
            //       fontSize: size["3xl"],
            //       mt:"60x"
            //     },
            //   })}
            >
              Direct Refrigeration Block Ice Machine
            </MKTypography>           
            {/* <MKTypography variant="h6" color="white" mt={8} mb={1}>
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
            </MKBox> */}
          </Grid>
        </Container>
      </MKBox>
      
      <Card
        sx={{
          p: 6,
          mx: { xs: 2, lg: 3 },
          mt: -1,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        
        <Card sx={{ mt: 3 }}>
      <Grid container>
        <Grid item xs={12} md={6} lg={4} sx={{ mt: -6 }}>
          <MKBox width="100%" pt={2} pb={1} px={2}>
            <MKBox
              component="img"
              src={IMAGES.product23}
              alt={"Direct Refrigeration Block Ice Machine"}
              width="100%"
              borderRadius="md"
              shadow="lg"
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} md={6} lg={8} >
          <MKBox pt={{ xs: 1, lg: 2.5 }} pb={2.5} pr={4} pl={{ xs: 4, lg: 1 }} lineHeight={0}>
            {/* <MKTypography variant="h5">{"Ice cube machine"}</MKTypography> */}
            <MKTypography variant="h3" color={"info"} mb={1}>
              {"Product Description"}
            </MKTypography>
            <MKTypography variant="h6" >
              {`We have our standard dimensions: 5 kg 125×100×460, 10kg 155×100×750, 15 kg 185×125×750, 20 kg 245×125×750, 25 kg 315×125×750, 50 kg 480×160×750, 75 kg 420×200×1000, 100 kg 500×220×1000 (mm). You can also customize the production capacity of your block ice plant, including the dimensions of your ice blocks to fit your requirement.Here at Thrivious, we set no limit to our competence. We believe the sky is the limit! 
              `}
            </MKTypography>
            <MKTypography variant='h6'>
              Contact us now and find out more. Thrivious, the global leader in ice cooling solutions!
            </MKTypography>
            <br></br>
            <br></br>

            <MKTypography variant="h6" >
           
            </MKTypography>

          </MKBox>
        </Grid>
      </Grid>
    </Card>
        {/* <Featuring /> */}
        {/* <Newsletter /> */}
      <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={6}>
            <Grid container justifyContent="flex-start">
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="payments"
                    // title="Fully integrated"
                    description=" Direct Refrigeration Block Ice Machine adopts the world's most advanced block ice making technology and we are proud to be one of the global leading manufacturers of this innovative cooling solution.
                    We have a wide range of block ice solutions"
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="payments"
                    // title="Payments functionality"
                    description=" you can choose either from a Brine or Direct System of cooling depending on your requirement. Our Brine and Direct Systems of block ice plants can also be containerized to allow for a mobile ice manufacturing process,
                    planning or convenient relocation. We save you from the trouble of assembling and disassembling."
                    />
                </MKBox>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <CenteredBlogCard
              image={IMAGES.product24}
              title="Ice crusher Machine"
              description=""
              action={{
                type: "internal",
                route: "/products/direct-refrigeration-block-ice-machine",
                color: "info",
                label: "find out more",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default DirectRefrigerationBlockIceMachine;
