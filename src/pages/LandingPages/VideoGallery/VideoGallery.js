import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/lazy";
import "./VideoGallery.css"; // Import your CSS
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
// Import your video URLs
import getVideoUrls from "./videoUrls";

function VideoGallery() {
  const videosPerRow = 3; // Number of videos to display per row
  const rowsPerPage = 2; // Number of rows to display per page
  const videosPerPage = videosPerRow * rowsPerPage; // Total number of videos per page
  const [currentPage, setCurrentPage] = useState(1);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideoUrls()
      .then(setVideos)
      .catch(console.error);
  }, []);

  // Calculate the start and end indices for the current page
  const startIndex = (currentPage - 1) * videosPerPage;
  const endIndex = startIndex + videosPerPage;

  // Get the videos to display on the current page
  const currentVideos = videos.slice(startIndex, endIndex);

  const totalPages = Math.ceil(videos.length / videosPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      // Scroll to top of gallery when page changes
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

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
            Video Gallery
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
            Watch Our Amazing Videos
          </MKTypography>
        </Container>
      </MKBox>

      <Container sx={{ py: 6 }}>
        <div className="video-gallery">
      <div className="video-row">
        {currentVideos.length > 0 ? (
          currentVideos.map((videoUrl, index) => (
            <div key={startIndex + index} className="video-item">
              <ReactPlayer
                url={videoUrl}
                width="100%"
                height="100%"
                controls
                volume={1}
                onError={(e) => console.error("Error playing video:", e)}
              />
            </div>
          ))
        ) : (
          <MKBox textAlign="center" py={8} width="100%">
            <MKTypography variant="h6" color="text">
              No videos available
            </MKTypography>
          </MKBox>
        )}
      </div>
      {videos.length > videosPerPage && totalPages > 0 && (
        <div className="pagination-container">
          <div className="pagination">
            <button
              className="pagination-button prev-next"
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              aria-label="Previous page"
            >
              <i className="fas fa-chevron-left"></i>
              <span>Prev</span>
            </button>
            
            <div className="pagination-numbers">
              {Array.from({ length: totalPages }, (_, index) => {
                const pageNumber = index + 1;
                // Show first page, last page, current page, and pages around current
                if (
                  pageNumber === 1 ||
                  pageNumber === totalPages ||
                  (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                ) {
                  return (
                    <button
                      key={index}
                      className={`pagination-button page-number ${pageNumber === currentPage ? "active" : ""}`}
                      onClick={() => handlePageChange(pageNumber)}
                      aria-label={`Go to page ${pageNumber}`}
                    >
                      {pageNumber}
                    </button>
                  );
                } else if (
                  pageNumber === currentPage - 2 ||
                  pageNumber === currentPage + 2
                ) {
                  return (
                    <span key={index} className="pagination-ellipsis">
                      ...
                    </span>
                  );
                }
                return null;
              })}
            </div>

            <button
              className="pagination-button prev-next"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              aria-label="Next page"
            >
              <span>Next</span>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
          
          <div className="pagination-info">
            <MKTypography variant="body2" color="text">
              Page {currentPage} of {totalPages} • Showing {currentVideos.length} of {videos.length} videos
            </MKTypography>
          </div>
        </div>
      )}
        </div>
      </Container>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default VideoGallery;
