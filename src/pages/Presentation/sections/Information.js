import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";

import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    Feel the
                    <br />
                    Thrivious Products
                  </>
                }
                description=" A Green Revolution in the field of Block Ice Making Plant in INDIA."
              />
              <RotatingCardBack
                image={bgBack}
                title="Explore More"
                description="Here at Thrivious, we set no limit to our competence. We believe the sky is the limit! Contact us now and find out more."
                action={{
                  type: "internal",
                  route: "/products/ice-block-making-machine",
                  label: "Explore Products",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  // icon="content_copy"
                  title="Why Thrivious?"
                  description="For the last 5 years, we have been serving the fishing industry, by installing and commissioning Ice plants, cold storage, freezing plants etc with Ammonia as its refrigerant for various customers, a list of few of our Customers are attached, most of them are still working without much problems."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  // icon="flip_to_front"
                  title="Products Efficiency"
                  description="Plants which were installed 30 to 40 years back, by us as well as by others also, are still working, where ammonia leaks have become a common thing. This is highly dangerous, especially in places like Kerala where the density of population is very high."
                />
              </Grid>
            </Grid>
            {/* <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="price_change"
                  title="Save Time & Money"
                  description="We use Bitzer (Made in Germany) and Frascold Company (Made in Italy) Instrument in our machine."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="devices"
                  title="Fully Responsive"
                  description="Regardless of the screen size, the website content will naturally fit the given resolution."
                />
              </Grid
            </Grid> */}
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
