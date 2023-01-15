import React from "react";
import { Link as RRLink, NavLink } from "react-router-dom";
import { Box, styled, Stack, Typography, Link, Container } from "@mui/material";
import { colors } from "../../styles/globals";
import LOGO from "../../assets/Logo.png";

const StyledFooterBox = styled(Box)({
  width:"100%",
  margin: "0 1rem",
  "@media screen and (min-width: 600px)": {
    width: "18%",
  }});


const StyledLinkBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  justifyContent: "center",
  textTransform: "capitalize",
  fontSize: "0.9rem",
  fontWeight: "300",
  fontFamily: "Jost",
  marginBottom: "1rem",
});

const StyledLink = styled(NavLink)({
  textDecoration: "none",
  color: colors.OFF_GREY,
  "&:hover": {
    color: colors.ORANGE,
  },
});

const StyledHeading = styled(Typography)({
  fontSize: "1rem",
  fontWeight: "500",
  marginBottom: "0.5rem",
});


const data = [
  {name: "Kitchan"},
  {name: "Living Area"},
  {name: "Bathroom"},
  {name: "Dinning Hall"},
  {name: "Bedroom"},
];

const footerLinks = [
  { page: "About us", url: "/about" },
  { page: "Our projects ", url: "/projects" },
  { page: "our team", url: "/teams" },
  { page: "contact us", url: "/contact" },
  { page: "services", url: "/services" },
];

const Footer = () => {
  return (
    <>
      <Container maxWidth={"md"}>
        <Box>
          <Stack direction={["column", "row"]}>
            <StyledFooterBox sx={{ display: "flex", flex: "1", flexDirection: "column" }}>
              <Box>
                <Box display={"flex"} alignItems={"center"}>
                  <RRLink to={"/"}>
                    <Box
                      component={"img"}
                      src={LOGO}
                      alt={"logo"}
                      height={[10, 15]}
                      width={[10, 15]}
                      mr
                    />
                  </RRLink>
                  <Typography variant="h6" fontWeight={"700"}>
                    Interno
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Typography color={colors.OFF_GREY}>
                  It is a long established fact that a reader will be distracted
                  lookings.
                </Typography>
              </Box>
            </StyledFooterBox>
            <StyledFooterBox>
              <StyledHeading variant="h6">pages</StyledHeading>
              {footerLinks.map((ele) => (
                <StyledLinkBox key={ele.url}>
                  <StyledLink
                    to={ele.url}
                    underline="none"
                    color={colors.FOOTER_TEXT}
                  >
                    {ele.page}
                  </StyledLink>
                </StyledLinkBox>
              ))}
            </StyledFooterBox>
            <StyledFooterBox>
              <StyledHeading variant="h6">services</StyledHeading>
              {data.map((ele, i) => (
                <StyledLinkBox key={i}>
                  <StyledLink
                    to={ele.url}
                    underline="none"
                    color={colors.FOOTER_TEXT}
                  >
                    {ele.name}
                  </StyledLink>
                </StyledLinkBox>
              ))}
            </StyledFooterBox>
            <StyledFooterBox>
              <StyledHeading variant="h6">contact</StyledHeading>
              <StyledLinkBox>
                <StyledLink
                  href="/"
                  underline="none"
                  color={colors.FOOTER_TEXT}
                >
                 55 East Birchwood Ave. Brooklyn, New York 11201
                </StyledLink>
              </StyledLinkBox>
              <StyledLinkBox>
                <StyledLink
                  href="mailto:support@pchofficials.com"
                  underline="none"
                  color={colors.FOOTER_TEXT}
                >
                  contact@interno.com

                </StyledLink>
              </StyledLinkBox>
              <StyledLinkBox>
                <StyledLink
                  href="Tel:+1(813) 291-0211"
                  underline="none"
                  color={colors.FOOTER_TEXT}
                >
                  (123) 456 - 7890
                </StyledLink>
              </StyledLinkBox>
            </StyledFooterBox>
          </Stack>

          <Typography color={colors.FOOTER_TEXT} fontSize="0.8rem">
            &#169; Copyrights 2021. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default Footer;
