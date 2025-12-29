import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { IMAGES } from "config/media";
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
// import bgImage from "https://www.thriviousice-cooling.com/uploads/images/gal_40-PhotoRoom.png";
// import prdocut from "https://www.thriviousice-cooling.com/uploads/images/gal_26-PhotoRoom.jpg";
import Product1 from "assets/images/ThriviousProducts/ice_cube.png";
// import bgImage from "https://www.thriviousice-cooling.com/uploads/images/gal_5-PhotoRoom.jpg";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
// import AccessibleTable from "../table";
import BasicTable from "../table";
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";
import ExampleCard from "pages/Presentation/components/ExampleCard";

function IceBlockMakingMachine() {
  const styles = {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  };
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
                rgba(gradients.dark.main, 0.6),
                rgba(gradients.dark.state, 0.6)
              )}, url(${IMAGES.gallery1})`,
            backgroundSize: "cover",
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
                sx={{ mt: "300px" }}
                //   sx={({ breakpoints, typography: { size } }) => ({
                //     [breakpoints.down("md")]: {
                //       fontSize: size["3xl"],
                //       mt:"60x"
                //     },
                //   })}
              >
                Ice crusher Machine
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
                  src={IMAGES.product3}
                  alt={"Ice cube machine"}
                  width="100%"
                  borderRadius="md"
                  shadow="lg"
                />
              </MKBox>
            </Grid>
            <Grid item xs={12} md={6} lg={8}>
              <MKBox pt={{ xs: 1, lg: 2.5 }} pb={2.5} pr={4} pl={{ xs: 4, lg: 1 }} lineHeight={1}>
                {/* <MKTypography variant="h5">{"Ice cube machine"}</MKTypography> */}
                <MKTypography variant="h3" color={"dark"} mb={1}>
                  {"Product Description"}
                </MKTypography>
                <MKTypography variant="h4" color="text">
                  {
                    "Ice Cube Machine is one of the requisite in all beverage shops. The air filter in the ice cube machine is designed for  longer operation in greasy and dusty environments. Through this   machine can make30 Kg dice shape ice cubes per day. The storage bin for storing ice cubes is fabricated by rotational molding with polyethylene. "
                  }
                </MKTypography>
                <br></br>
                <br></br>

                <MKTypography variant="h4" color="text">
                  {
                    "Cube ice machines are commonly seen as vertical modular devices. The upper part is an evaporator, and the lower part is an ice bin. The refrigerant circulates inside pipes of a self-contained evaporator, where it conducts the heat exchange with water, and freezes the water into ice cubes."
                  }
                </MKTypography>
              </MKBox>
            </Grid>
          </Grid>
        </Card>
        {/* <Featuring /> */}
        {/* <Newsletter /> */}
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default IceBlockMakingMachine;
