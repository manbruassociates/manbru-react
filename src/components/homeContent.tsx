import { Typography } from "@mui/material";
import Stack from "@mui/system/Stack";
import ServiceCard from "./serviceCard";
import Headings from "./headings";
import AboutContainer from "./aboutContainer";
import FooterElement from "./footerElement";
import Services from "./services";
import CAServices from "./constants/caServices";
import LegalServices from "./constants/legalServices";

export default function HomeContent() {
  return (
    <center>
      <Stack>
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
        <Typography sx={{ fontSize: { xs: 18, md: 32 }, mt: { xs: 1, md: 8 } }}>
          The Power Duo ~ <br></br>
          Legal and CA Services at Your Fingertips
        </Typography>
        <Headings title="OUR SERVICES"></Headings>
        <Stack
          direction="row"
          useFlexGap
          flexWrap="wrap"
          spacing={{ xs: 4, sm: 4, md: 16 }}
          justifyContent="space-evenly"
        >
          <Services
            card={
              <ServiceCard
                path="./logo.svg"
                alt="CA"
                name="CA"
                imageHeight="250px"
                imageWidth="250px"
                fontSize={32}
              ></ServiceCard>
            }
            title="Chartered Accountancy Services"
            serviceContent={CAServices}
          ></Services>
          <Services
            card={
              <ServiceCard
                path="./logo.svg"
                alt="Legal"
                name="LEGAL"
                imageHeight="250px"
                imageWidth="250px"
                fontSize={32}
              ></ServiceCard>
            }
            title="Legal Services"
            serviceContent={LegalServices}
          ></Services>
        </Stack>
        <Headings title="ABOUT US"></Headings>
        <AboutContainer></AboutContainer>
        <FooterElement></FooterElement>
      </Stack>
    </center>
  );
}
