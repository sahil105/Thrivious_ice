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
// import bgImage from "https://www.thriviousice-cooling.com/uploads/images/gal_32-PhotoRoom.jpg";
// import prdocut from "https://www.thriviousice-cooling.com/uploads/images/gal_42-PhotoRoom.png";
import Product1 from "assets/images/ThriviousProducts/ice_cube.png"
import bgImage from "assets/images/slider-01.png";

// import bgImage from "https://www.thriviousice-cooling.com/uploads/images/gal_5-PhotoRoom.jpg";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
// import AccessibleTable from "../table";
import BasicTable from "../table";
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";
import ExampleCard from "pages/Presentation/components/ExampleCard";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
// import BM1 from "https://www.thriviousice-cooling.com/uploads/images/gal_31-PhotoRoom.jpg"
import { IMAGES } from "config/media";
function ColdRoom() {
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
            )}, url(${bgImage})`,
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
          backgroundRepeat:"no-repeat",

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
              Cold Room
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
              src={IMAGES.prdocut42}
              alt={"cold room"}
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
              {` Thrivious is able to provide clients with ice storage in any size and materials. We are proud to be one of the global leading manufacturers of this innovative cooling solution. `}
            </MKTypography>
            <br></br>
            <MKTypography variant="h6" >
              {`The Ice Storage Rooms are constructed with an insulation layer and a coating of the outer and inner wall. The latest PU foam generator enables us to produce the highly reliable insulation layer of 75mm, 100mm or 150mm thickness.`}
            </MKTypography>
            <br></br>
            <MKTypography variant="h6" >
              {`We also offer multiple options for materials used for the outer and inner wall. High quality stainless steel SUS304 is fully compliant with food safety standards. As alternative, we have galvanized steel panels and durable, wear-resistant color steel plates from high quality suppliers to fulfill your needs in the most economical way.`}
            </MKTypography> 
          </MKBox>
        </Grid>
      </Grid>
    </Card>
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
                    description=" Manufactures three different types of ice storage rooms with adjustable storing capacity:
                    1) Common type(+ 20°C - + 5°C)	2)Refrigerated type(-8°C - - 50°C)	3)Containerized type(-8°C - - 50°C)"
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="payments"
                    // title="Payments functionality"
                    description="Every product will be designed and engineered to perform perfectly in your local conditions as well as to meet the highest energy efficient ratings."
                    />
                </MKBox>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <CenteredBlogCard
              image={IMAGES.prdocut31}
              title="Cold Room"
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

export default ColdRoom;
