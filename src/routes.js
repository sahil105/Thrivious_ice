// @mui icons
import InventoryIcon from '@mui/icons-material/Inventory';

// Pages
import AboutUs from "layouts/pages/landing-pages/about-us";
import ContactUs from "layouts/pages/landing-pages/contact-us";
import PresentationPage from "layouts/pages/presentation";
import IceBlockMakingMachine from "pages/LandingPages/IceBlockMakingMachine";
import DirectRefrigerationBlockIceMachine from "pages/LandingPages/DirectRefrigerationBlockIceMachine";
import Gallery from "pages/LandingPages/Gallery";
import IceCube from "pages/LandingPages/IceCube";
import IceCrusher from "pages/LandingPages/IceCrusher";
import IceCutting from "pages/LandingPages/IceCutting";
import ColdRoom from "pages/LandingPages/ColdRoom";
import FlakeIceMachine from "pages/LandingPages/FlakeIceMachine";
import VideoGallery from "pages/LandingPages/VideoGallery/VideoGallery";
const routes = [
  // {
  //   name: "github",
  //   icon: <GitHubIcon />,
  //   href: "/presentation",
  // },
  {
    name: "Home",
    route: "/",
    component: <PresentationPage />,
  },
  {
    name: "About Us",
    route: "/about-us",
    component: <AboutUs />,
  },
  {
    name: "Products",
    icon: <InventoryIcon />,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "Ice Products",
        collapse: [
          {
            name: "Ice Block Making Machine",
            route: "/products/ice-block-making-machine",
            component: <IceBlockMakingMachine />,
          },
          {
            name: "Direct Refrigeration Block Ice Machine",
            route: "/products/direct-refrigeration-block-ice-machine",
            // component: <ContactUs />,
            component: <DirectRefrigerationBlockIceMachine />
          },
          {
            name: "Ice Cube Machine",
            route: "/products/ice-cube-machine",
            component: <IceCube />,
          },
          {
            name: "Ice Crusher Machine",
            route: "/products/ice-crusher-machine",
            component: <IceCrusher />,
          },
          {
            name: "Ice Cutting Machine",
            route: "/products/ice-cutting-machine",
            component: <IceCutting />,
          },
          {
            name: "Cold Room",
            route: "/products/cold-room",
            component: <ColdRoom />,
          },
          {
            name: "Flake Ice Machine",
            route: "/products/Flake-ice-machine",
            component: <FlakeIceMachine />,
          },
        ],
      },
    ],
  },
  {
    name: "Gallery",
    icon: <InventoryIcon />,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "Explore Gallery",
        collapse: [
          {
            name: "Photos",
            route: "/gallery",
            component: <Gallery />,
          },
          {
            name: "Videos",
            route: "/videos",
            // component: <ContactUs />,
            component: <VideoGallery />
          }
        ],
      },
    ],
  },
  // {
  //   name: "Gallery",
  //   route: "/gallery",
  //   component: <Gallery />,
  // },
  {
    name: "Contact Us",
    route: "/contact-us",
    component: <ContactUs />,
  },
];

export default routes;
