// Example: Adding lightbox effect using react-image-lightbox
import React, { useEffect, useState, useRef } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import "./style.css";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import MKSocialButton from "components/MKSocialButton";

import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

import routes from "routes";
import footerRoutes from "footer.routes";

function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [images, setImages] = useState([]);
  const [imageDimensions, setImageDimensions] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [loadedImages, setLoadedImages] = useState(new Set());
  const galleryRef = useRef(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    
    const imageUrl = "https://www.thriviousice-cooling.com/uploads/images/list.php";
    
    fetch(imageUrl)
      .then(res => {
        if (!res.ok) throw new Error('Failed to load images');
        return res.json();
      })
      .then((imageUrls) => {
        setImages(imageUrls);
        setIsLoading(false);
        // Load dimensions for each image
        imageUrls.forEach((imageUrl, index) => {
          const img = new Image();
          img.onload = function() {
            setImageDimensions(prev => ({
              ...prev,
              [index]: {
                width: this.naturalWidth,
                height: this.naturalHeight
              }
            }));
          };
          img.onerror = () => {
            console.warn(`Failed to load image ${index}`);
          };
          img.src = imageUrl;
        });
      })
      .catch((err) => {
        console.error('Error loading gallery:', err);
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const handleImageLoad = (index) => {
    setLoadedImages(prev => new Set([...prev, index]));
  };

  // Scroll reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = document.querySelectorAll('.gallery-item');
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [images]);

  return (
    <>
      <DefaultNavbar
        routes={routes}
        light
        sticky
      />
      {/* Hero Section */}
      <MKBox
        minHeight="40vh"
        width="100%"
        sx={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <MKBox
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 70%)",
            animation: "pulse 4s ease-in-out infinite",
          }}
        />
        <Container sx={{ position: "relative", zIndex: 2 }}>
          <MKTypography
            variant="h1"
            color="white"
            textAlign="center"
            mb={2}
            sx={{
              fontWeight: 700,
              textShadow: "2px 2px 8px rgba(0,0,0,0.3)",
              animation: "fadeInUp 0.8s ease-out",
            }}
          >
            Our Gallery
          </MKTypography>
          <MKTypography
            variant="h5"
            color="white"
            textAlign="center"
            opacity={0.9}
            sx={{
              textShadow: "1px 1px 4px rgba(0,0,0,0.3)",
              animation: "fadeInUp 0.8s ease-out 0.2s both",
            }}
          >
            Explore Our Amazing Collection
          </MKTypography>
        </Container>
      </MKBox>

      <Card sx={{
        p: { xs: 3, md: 6 },
        mx: { xs: 2, lg: 3 },
        mt: -5,
        mb: 4,
        boxShadow: ({ boxShadows: { xxl } }) => xxl,
        borderRadius: 4,
      }}>
        <Container>
          {isLoading && (
            <MKBox textAlign="center" py={8}>
              <MKTypography variant="h6" color="text" mb={2}>
                Loading gallery...
              </MKTypography>
              <div className="loading-shimmer" style={{ 
                height: '200px', 
                borderRadius: '12px',
                margin: '20px auto',
                maxWidth: '600px'
              }} />
            </MKBox>
          )}
          {error && (
            <MKBox textAlign="center" py={8}>
              <MKTypography variant="h6" color="error" mb={2}>
                {error}
              </MKTypography>
              <MKButton 
                variant="gradient" 
                color="info" 
                onClick={() => window.location.reload()}
                sx={{ mt: 2 }}
              >
                Retry
              </MKButton>
            </MKBox>
          )}
          {!isLoading && !error && (
            <div className="gallery-masonry" ref={galleryRef}>
              {images.length === 0 ? (
                <MKBox textAlign="center" py={8}>
                  <MKTypography variant="h6" color="text">
                    No images found
                  </MKTypography>
                </MKBox>
              ) : (
                images.map((image, index) => {
                  const dimensions = imageDimensions[index];
                  const isLoaded = loadedImages.has(index);
                  return (
                    <div 
                      className={`gallery-item ${isLoaded ? 'loaded' : ''}`}
                      key={index} 
                      onClick={() => openLightbox(index)}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="gallery-image-wrapper">
                        <div className="image-overlay">
                          <MKBox
                            sx={{
                              position: "absolute",
                              top: "50%",
                              left: "50%",
                              transform: "translate(-50%, -50%)",
                              opacity: 0,
                              transition: "opacity 0.3s ease",
                              zIndex: 2,
                            }}
                            className="zoom-icon"
                          >
                            <i className="fas fa-search-plus" style={{ 
                              fontSize: "2rem", 
                              color: "white",
                              textShadow: "0 2px 8px rgba(0,0,0,0.5)"
                            }} />
                          </MKBox>
                        </div>
                        <img 
                          src={image} 
                          alt={`Gallery Image ${index + 1}`}
                          loading="lazy"
                          onLoad={(e) => {
                            handleImageLoad(index);
                            if (!dimensions) {
                              setImageDimensions(prev => ({
                                ...prev,
                                [index]: {
                                  width: e.target.naturalWidth,
                                  height: e.target.naturalHeight
                                }
                              }));
                            }
                          }}
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                        {dimensions && (
                          <div className="image-info">
                            <MKTypography variant="caption" color="white" fontWeight="bold">
                              {dimensions.width} × {dimensions.height}
                            </MKTypography>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          )}
          {lightboxOpen && (
            <Lightbox
              mainSrc={images[selectedImageIndex]}
              nextSrc={images[(selectedImageIndex + 1) % images.length]}
              prevSrc={images[(selectedImageIndex + images.length - 1) % images.length]}
              onCloseRequest={closeLightbox}
              onMovePrevRequest={() =>
                setSelectedImageIndex((selectedImageIndex + images.length - 1) % images.length)
              }
              onMoveNextRequest={() =>
                setSelectedImageIndex((selectedImageIndex + 1) % images.length)
              }
            />
          )}
        </Container>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Gallery;
