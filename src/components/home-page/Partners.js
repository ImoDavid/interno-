import React from "react";
import { Box } from "@mui/material";
import BRAND1 from "../../assets/brand1.svg";
import BRAND2 from "../../assets/02.svg";
import BRAND3 from "../../assets/03.svg";
import BRAND4 from "../../assets/04.svg";
import BRAND5 from "../../assets/05.svg";


const partners = [
    {
      img:BRAND1,
    },
    {
      img:BRAND2,
    },
    {
      img:BRAND3,
    },
    {
        img:BRAND4,
      },
      {
        img:BRAND5,
      },
  ];
const Partners = () => {
  return (
    <>
     {partners.map((ele, i) => (
              <Box
                key={i}
                component={"img"}
                src={ele.img}
                width={"100%"}
                maxHeight={"2.5rem"}
                sx={{
                  objectFit: "contain",
                  marginRight: ["0rem", "1rem"],
                  marginBottom: ["1.8rem"],
                }}
              />
            ))}
    </>
  );
};

export default Partners;
