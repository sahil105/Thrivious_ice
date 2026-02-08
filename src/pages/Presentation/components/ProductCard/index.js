import { Link } from "react-router-dom";
import { getProductImageUrls } from "config/media";
import useFirstAvailableImage from "hooks/useFirstAvailableImage";
import ExampleCard from "pages/Presentation/components/ExampleCard";

/**
 * Product card that loads image from server folder (same as product pages).
 * Uses first available of .jpeg, .png, .jpg for the given filename.
 */
function ProductCard({ folderName, imageFile, name, route, fallbackImage }) {
  const urls = getProductImageUrls(folderName, imageFile, ["jpeg", "png", "jpg", "JPG"]);
  const image = useFirstAvailableImage(urls) || fallbackImage;

  return (
    <Link to={route} style={{ textDecoration: "none" }}>
      <ExampleCard image={image} name={name} />
    </Link>
  );
}

export default ProductCard;
