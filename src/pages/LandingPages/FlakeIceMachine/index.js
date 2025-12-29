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
import Newsletter from "pages/LandingPages/IceBlockMakingMachine/sections/Newsletter";

import routes from "routes";
import footerRoutes from "footer.routes";

// Images
// import bgImage from "assets/images/Gallery/gal_44-PhotoRoom.jpg";
// import prdocut from "assets/images/Gallery/gal_45-PhotoRoom.jpg";
import Product1 from "assets/images/ThriviousProducts/ice_cube.png"
// import bgImage from "assets/images/Gallery/gal_5-PhotoRoom.jpg";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
// import AccessibleTable from "../table";
import BasicTable from "../table";
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";
import ExampleCard from "pages/Presentation/components/ExampleCard";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import { IMAGES } from "config/media";
function FlakeIceMachine() {
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
      <br></br>
  <Grid item xs={12}>
  <MKBox
  minHeight="75vh"
  width="100%"
  sx={{
    backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
      `${linearGradient(
        rgba(gradients.dark.main, 0.1),
        rgba(gradients.dark.state, 0.1)
      )}, url(${IMAGES.prdocut44})`,
      backgroundSize: "100% 130%", // Adjust the background size as needed
      backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "grid",
    placeItems: "end",
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
              sx={{mt:"300px"}}
            //   sx={({ breakpoints, typography: { size } }) => ({
            //     [breakpoints.down("md")]: {
            //       fontSize: size["3xl"],
            //       mt:"60x"
            //     },
            //   })}
            >
              Flake Ice Machine
            </MKTypography>             
          </Grid>
        </Container>
      </MKBox>
      </Grid>
      
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
              src={IMAGES.product5}
              alt={"Flake ice machine"}
              width="100%"
              borderRadius="md"
              shadow="lg"
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} md={6} lg={8} >
          <MKBox pt={{ xs: 1, lg: 2.5 }} pb={2.5} pr={4} pl={{ xs: 4, lg: 1 }} lineHeight={1}>
            {/* <MKTypography variant="h5">{"Ice cube machine"}</MKTypography> */}
            <MKTypography variant="h3" color={"info"} mb={1}>
              {"Product Description"}
            </MKTypography>
            <MKTypography variant="h6" >
              {` The ice flake machine(0.5-20 tons daily capacity) is an ice making machine for producing dry, loose white ice flakes with a thickness of 1 to 2 mm. The ice flake has a large contact surface and can be rapidly cooled and thoroughly mixed without sharp points to damage the product to be cooled. The ice flaker machine is a leader in fast and large-scale refrigeration projects, and is widely used in supermarket food preservation, fishery protection, food processing, concrete cooling, etc. Guangzhou Icesource has the technology to manufacture evaporators, which are the core components of the ice machine. Our ice cutter and the ice flake machine itself can continue to work. `}
            </MKTypography>
            <br></br>
            <MKTypography variant="h6" >
              {`  The capacity of a single unit ranges from 0.5 to 20 tons per day to meet different needs. `}
            </MKTypography>
          </MKBox>
        </Grid>
      </Grid>
    </Card>
    
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default FlakeIceMachine;
