import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

import MKTypography from "components/MKTypography";
import { IMAGES } from "config/media";

// import Logo from "assets/images/logo.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Thrivious Ice & Cooling System",
    image: IMAGES.logo,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: '#',
    },
    {
      icon: <TwitterIcon />,
      link: '#',
    },
    {
      icon: <GitHubIcon />,
      link: '#',
    },
    {
      icon: <YouTubeIcon />,
      link: '#',
    },
  ],
  menus: [
    {
      name: "Contact us",
      items: [
        { name: "about us", href: "/about-us" },
        { name: "contact us", href: "/contact-us" },

        // { name: "freebies", href: "https://www.creative-tim.com/templates/free" },
        // { name: "premium tools", href: "https://www.creative-tim.com/templates/premium" },
        // { name: "blog", href: "https://www.creative-tim.com/blog" },

      ],
    },
    {
      name: "products",
      items: [
        { name: "Ice Block Making Machine", href: "/products/ice-block-making-machine"},
        { name: "Direct Refrigeration Machine", href: "/products/direct-refrigeration-block-ice-machine"},
        { name: "Ice Cube Machine", href:  "/products/ice-cube-machine"},
        { name: "Flake Ice Machine", href: "products/Flake-ice-machine"},
        { name: "Ice Cutting Machine", href: "/products/ice-cutting-machine"},
        { name: "Cold Room", href: "/products/cold-room"},

      ],
    },
    
   
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {"2018-2023"} {" "}
      <MKTypography
        component="a"
        href="/"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        Thrivious Ice & Cooling System
      </MKTypography>
      .
    </MKTypography>
  ),
};
