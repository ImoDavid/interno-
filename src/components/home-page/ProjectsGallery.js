import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
  styled,
  Typography,
  Avatar,
} from "@mui/material";
import { IoIosArrowForward } from "react-icons/io";
import { colors } from "../../styles/globals";
import ABOUTIMG from "../../assets/aboutBackground.png";

const GridContainer = styled(Box)({
  display: "grid",
  gridTemplateColumns: `repeat(auto-fill, minmax(285px, 1fr))`,
  gridGap: "45px",
  alignItems: "stretch",

  "@media screen and (max-width: 1200px)": {
    gridGap: "14px",
    gridTemplateColumns: `repeat(auto-fill, minmax(200px, 1fr))`,
  },
});

const StyledGridElements = styled(Box)({
  width: "100%",
});

const data = [
  {
    img: ABOUTIMG,
    bend: "0 50px 0 0",
  },
  {
    img: ABOUTIMG,
    bend: "50px 0 0 0",
  },
  {
    img: ABOUTIMG,
    bend: "0 0 50px 0",
  },
  {
    img: ABOUTIMG,
    bend: "0 0 0 50px",
  },
];
const ProjectsGallery = () => {
  return (
    <Box marginTop={[6, 6]} marginBottom={[6, 8]}>
      <GridContainer>
        {data.map((ele) => (
          <StyledGridElements key={ele.img}>
            <Card
              sx={{
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.05)",
              }}
              elevation={0}
            >
              <CardMedia
                component="img"
                alt=""
                height="280"
                image={ele.img}
                sx={{ objectFit: "cover", borderRadius: ele.bend }}
              />
              <CardContent sx={{ paddingX: 0 }}>
              <Stack direction="row"  justifyContent="space-between">
                <Stack direction="column">
                  <Typography fontWeight="500">Modern Kitchan</Typography>
                  <Typography fontSize="0.8rem">Decor / Artchitecture</Typography>
                </Stack>
                <Avatar>
                  <IoIosArrowForward color={colors.PRIMARY} />
                </Avatar>
              </Stack>
              </CardContent>
            </Card>
          </StyledGridElements>
        ))}
      </GridContainer>
    </Box>
  );
};

export default ProjectsGallery;
