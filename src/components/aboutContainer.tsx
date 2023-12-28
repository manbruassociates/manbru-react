import {
  Avatar,
  Box,
  Button,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import AboutHorizontalContainer from "./aboutHorizontalContainer";
import AboutVerticalConatiner from "./aboutVerticalConatiner";
import brundaContent from "./constants/brundaContent";
import manjuContent from "./constants/manjuContent";
import { useState } from "react";

function AboutContainer() {
  const content = `Manbru Associates is a leading firm that specializes in providing comprehensive Legal & Chartered Accountancy (CA) services under one roof. With a team of highly skilled professionals, including experienced lawyers, certified accountants, and company secretaries, we offer integrated solutions to meet the diverse needs of our clients. Our firm is committed to delivering exceptional services that are tailored to the unique requirements of each client, whether they are individuals, small businesses, or large corporations. We combine our legal expertise with financial acumen and corporate governance knowledge to provide comprehensive solutions for legal compliance, taxation matters, company formations, regulatory filings, and more. At Manbru Associates, we strive to be a trusted partner for our clients, ensuring their legal, financial, and regulatory needs are met efficiently and effectively.
  `;

  const [open, setOpen] = useState(false);

  const handleOpened = () => {
    setOpen(true);
    changedMargin(0);
  };

  const handleClosed = () => {
    setOpen(false);
    changedMargin(16);
  };

  const [containerMargin, changedMargin] = useState(16);

  return (
    <Stack
      direction="column"
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <center>
        {" "}
        <Stack
          direction="column"
          sx={{
            border: 2,
            borderWidth: 4,
            borderStyle: "bold",
            width: 0.85,
            borderRadius: 5,
            mb: containerMargin,
            display: "flex",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: 18, sm: 22, md: 26, lg: 28 },
              p: 4,
            }}
            align="justify"
          >
            {content}
          </Typography>
          {!open && (
            <Button onClick={handleOpened}>
              <Stack direction="row" sx={{ p: 4 }}>
                <Typography
                  sx={{
                    fontSize: { xs: 16, sm: 20, md: 24, lg: 26 },
                    p: 1,
                    color: "white",
                  }}
                >
                  Know More...
                </Typography>
                <Avatar sx={{ mx: 2, width: "50px", height: "50px" }}>
                  <img src="./manju.jpg" width="50px"></img>
                </Avatar>
                <Avatar sx={{ mx: 2, width: "50px", height: "50px" }}>
                  <img src="./brunda.JPG" width="50px"></img>
                </Avatar>
              </Stack>
            </Button>
          )}

          {open && (
            <Button onClick={handleClosed}>
              <Stack direction="row" sx={{ p: 4 }}>
                <Typography
                  sx={{
                    fontSize: { xs: 16, sm: 20, md: 24, lg: 26 },
                    p: 1,
                    color: "white",
                  }}
                >
                  Know Less
                </Typography>
              </Stack>
            </Button>
          )}
        </Stack>
      </center>

      {open && (
        <Container>
          <Box sx={{ display: { xs: "none", lg: "block" } }}>
            <AboutHorizontalContainer
              name="Brunda Rao"
              content={brundaContent}
              imageUrl="./brunda.JPG"
              right={true}
            ></AboutHorizontalContainer>
            <AboutHorizontalContainer
              name="CA. Manjunatha P. S."
              content={manjuContent}
              imageUrl="./manju.jpg"
              right={false}
            ></AboutHorizontalContainer>
          </Box>

          <Box sx={{ display: { md: "block", lg: "none" } }}>
            <AboutVerticalConatiner
              name="Brunda Rao"
              content={brundaContent}
              imageUrl="./brunda.JPG"
            ></AboutVerticalConatiner>
            <AboutVerticalConatiner
              name="CA. Manjunatha P. S."
              content={manjuContent}
              imageUrl="./manju.jpg"
            ></AboutVerticalConatiner>
          </Box>
        </Container>
      )}
    </Stack>
  );
}

export default AboutContainer;
