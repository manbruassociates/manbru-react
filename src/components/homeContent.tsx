import { Box, Container, Typography } from "@mui/material";
import Stack from "@mui/system/Stack";
import ServiceCard from "./serviceCard";
import Headings from "./headings";
import AboutHorizontalContainer from "./aboutHorizontalContainer";
import AboutVerticalConatiner from "./aboutVerticalConatiner";
import AboutContainer from "./aboutContainer";
import FooterElement from "./footerElement";

export default function HomeContent() {
  const brundaContent = `The dynamic founder of Manbru Associates, is a distinguished legal 
  professional with over 20 years of diverse expertise. Holding a post-graduate degree 
  in law from the renowned National Law School, Bangalore, Brunda has honed her skills 
  in various specialized areas. Her broad range of legal proficiency encompasses Intellectual Property Rights (IPR),
  Food laws, Pharmaceutical regulations, E-commerce, Real estate, Labor and employment laws, Contracts and Clinical trials.
  With her profound knowledge and a proven track record, Brunda has guided numerous clients through complex legal challenges, 
  providing strategic counsel and innovative solutions. At the helm of Manbru Associates, she leads a team of talented 
  professionals committed to delivering exceptional legal services, helping clients achieve their objectives in a 
  rapidly evolving business landscape.`;

  const manjuContent = `CA Manjunatha P. S. is a seasoned Chartered Accountant with over two decades of expertise 
  in finance, specializing in financial management, taxation, and compliance. 
  With a client-centric approach, he provides tailored financial journeys marked by precision and integrity. 
  His extensive experience empowers individuals and businesses to achieve their financial goals through valuable 
  insights and resources. Experience finance through the eyes of this seasoned professional for a secure and 
  prosperous financial future.`;

  return (
    <Container
      sx={{ display: "flex", justifyContent: "center", mt: 4, width: "100vw" }}
    >
      <Stack>
        <center>
          <img src="./logo.svg" alt="Logo" style={{ height: 400 }} />
          <Typography
            sx={{
              p: 3,
              fontSize: { xs: 32, md: 54 },
              fontWeight: "bold",
            }}
          >
            MANBRU ASSOCIATES
          </Typography>
          <Typography
            sx={{ fontSize: { xs: 18, md: 32 }, mt: { xs: 1, md: 8 } }}
          >
            The Power Duo ~ <br></br>
            Legal and CA Services at Your Fingertips
          </Typography>
          <Headings title="OUR SERVICES"></Headings>
          <Stack
            direction="row"
            useFlexGap
            flexWrap="wrap"
            spacing={{ xs: 4, sm: 4, md: 16 }}
          >
            <ServiceCard
              path="./logo.svg"
              alt="CA"
              name="CA"
              imageHeight="250px"
              imageWidth="250px"
              fontSize={32}
            ></ServiceCard>
            <ServiceCard
              path="./logo.svg"
              alt="Legal"
              name="LEGAL"
              imageHeight="250px"
              imageWidth="250px"
              fontSize={32}
            ></ServiceCard>
          </Stack>
          <Headings title="ABOUT US"></Headings>
          <AboutContainer></AboutContainer>
          <Box sx={{ display: { xs: "none", lg: "block" } }}>
            <AboutHorizontalContainer
              name="BRUNDA RAO"
              content={brundaContent}
              imageUrl="./brunda.JPG"
              right={true}
            ></AboutHorizontalContainer>
            <AboutHorizontalContainer
              name="C A Manjunath P S"
              content={manjuContent}
              imageUrl="./manju.jpg"
              right={false}
            ></AboutHorizontalContainer>
          </Box>

          <Box sx={{ display: { md: "block", lg: "none" } }}>
            <AboutVerticalConatiner
              name="BRUNDA RAO"
              content={manjuContent}
              imageUrl="./brunda.JPG"
            ></AboutVerticalConatiner>
            <AboutVerticalConatiner
              name="C A Manjunath P S"
              content={manjuContent}
              imageUrl="./manju.jpg"
            ></AboutVerticalConatiner>
          </Box>
        </center>
        <FooterElement></FooterElement>
      </Stack>
    </Container>
  );
}
