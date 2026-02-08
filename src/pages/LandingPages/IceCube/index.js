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
import { IMAGES, getProductImageUrls } from "config/media";
import useFirstAvailableImage from "hooks/useFirstAvailableImage";

const FOLDER = "Ice Cube Cutting Machine";
const heroImageUrls = getProductImageUrls(FOLDER, "TICS 23");
const mainImageUrls = getProductImageUrls(FOLDER, "TICS 25");

function IceCube() {
  const heroImage = useFirstAvailableImage(heroImageUrls) || IMAGES.product3;
  const mainImage = useFirstAvailableImage(mainImageUrls) || IMAGES.product3;
  const styles = {
    textDecoration: "none",
    "&:hover": { textDecoration: "underline" },
  };
  return (
    <>
      <DefaultNavbar
        routes={routes}
        light
      />
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
          Ice Cube Machine
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
              alt={"Ice cube machine"}
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
              {"Ice Cube Machine is one of the requisite in all beverage shops. The air filter in the ice cube machine is designed for  longer operation in greasy and dusty environments. Through this   machine can make30 Kg dice shape ice cubes per day. The storage bin for storing ice cubes is fabricated by rotational molding with polyethylene. "}
            </MKTypography>
            <br></br>
            <br></br>

            <MKTypography variant="h6" >
              {"Cube ice machines are commonly seen as vertical modular devices. The upper part is an evaporator, and the lower part is an ice bin. The refrigerant circulates inside pipes of a self-contained evaporator, where it conducts the heat exchange with water, and freezes the water into ice cubes."}
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

export default IceCube;
