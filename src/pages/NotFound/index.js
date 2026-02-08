import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

import routes from "routes";
import footerRoutes from "footer.routes";

function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <DefaultNavbar routes={routes} light sticky />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          display: "grid",
          placeItems: "center",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={6} justifyContent="center" mx="auto" textAlign="center">
            <MKTypography variant="h1" color="white" mb={1}>
              404
            </MKTypography>
            <MKTypography variant="h3" color="white" mb={3}>
              Page Not Found
            </MKTypography>
            <MKTypography variant="body1" color="white" mb={4} opacity={0.9}>
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </MKTypography>
            <MKBox display="flex" gap={2} justifyContent="center" flexWrap="wrap">
              <MKButton
                variant="contained"
                color="white"
                size="large"
                onClick={() => navigate("/")}
                sx={{
                  px: 4,
                  py: 1.5,
                  color: "#667eea",
                  fontWeight: 600,
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                Go to Homepage
              </MKButton>
              <MKButton
                variant="outlined"
                color="white"
                size="large"
                onClick={() => navigate(-1)}
                sx={{
                  px: 4,
                  py: 1.5,
                  borderWidth: 2,
                  fontWeight: 600,
                  "&:hover": {
                    transform: "translateY(-2px)",
                    borderWidth: 2,
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                Go Back
              </MKButton>
            </MKBox>
          </Grid>
        </Container>
      </MKBox>
      <DefaultFooter content={footerRoutes} />
    </>
  );
}

export default NotFound;
