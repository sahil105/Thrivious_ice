import { IMAGES } from "config/media";

/**
 * Products section data. Images are loaded from server folders (uploads/products/<folderName>/)
 * via ProductCard using folderName + imageFile (e.g. TICS 01).
 */
export default [
  {
    title: "Products",
    description: "Ice & Colling products which matches your need",
    items: [
      {
        folderName: "Ice Block Making Machine",
        imageFile: "TICS 01",
        name: "Ice Block Making Machine",
        route: "/products/ice-block-making-machine",
        fallbackImage: IMAGES.prdocut5,
      },
      {
        folderName: "Direct Refrigeration Block Ice Machine",
        imageFile: "TICS 29",
        name: "Direct Refrigeration Block Ice Machine",
        route: "/products/direct-refrigeration-block-ice-machine",
        fallbackImage: IMAGES.product23,
      },
      {
        folderName: "Ice Cube Cutting Machine",
        imageFile: "TICS 23",
        name: "Ice Cube Machine",
        route: "/products/ice-cube-machine",
        fallbackImage: IMAGES.product3,
      },
      {
        folderName: "Ice Crusher Machine",
        imageFile: "TICS 37",
        name: "Ice Crusher Machine",
        route: "/products/ice-crusher-machine",
        fallbackImage: IMAGES.prdocut39,
      },
      {
        folderName: "Ice Cutting Machine",
        imageFile: "TICS 21",
        name: "Ice Cutting Machine",
        route: "/products/ice-cutting-machine",
        fallbackImage: IMAGES.product4,
      },
      {
        folderName: "Cold Room",
        imageFile: "TICS 33",
        name: "Cold Room",
        route: "/products/cold-room",
        fallbackImage: IMAGES.prdocut42,
      },
      {
        folderName: "Flake Ice Machine",
        imageFile: "TICS 32",
        name: "Flake Ice Machine",
        route: "/products/Flake-ice-machine",
        fallbackImage: IMAGES.product5,
      },
    ],
  },
];
