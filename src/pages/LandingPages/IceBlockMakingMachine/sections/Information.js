import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";

import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
import { getProductImageUrls, IMAGES } from "config/media";
import useFirstAvailableImage from "hooks/useFirstAvailableImage";

const FOLDER = "Ice Block Making Machine";
const CARD_FILENAME = "TICS 16";
const cardImageUrls = getProductImageUrls(FOLDER, CARD_FILENAME);

function Information() {
  const cardImage = useFirstAvailableImage(cardImageUrls) || IMAGES.prdocut5;
  return (
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
                    description="Thrivious Ice & Cooling System Block Ice Machine adopts the world's most advanced block ice making technology and we are proud to be one of the global leading manufacturers of this innovative cooling solution."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="payments"
                    // title="Payments functionality"
                    description="We have a wide range of block ice solutions, you can choose either from a Brine or Direct System of cooling depending on your requirement. Our Brine and Direct Systems of block ice plants can also be containerized to allow for a mobile ice manufacturing process, better space planning or convenient relocation. We save you from the trouble of assembling and disassembling."
                    />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="payments"
                    // title="Prebuilt components"
                    description="You can also customize the production capacity of your block ice plant, including the dimensions of your ice blocks to fit your requirement."
                    />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="payments"
                    description="Here at Thrivious, we set no limit to our competence. We believe the sky is the limit! Contact us now and find out more. Thrivious, the global leader in ice cooling solutions"
                    // title="Improved platform"
                  />
                </MKBox>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <CenteredBlogCard
              image={cardImage}
              title="Ice Block Making Machine"
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
  );
}

export default Information;
