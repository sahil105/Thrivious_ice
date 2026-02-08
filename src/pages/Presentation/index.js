import './Presentation.css';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import MKSocialButton from "components/MKSocialButton";

import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

// Presentation page sections
import Counters from "pages/Presentation/sections/Counters";
import Information from "pages/Presentation/sections/Information";
import DesignBlocks from "pages/Presentation/sections/DesignBlocks";
import Pages from "pages/Presentation/sections/Pages";
import Download from "pages/Presentation/sections/Download";

// Presentation page components

import routes from "routes";
import footerRoutes from "footer.routes";

import { IMAGES } from "config/media";
// Alternative images you can use:
// import bgImage from "assets/images/company.jpg";
// import bgImage from "assets/images/bg-presentation.jpg";
// import bgImage from "assets/images/direct-ref-01.jpg";
import Carousel from "./Carousel.js";

import Cardcarousel from "./Cardcarousel.js";
import { v4 as uuidv4 } from "uuid";
import Team from 'pages/LandingPages/IceBlockMakingMachine/sections/Team';


function Presentation() {
  const [snowflakes, setSnowflakes] = useState([]);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [revealedSections, setRevealedSections] = useState(new Set());
  const heroRef = useRef(null);
  const navigate = useNavigate();

  // Create snowflakes
  useEffect(() => {
    const createSnowflakes = () => {
      const flakes = [];
      // Reduce snowflakes on mobile for better performance
      const isMobile = window.innerWidth < 768;
      const flakeCount = isMobile ? 30 : 50;
      
      for (let i = 0; i < flakeCount; i++) {
        flakes.push({
          id: i,
          left: Math.random() * 100,
          delay: Math.random() * 5,
          duration: 10 + Math.random() * 20,
          size: Math.random() * 0.5 + 0.5,
        });
      }
      setSnowflakes(flakes);
    };

    createSnowflakes();
    
    // Recreate on resize for responsive snowflake count
    const handleResize = () => {
      createSnowflakes();
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
      
      // Reveal sections on scroll
      const sections = document.querySelectorAll('.reveal-on-scroll');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100 && !revealedSections.has(section)) {
          section.classList.add('revealed');
          setRevealedSections((prev) => new Set([...prev, section]));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [revealedSections]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cards = [
    {
      key: uuidv4(),
      content: (
        <Cardcarousel imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/convertplus_thumbnail.jpg" />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Cardcarousel imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/acf_pro.png" />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Cardcarousel imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/layer_slider_plugin_thumb.png" />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Cardcarousel imagen="https://updates.theme-fusion.com/wp-content/uploads/2016/08/slider_revolution-1.png" />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Cardcarousel imagen="https://updates.theme-fusion.com/wp-content/uploads/2019/01/pwa_880_660.jpg" />
      )
    }
  ];
  return (
    <>
      <DefaultNavbar
        routes={routes}
        light
        sticky
      />
      <MKBox
        ref={heroRef}
        minHeight={{ xs: "85vh", md: "75vh" }}
        width="100%"
        mt={0.1}
        sx={{
          position: "relative",
          backgroundImage: `url(${IMAGES.home})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
          overflow: "hidden",
        }}
      >
        {/* Snowfall Animation */}
        <div className="snowfall-container interactive">
          {snowflakes.map((flake) => (
            <div
              key={flake.id}
              className="snowflake interactive"
              style={{
                left: `${flake.left}%`,
                animationDelay: `${flake.delay}s`,
                animationDuration: `${flake.duration}s`,
                fontSize: `${flake.size}em`,
              }}
            >
              ❄
            </div>
          ))}
        </div>

        <Container sx={{ position: "relative", zIndex: 3 }}>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
            <MKTypography
              variant="h1"
              color="white"
              mt={{ xs: 8, md: 52 }}
              mb={1}
              className="fade-in-up"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                  mt: 8,
                },
                textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
                fontWeight: 700,
                letterSpacing: "1px",
              })}
            >
              Thrivious{" "}
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={-2}
              mb={3}
              className="fade-in-up"
              sx={{
                textShadow: "1px 1px 4px rgba(0,0,0,0.7)",
                fontSize: { xs: "1rem", md: "1.2rem" },
                animationDelay: "0.2s",
              }}
            >
              Welcome to Thrivious Ice & Cooling System
            </MKTypography>
            <MKBox 
              display="flex" 
              gap={{ xs: 1.5, md: 2 }} 
              justifyContent="center" 
              flexWrap="wrap"
              className="fade-in-up"
              sx={{ 
                animationDelay: "0.4s",
                px: { xs: 2, md: 0 },
                width: "100%",
              }}
            >
              <MKButton
                variant="gradient"
                color="info"
                size="large"
                onClick={() => navigate("/products/ice-block-making-machine")}
                sx={{
                  px: { xs: 3, md: 4 },
                  py: 1.5,
                  fontSize: { xs: "0.9rem", md: "1rem" },
                  fontWeight: 600,
                  textTransform: "none",
                  boxShadow: "0 4px 14px 0 rgba(0, 118, 255, 0.39)",
                  width: { xs: "100%", sm: "auto" },
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: "0 6px 20px 0 rgba(0, 118, 255, 0.5)",
                  },
                  "&:active": {
                    transform: "translateY(0)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                Explore Products
              </MKButton>
              <MKButton
                variant="outlined"
                color="white"
                size="large"
                onClick={() => navigate("/contact-us")}
                sx={{
                  px: { xs: 3, md: 4 },
                  py: 1.5,
                  fontSize: { xs: "0.9rem", md: "1rem" },
                  fontWeight: 600,
                  textTransform: "none",
                  borderWidth: 2,
                  width: { xs: "100%", sm: "auto" },
                  "&:hover": {
                    transform: "translateY(-2px)",
                    borderWidth: 2,
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
                  "&:active": {
                    transform: "translateY(0)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                Contact Us
              </MKButton>
            </MKBox>
          </Grid>
        </Container>
      </MKBox>
      <MKBox>
        {/* <Carousel
        cards={cards}
        height="500px"
        width="100%"
        margin="0 auto"
        offset={150}
        showArrows={true}
      /> */}
      </MKBox>
      <Card
        className="reveal-on-scroll"
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: 0,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <div className="reveal-on-scroll">
          <Counters />
        </div>
        <div className="reveal-on-scroll">
          <Information />
        </div>
        <div className="reveal-on-scroll">
          <DesignBlocks />
        </div>
        <div className="reveal-on-scroll">
          <Team />
        </div>
        {/* <Pages /> */}
        {/* <Download /> */}
       
      </Card>
      <DefaultFooter content={footerRoutes} />
      
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <MKButton
          variant="gradient"
          color="info"
          onClick={scrollToTop}
          sx={{
            position: "fixed",
            bottom: 30,
            right: 30,
            minWidth: "auto",
            width: 50,
            height: 50,
            borderRadius: "50%",
            zIndex: 1000,
            boxShadow: "0 4px 14px 0 rgba(0, 118, 255, 0.39)",
            "&:hover": {
              transform: "translateY(-5px) scale(1.1)",
              boxShadow: "0 6px 20px 0 rgba(0, 118, 255, 0.5)",
            },
            transition: "all 0.3s ease",
            animation: "fadeInUp 0.3s ease-out",
          }}
        >
          <i className="fas fa-arrow-up" />
        </MKButton>
      )}
    </>
  );
}

export default Presentation;
