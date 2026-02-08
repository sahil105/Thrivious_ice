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
import { Watermark } from "react-watermark-component";
import BasicTable from "../table";
import { IMAGES, getProductImageUrls } from "config/media";
import useFirstAvailableImage from "hooks/useFirstAvailableImage";

const FOLDER = "Ice Block Making Machine";
const HERO_FILENAME = "TICS 14";
// Try .jpeg, .png, .jpg – use whichever exists
const heroImageUrls = getProductImageUrls(FOLDER, HERO_FILENAME);

function IceBlockMakingMachine() {
  const heroImage = useFirstAvailableImage(heroImageUrls) || IMAGES.prdocut5;
  const styles = {
    textDecoration: "none",
    "&:hover": { textDecoration: "underline" },
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
          Ice Block Making Machine
        </MKTypography>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Information />
        {/* <Featuring /> */}
        <Newsletter />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default IceBlockMakingMachine;
