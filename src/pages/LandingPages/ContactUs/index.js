import react,{useState, useEffect} from "react"
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import Card from "@mui/material/Card";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import { CardContent, CardMedia, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

import routes from "routes";
import footerRoutes from "footer.routes";
import CloseIcon from '@mui/icons-material/Close';
// Image
import bgImage from "assets/images/back.jpg";
import { Button, IconButton, Snackbar } from "@mui/material";
import Example from "./eammple";
// const useStyles = makeStyles({
//   card: {
//     display: 'flex',
//     marginBottom: '2rem',
//   },
//   media: {
//     minWidth: 200,
//   },
// });
function ContactUs() {
  // const classes = useStyles();

  const [msg, setMsg] = useState('')
  const [open, setOpen] = useState(false)

  const handleChange =(e) => {
    console.log(e.target.value);
    setMsg(e.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if (msg === "") {
      setOpen(true)
      return false;
    }
    const encodedMessage = encodeURIComponent(msg);
    const whatsappLink = `https://wa.me/919173251388?text=${encodedMessage}`;
    window.open(whatsappLink, '_blank');
    setMsg('')
  }
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const action = (
    <>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );
  return (
    <>
      <DefaultNavbar
        routes={routes}
        light
      />
       <br/>
       <br/>
       <br/>

      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} lg={6}>
          <MKBox
            display={{ xs: "none", lg: "flex" }}
            width="calc(100% - 2rem)"
            height="calc(100vh - 2rem)"
            borderRadius="lg"
            ml={2}
            mt={-15}
            sx={{
               backgroundImage: `url(${bgImage})`,
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            display: "grid",
            placeItems: "end",
            ml:"120px",
            mb:"50px"
          }}
          >
            <Example/>
          </MKBox>
        </Grid>
        <Grid
          item
          xs={12}
          sm={10}
          md={7}
          lg={6}
          xl={4}
          ml={{ xs: "auto", lg: 6 }}
          mr={{ xs: "auto", lg: 6 }}
        >
          <MKBox
            bgColor="white"
            borderRadius="xl"
            shadow="lg"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            mt={{ xs: 20, sm: 18, md: 20 }}
            mb={{ xs: 20, sm: 18, md: 20 }}
            mx={3}
          >
            <MKBox
              variant="gradient"
              bgColor="info"
              coloredShadow="info"
              borderRadius="lg"
              p={2}
              mx={2}
              mt={-3}
            >
              <MKTypography variant="h3" color="white">
                Contact us
              </MKTypography>
            </MKBox>
            <MKBox p={3}>
              <MKTypography variant="body2" color="text" mb={3}>
                For further questions, You can directly message from WhatsApp button or contact using our contact form.
              </MKTypography>
              <MKBox width="100%" component="form" method="post" autocomplete="off">
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <MKInput
                      variant="standard"
                      label="What can we help you?"
                      placeholder="Describe your problem"
                      InputLabelProps={{ shrink: true }}
                      multiline
                      value={msg}
                      onChange={handleChange}
                      fullWidth
                      rows={3}
                    />
                  </Grid>
                </Grid>
                <Grid container item justifyContent="center" xs={12} mt={5} mb={2}>
                  <MKButton type="submit" onClick={handleSubmit} variant="gradient" color="info">
                    Send Message
                  </MKButton>
                </Grid>
              </MKBox>
            </MKBox>
          </MKBox>
        </Grid>
      </Grid>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Please Fill Message first then send it."
        action={action}
      />
      <DefaultFooter content={footerRoutes} />
    </>
  );
}

export default ContactUs;
