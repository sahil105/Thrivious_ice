/* eslint-disable react/jsx-no-duplicate-props */

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";

// Images
import macbook from "assets/images/macbook.png";
// import Product1 from "https://www.thriviousice-cooling.com/uploads/images/gal_3-PhotoRoom.jpg"

import CustomizedTables from "pages/LandingPages/table";
import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";
import ExampleCard from "pages/Presentation/components/ExampleCard";
import { Card } from "@mui/material";
import { IMAGES } from "config/media";

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
      <Grid item  sm={6}  sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
      <Card sx={{height:"300px"}}>
        <ExampleCard  image={IMAGES.gallery2} name={name} />
      </Card>

      </Grid>
     
      <Grid item  sm={6}  sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
      <CustomizedTables  rows={rows}/>
    </Grid>
    </Grid>
      </Container>
    </MKBox> 

    </>
  );
}

export default Newsletter;
