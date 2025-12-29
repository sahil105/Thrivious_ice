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

  // Calculate the start and end indices for the current page
  const startIndex = (currentPage - 1) * videosPerPage;
  const endIndex = startIndex + videosPerPage;

  // Get the videos to display on the current page

  useEffect(() => {
    getVideoUrls()
      .then(setVideos)
      .catch(console.error);
  }, []);

  const totalPages = Math.ceil(videos.length / videosPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
    <DefaultNavbar
    routes={routes}
    light
    // relative
  />
  <br></br>
  <br></br>
  <br></br>
    <div className="video-gallery">
      <div className="video-row">
        {videos.map((videoUrl, index) => (
          <div key={index} className="video-item">
            <ReactPlayer
              url={videoUrl}
              width="100%"
              height="100%"
              controls
              volume={1}
              onError={(e) => console.error("Error playing video:", e)}
            />
          </div>
        ))}
      </div>
      {videos.length > 6 && <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`page-button ${index + 1 === currentPage ? "active" : ""}`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>}
    </div>
    <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default VideoGallery;
