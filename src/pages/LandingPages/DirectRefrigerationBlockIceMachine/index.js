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

import { IMAGES, getProductImageUrls } from "config/media";
import useFirstAvailableImage from "hooks/useFirstAvailableImage";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
import BasicTable from "../table";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import Newsletter from "./Newsletter";

const FOLDER = "Direct Refrigeration Block Ice Machine";
const EXTS = ["jpeg", "png", "jpg", "JPG"];
const heroImageUrls = getProductImageUrls(FOLDER, "TICS 31", EXTS);
const mainImageUrls = getProductImageUrls(FOLDER, "TICS 30", EXTS);
const cardImageUrls = getProductImageUrls(FOLDER, "TICS 29", EXTS);

function DirectRefrigerationBlockIceMachine() {
  const heroImage = useFirstAvailableImage(heroImageUrls) || IMAGES.bgImage;
  const mainImage = useFirstAvailableImage(mainImageUrls) || IMAGES.product23;
  const cardImage = useFirstAvailableImage(cardImageUrls) || IMAGES.product24;
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
          Direct Refrigeration Block Ice Machine
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
              alt={"Direct Refrigeration Block Ice Machine"}
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
              image={cardImage}
              title="Direct Refrigeration Block Ice Machine"
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
