// Example: Adding lightbox effect using react-image-lightbox
import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    fetch("https://www.thriviousice-cooling.com/uploads/images/list.php")
      .then(res => res.json())
      .then((imageUrls) => {
        setImages(imageUrls);
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
          img.src = imageUrl;
        });
      })
      .catch(console.error);
  }, []);

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <>
      <DefaultNavbar
        routes={routes}
        light
      />
      <br></br>
      <br></br>
      <br></br>
      <Card sx={{
        p: 6,
        mx: { xs: 2, lg: 3 },
        mt: -1,
        mb: 4,
        boxShadow: ({ boxShadows: { xxl } }) => xxl,
      }}>
        <Container>
          <div className="image-row">
            {images.map((image, index) => {
              const dimensions = imageDimensions[index];
              return (
                <div className="gallery-item" key={index} onClick={() => openLightbox(index)}>
                  <div className="gallery-image-wrapper">
                    <img 
                      src={image} 
                      alt={`Image ${index}`}
                      onLoad={(e) => {
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
                    />
                    {dimensions && (
                      <div className="image-dimensions">
                        <MKTypography variant="caption" color="white" fontWeight="bold">
                          {dimensions.width} × {dimensions.height} px
                        </MKTypography>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
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
