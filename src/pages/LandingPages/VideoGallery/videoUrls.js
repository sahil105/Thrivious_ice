const VIDEO_LIST_URL =
  "https://www.thriviousice-cooling.com/uploads/videos/video_list.php";

/**
 * Fetch all video URLs from server
 * @returns {Promise<string[]>}
 */
const getVideoUrls = async () => {
  const res = await fetch(VIDEO_LIST_URL);
  if (!res.ok) throw new Error("Failed to fetch videos");
  return res.json(); // returns array of full URLs
};

export default getVideoUrls;
