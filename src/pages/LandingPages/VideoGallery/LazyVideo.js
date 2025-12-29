// LazyVideo.js
import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import videoThumbnail from "video-thumbnail"; // Import the video-thumbnail library

function LazyVideo({ url }) {
    console.log('url', url  );
  const [isLoaded, setIsLoaded] = useState(false);
  const [thumbnail, setThumbnail] = useState(null);

  useEffect(() => {
    const generateThumbnail = async () => {
      try {
        const thumb = await videoThumbnail(url, {
          quality: 10,
          height: 150,
        });
        setThumbnail(thumb);
      } catch (error) {
        console.error("Error generating thumbnail:", error);
      }
    };

    generateThumbnail();
  }, [url]);

  return (
    <div className="lazy-video">
      {isLoaded ? (
        <ReactPlayer
          url={url}
          width="100%"
          height="100%"
          controls
          volume={1}
          onError={(e) => console.error("Error playing video:", e)}
        />
      ) : (
        // Display the video thumbnail as a placeholder
        thumbnail ? (
          <img src={thumbnail} alt="Video Thumbnail" onClick={() => setIsLoaded(true)} />
        ) : (
          <div>Loading Thumbnail...</div>
        )
      )}
    </div>
  );
}

export default LazyVideo;
