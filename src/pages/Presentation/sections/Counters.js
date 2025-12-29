import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

import MKBox from "components/MKBox";

import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";

function Counters() {
  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid container item xs={12} lg={9} sx={{ mx: "auto" }}>
          <Grid item xs={12} md={6}>
            <DefaultCounterCard
              count={200}
              suffix="+"
              title="Happy clients"
              description="From all over world"
            />
          </Grid>
          <Grid item xs={12} md={6} display="flex">
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, mx: 0 }} />
            <DefaultCounterCard
              count={6}
              suffix="+"
              title="Cooling Products"
              description="Meet your expecations Efficiently"
            />
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, ml: 0 }} />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Counters;
