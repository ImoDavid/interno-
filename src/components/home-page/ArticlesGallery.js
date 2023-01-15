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
import { BsTelephone } from "react-icons/bs";
import { colors } from "../../styles/globals";
import ABOUTIMG from "../../assets/aboutBackground.png";

const GridContainer = styled(Box)({
  display: "grid",
  gridTemplateColumns: `repeat(auto-fill, minmax(200px, 1fr))`,
  gridGap: "30px",
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
    bgcolor: colors.WHITE,
  },
  {
    img: ABOUTIMG,
    bgcolor: colors.GREY,
  },
  {
    img: ABOUTIMG,
    bgcolor: colors.WHITE,
  },
];
const ArticlesGallery = () => {
  return (
    <Box marginTop={[6, 6]} marginBottom={[6, 8]}>
      <GridContainer>
        {data.map((ele) => (
          <StyledGridElements key={ele.img}>
            <Card
              sx={{
                backgroundColor:ele.bgcolor,
                p: 1,
                borderRadius: "25px",
                border: "1px solid rgba(0, 0, 0, 0.1)",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.05)",
                borderColor: `grey`,
              }}
              elevation={0}
            >
              <CardMedia
                component="img"
                alt=""
                height="200"
                image={ele.img}
                sx={{ objectFit: "cover",borderRadius: "25px 25px 0 0",}}
              />
              <CardContent sx={{ paddingX: 0 }}>
                <Stack direction="row" justifyContent="space-between">
                  <Stack direction="column">
                    <Typography fontWeight="500">Modern Kitchan</Typography>
                    <Typography fontSize="0.8rem">
                      Decor / Artchitecture
                    </Typography>
                  </Stack>
                  <Avatar>
                    <BsTelephone color={colors.PRIMARY} />
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

export default ArticlesGallery;
