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

import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
import BasicTable from "../table";
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";
import ExampleCard from "pages/Presentation/components/ExampleCard";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import { IMAGES, getProductImageUrls } from "config/media";
import useFirstAvailableImage from "hooks/useFirstAvailableImage";

const FOLDER = "Flake Ice Machine";
const heroImageUrls = getProductImageUrls(FOLDER, "TICS 32");
const mainImageUrls = getProductImageUrls(FOLDER, "TICS 32");

function FlakeIceMachine() {
  const heroImage = useFirstAvailableImage(heroImageUrls) || IMAGES.prdocut44;
  const mainImage = useFirstAvailableImage(mainImageUrls) || IMAGES.product5;
  const styles = {
    textDecoration: "none",
    "&:hover": { textDecoration: "underline" },
  };
  return (
    <>
      <DefaultNavbar routes={routes} light />
      <br />
      <br />
      <br />
      <MKBox
        width="100%"
        minHeight="75vh"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.35),
              rgba(gradients.dark.state, 0.35)
            )}, url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          pb: 4,
        }}
      >
        <MKTypography variant="h3" color="white" sx={{ textShadow: "0 2px 8px rgba(0,0,0,0.9)" }}>
          Flake Ice Machine
        </MKTypography>
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
              src={mainImage}
              alt={"Flake ice machine"}
              sx={{
                width: "100%",
                height: 340,
                objectFit: "cover",
                objectPosition: "center",
                display: "block",
                borderRadius: 2,
                boxShadow: 3,
              }}
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
