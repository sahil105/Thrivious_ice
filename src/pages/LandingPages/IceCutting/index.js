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

const FOLDER = "Ice Cutting Machine";
const heroImageUrls = getProductImageUrls(FOLDER, "TICS 21");
const mainImageUrls = getProductImageUrls(FOLDER, "TICS 22");

function IceCutting() {
  const heroImage = useFirstAvailableImage(heroImageUrls) || IMAGES.product4;
  const mainImage = useFirstAvailableImage(mainImageUrls) || IMAGES.product4;
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
          Ice Cutting Machine
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
              alt={"Ice cutting machine"}
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
