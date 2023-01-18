import React from "react";
import { Stack, Box, Container } from "@mui/material";
import { ServicePlan, ServiceWork } from "../../components/services-page/";
import { PagesHero, Heading, } from "../../commons";
import { colors } from "../../styles/globals";
import ICON1 from "../../assets/Icon.png";
import ICON2 from "../../assets/Icon2.png";
import ICON3 from "../../assets/Icon3.png";
import ICON4 from "../../assets/Icon4.png";

const ServicesPage = () => {
  return (
    <>
      <PagesHero
        image={
          "https://res.cloudinary.com/dfljnnxln/image/upload/v1673984086/Photo_1_1_qkh2ed.png"
        }
        title="Services"
        des="Home / Services"
      />
      <Container maxWidth={"md"}>
        <ServicePlan />
        <Box
          sx={{
            borderRadius: "25px",
            backgroundColor: colors.GREY,
            padding: "5rem 0rem",
            marginTop: "6rem",
            marginBottom: "6rem",
          }}
        >
          <Heading
            title="How We Work"
            des="It is a long established fact  will be distracted.Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          />
          <Stack direction={"column"} paddingY={5} paddingX={[4,8]}>
            <ServiceWork
              orderBox="2"
              orderPic="1"
              marginLeft={"2rem"}
              marginRight="0"
              title="Concept & Details"
              icon={ICON1}
              num="01"
              image="https://res.cloudinary.com/dfljnnxln/image/upload/v1674044529/Photo_1_ii7m8o.jpg"
            />
            <ServiceWork
              title="Idea for Work"
              num={"02"}
              pRight="0"
              pLeft={"5rem"}
              icon={ICON2}
              image="https://res.cloudinary.com/dfljnnxln/image/upload/v1674009084/Photo_cw0o4x.jpg"
            />
            <ServiceWork
              orderBox="2"
              orderPic="1"
              marginLeft={"2rem"}
              marginRight="0"
              title="Design"
              num="03"
              icon={ICON3}
              image="https://res.cloudinary.com/dfljnnxln/image/upload/v1674009084/Photo_1_mlatwp.jpg"
            />
             <ServiceWork
              title="Perfection"
              num={"04"}
              pRight="0"
              pLeft={"5rem"}
              icon={ICON4}
              image="https://res.cloudinary.com/dfljnnxln/image/upload/v1674009084/Photo_2_upc5to.jpg"
            />
          </Stack>
        </Box>
      </Container>
    </>
  );
};

export default ServicesPage;
