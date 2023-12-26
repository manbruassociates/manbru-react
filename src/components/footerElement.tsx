import { Box, Container, Link, Stack, Typography } from "@mui/material";
import TermsAndConditions from "./termsAndCondition";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";

export default function FooterElement() {
  const mapLink =
    "https://www.google.com/maps/place/Pristine+Hill+View+Elitus+Euphoria/@13.190758,77.6253017,17z/data=!4m6!3m5!1s0x3bae1f892bcda6f9:0x89669f8d860a4ec1!8m2!3d13.1901971!4d77.625843!16s%2Fg%2F11j13ls1q4?entry=ttu";

  const socialMediaHandles = (
    <Stack
      direction="row"
      spacing={8}
      sx={{ py: 2, display: "flex", justifyContent: "center" }}
    >
      <Link
        href="tel:+919449071612"
        color="white"
        underline="none"
        sx={{ py: 1 }}
      >
        <LocalPhoneIcon sx={{ fontSize: 40 }}></LocalPhoneIcon>
      </Link>
      <Link
        href="mailto:brunda@manbruassociates.com"
        target="_blank"
        color="white"
        underline="none"
        sx={{ py: 1 }}
      >
        <EmailIcon sx={{ fontSize: 40 }}></EmailIcon>
      </Link>
      <Link
        href={mapLink}
        target="_blank"
        color="white"
        underline="none"
        sx={{ py: 1 }}
      >
        <PlaceIcon sx={{ fontSize: 40 }}></PlaceIcon>
      </Link>
    </Stack>
  );

  const copyRights = (
    <Typography sx={{ py: 6, fontSize: { sm: 10, md: 16 } }}>
      © 2023 - 2024, All Rights Reserved
    </Typography>
  );

  const companyName = (
    <Typography
      sx={{ py: 2, fontSize: { xs: 24, md: 34 }, fontWeight: "bold" }}
    >
      Manbru Associates
    </Typography>
  );

  return (
    <Box>
      <Container sx={{ display: { xs: "none", md: "block" } }}>
        <Stack
          direction="row"
          sx={{
            p: 2,
            borderTop: 1,
            borderWidth: 4,
            width: 1,
            justifyContent: "space-evenly",
          }}
        >
          {companyName}
          {socialMediaHandles}
          <TermsAndConditions></TermsAndConditions>
        </Stack>
        <center>{copyRights}</center>
      </Container>
      <Container sx={{ display: { sm: "block", md: "none" } }}>
        <Stack
          direction="column"
          sx={{
            py: 2,
            borderTop: 1,
            borderWidth: 4,
            width: 1,
          }}
        >
          <center>
            {companyName}
            {socialMediaHandles}
            <TermsAndConditions></TermsAndConditions>
            {copyRights}
          </center>
        </Stack>
      </Container>
    </Box>
  );
}
