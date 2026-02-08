export const MEDIA_BASE = "https://www.thriviousice-cooling.com/uploads";

/** Build full URLs for a product image – try .jpeg, .png, .jpg (first that exists will be used). */
export function getProductImageUrls(folderName, baseFilename, extensions = ["jpeg", "png", "jpg"]) {
  if (!folderName || !baseFilename) return [];
  return extensions.map(
    (ext) =>
      `${MEDIA_BASE}/products/${encodeURIComponent(folderName)}/${encodeURIComponent(baseFilename + "." + ext)}`
  );
}

export const IMAGES = {
  bgImage: `${MEDIA_BASE}/images/gal_1-PhotoRoom.jpg`,
  gallery1: `${MEDIA_BASE}/images/gal_40-PhotoRoom.png`,
  gallery2: `${MEDIA_BASE}/images/gal_3-PhotoRoom.jpg`,
  product3: `${MEDIA_BASE}/images/gal_26-PhotoRoom.jpg`,
  product23: `${MEDIA_BASE}/images/gal_23-PhotoRoom.jpg`,
  product24: `${MEDIA_BASE}/images/gal_24-PhotoRoom.jpg`,

  product4: `${MEDIA_BASE}/images/gal_28-PhotoRoom.jpg`,
  gal29: `${MEDIA_BASE}/images/gal_29-PhotoRoom.jpg`,

  product5: `${MEDIA_BASE}/images/gal_45-PhotoRoom.jpg`,
  prdocut41: `${MEDIA_BASE}/images/gal_41-PhotoRoom.png`,
  prdocut42: `${MEDIA_BASE}/images/gal_42-PhotoRoom.png`,
  prdocut44: `${MEDIA_BASE}/images/gal_44-PhotoRoom.jpg`,
  prdocut39: `${MEDIA_BASE}/images/gal_39-PhotoRoom.png`,
  prdocut31: `${MEDIA_BASE}/images/gal_31-PhotoRoom.jpg`,
  prdocut5: `${MEDIA_BASE}/images/gal_5-PhotoRoom.jpg`,
  logo: `${MEDIA_BASE}/logo.png`,
  home: `${MEDIA_BASE}/home.png`,
};

export const VIDEOS = {
  intro: `${MEDIA_BASE}/videos/intro.mp4`,
};
