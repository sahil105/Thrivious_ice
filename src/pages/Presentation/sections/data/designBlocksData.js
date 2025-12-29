import { IMAGES } from "config/media";
import Product1 from "assets/images/direct-ref-01.jpg";
// import product2 from "https://www.thriviousice-cooling.com/uploads/images/gal_1-PhotoRoom.jpg";

// import product2 from "assets/images/ThriviousProducts/direce_reffection.png";
// import product3 from "https://www.thriviousice-cooling.com/uploads/images/gal_26-PhotoRoom.jpg";
import product4 from "assets/images/ThriviousProducts/ice_crushser.png";
// import product5 from "https://www.thriviousice-cooling.com/uploads/images/gal_28-PhotoRoom.jpg";

import product6 from "assets/images/ThriviousProducts/cold_storage.png";
// import product7 from "https://www.thriviousice-cooling.com/uploads/images/gal_45-PhotoRoom.jpg";


const imagesPrefix =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections";


export default [
  {
    title: "Products",
    description: "Ice & Colling products which matches your need",
    items: [
      {
        image: Product1,
        name: "Ice Block Making Machine",
        route: "/products/ice-block-making-machine",
      },
      {
        image: IMAGES.bgImage,
        name: "Direct Refraction Block Ice Machine",
        route: "/products/direct-refrigeration-block-ice-machine",
      },
      {
        image: IMAGES.product3,
        name: "Ice Cube Machine",
        route: "/products/ice-cube-machine",

      },
      {
        image: product4,
        name: "Ice Crusher Machine",
        route: "/products/ice-crusher-machine",

      },
      {
        image: IMAGES.product5,
        name: "Ice Cutting Machine",
        route: "/products/ice-cutting-machine",

      },
      {
        image: product6,
        name: "Cold Room",
        route: "/products/cold-room",

      },
      {
        image: IMAGES.product5,
        name: "Flake Ice Machine",
        route: "/products/Flake-ice-machine",

      }
    ],
  },
];
