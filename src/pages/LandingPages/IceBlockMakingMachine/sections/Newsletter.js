/* eslint-disable react/jsx-no-duplicate-props */

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";

// Images
import macbook from "assets/images/macbook.png";
import Product1 from "assets/images/product1-1.jpg"
import Product2 from "../../../../assets/images/direct-ref-01.jpg";

import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import CustomizedTables from "pages/LandingPages/table";

function Newsletter() {
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
                image={Product1}
                icon="jg"
                title={""}
                // description="Ice Block Making Machine"
                from = "nl"
              />
              <RotatingCardBack
                image={Product2}
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
