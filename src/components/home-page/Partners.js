import React from "react";
import { Box } from "@mui/material";
import BRAND1 from "../../assets/brand1.svg";


const partners = [
    {
      img:BRAND1,
    },
    {
      img:BRAND1,
    },
    {
      img:BRAND1,
    },
    {
        img:BRAND1,
      },
      {
        img:BRAND1,
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
                  marginBottom: ["1.5rem"],
                }}
              />
            ))}
    </>
  );
};

export default Partners;
