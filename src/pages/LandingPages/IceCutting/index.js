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
// import bgImage from "https://www.thriviousice-cooling.com/uploads/images/gal_41-PhotoRoom.png";
// import prdocut from "https://www.thriviousice-cooling.com/uploads/images/gal_28-PhotoRoom.jpg";
import Product1 from "assets/images/ThriviousProducts/ice_cube.png"
// import bgImage from "https://www.thriviousice-cooling.com/uploads/images/gal_5-PhotoRoom.jpg";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
// import AccessibleTable from "../table";
import BasicTable from "../table";
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";
import ExampleCard from "pages/Presentation/components/ExampleCard";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
function IceCutting() {
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
            )}, url(${IMAGES.product4})`,
            backgroundSize: "100% 200%",
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
              sx={{mt:"300px", ml:"300px"}}
            //   sx={({ breakpoints, typography: { size } }) => ({
            //     [breakpoints.down("md")]: {
            //       fontSize: size["3xl"],
            //       mt:"60x"
            //     },
            //   })}
            >
                Ice Cutting Machine
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
              src={IMAGES.product4}
              alt={"Ice cutting machine"}
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
              {`The prime components of machine are roller containing chiseled spikes which are actually crush the ice, side plates & prime mover.
                Roller is connected to prime mover with the help of V-belt mechanism. Roller is rested on the casing made by
                specific material. Roller & shaft are connected to each other with the help of welded circular plates. Side plates
                are designed as that they should cover the block ice which will be crushed. Roller has chiseled spikes which
                impact the block ice & reduce the size of block. `}
            </MKTypography>
            <br></br>
            <br></br>

            <MKTypography variant="h6" >
              {`1. The ice block is inserted in the machine opening which is present as the above of the machine.`}
            </MKTypography>
            <MKTypography variant="h6" >
              {`2. The prime mover drives to the roller, the spikes present on the roller crushes the inserted ice block.`}
            </MKTypography>  <MKTypography variant="h6" >
              {`3. The crushed ice is push by the rolling part which pushes the ice flakes to the downward direction.`}
            </MKTypography>  <MKTypography variant="h6" >
              {`4. This crushed ice is collected in the container`}
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

export default IceCutting;
