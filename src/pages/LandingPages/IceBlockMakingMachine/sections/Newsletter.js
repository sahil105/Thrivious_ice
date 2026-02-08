/* eslint-disable react/jsx-no-duplicate-props */

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";

import { getProductImageUrls } from "config/media";
import useFirstAvailableImage from "hooks/useFirstAvailableImage";

import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import CustomizedTables from "pages/LandingPages/table";

const FOLDER = "Ice Block Making Machine";
const TCS37_URLS = getProductImageUrls(FOLDER, "TCS 37", ["jpeg", "png", "jpg"]);

function Newsletter() {
  const productImage = useFirstAvailableImage(TCS37_URLS);

  function createData(name, calories, fat, carbs) {
    return { name, calories, fat, carbs };
  }
  const rows = [
    createData( 10, '280×75×600'	,7, 4),
    createData( 15, '280×100×600'	, 8, 3),
    createData(20, '300×100×820', 8, 3),
    createData(25, '480×125×820	', '10 & 12', 2),
    createData(50, '520×125×920	', 12, 2),

  ];
  return (
    <>
    <MKBox component="section" pt={1} my={1}>
      <Container>
      
      <Grid container spacing={2}>
      <Grid item xs={12} lg={4} sx={{ mx: "auto", ml:'20px' }}>
            <RotatingCard>
              <RotatingCardFront
                image={productImage}
                icon="jg"
                title={""}
                // description="Ice Block Making Machine"
                from = "nl"
              />
              <RotatingCardBack
                image={productImage}
                title=""
                description="Ice Block Making Machine."
                // action={{
                //   type: "internal",
                //   route: "/products",
                //   label: "Explore Other Products",
                // }}
                from = "nl"
              />
            </RotatingCard>
      </Grid>
     
    <Grid item xs={12} lg={4} sx={{ mx: "auto", ml:'20px' }}>
      <CustomizedTables  rows={rows}/>
    </Grid>
    </Grid>
      </Container>
    </MKBox> 

    </>
  );
}

export default Newsletter;
