import Styles from "./Cardcarousel.module.css";

import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

function Cardcarousel({ imagen }) {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)"
  });
  return (
      <img src={imagen} alt="" width={600} height={700}/>
    
  );
}

export default Cardcarousel;
