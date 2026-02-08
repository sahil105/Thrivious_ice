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
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successOpen, setSuccessOpen] = useState(false)

  // Sanitize and validate input
  const sanitizeInput = (input) => {
    // Remove potentially dangerous characters and limit length
    return input
      .trim()
      .replace(/[<>]/g, '') // Remove < and > to prevent HTML injection
      .substring(0, 1000); // Limit message length
  };

  const validateInput = (input) => {
    const sanitized = sanitizeInput(input);
    if (sanitized.length === 0) {
      return { valid: false, message: 'Message cannot be empty' };
    }
    if (sanitized.length < 3) {
      return { valid: false, message: 'Message is too short' };
    }
    return { valid: true, sanitized };
  };

  const handleChange = (e) => {
    const value = e.target.value;
    // Limit input length client-side
    if (value.length <= 1000) {
      setMsg(value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const validation = validateInput(msg);
    if (!validation.valid) {
      setOpen(true);
      return false;
    }
    
    setIsSubmitting(true);
    
    // Simulate a small delay for better UX
    await new Promise(resolve => setTimeout(resolve, 500));
    
    try {
      // Use sanitized input
      const sanitizedMessage = validation.sanitized;
      const encodedMessage = encodeURIComponent(sanitizedMessage);
      
      // Validate WhatsApp URL before opening
      const phoneNumber = '919173251388';
      const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      
      // Additional security: verify URL format
      if (whatsappLink.startsWith('https://wa.me/') && /^\d+$/.test(phoneNumber)) {
        window.open(whatsappLink, '_blank', 'noopener,noreferrer');
        setMsg('');
        setIsSubmitting(false);
        setSuccessOpen(true);
      } else {
        throw new Error('Invalid URL format');
      }
    } catch (error) {
      console.error('Error opening WhatsApp:', error);
      setIsSubmitting(false);
      setOpen(true);
    }
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
                  <MKButton 
                    type="submit" 
                    onClick={handleSubmit} 
                    variant="gradient" 
                    color="info"
                    disabled={isSubmitting}
                    sx={{
                      minWidth: 150,
                      "&:hover": {
                        transform: "translateY(-2px)",
                        boxShadow: "0 6px 20px 0 rgba(0, 118, 255, 0.5)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
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
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
      <Snackbar
        open={successOpen}
        autoHideDuration={4000}
        onClose={() => setSuccessOpen(false)}
        message="Opening WhatsApp... Message sent successfully!"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        sx={{
          "& .MuiSnackbarContent-root": {
            backgroundColor: "#4caf50",
          }
        }}
      />
      <DefaultFooter content={footerRoutes} />
    </>
  );
}

export default ContactUs;
