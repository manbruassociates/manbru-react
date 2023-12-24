import { Box, Link, Stack, Typography } from "@mui/material";
import TermsAndConditions from "./termsAndCondition";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";

export default function FooterElement() {
  const mapLink =
    "https://www.google.com/maps/place/Pristine+Hill+View+Elitus+Euphoria/@13.190758,77.6253017,17z/data=!4m6!3m5!1s0x3bae1f892bcda6f9:0x89669f8d860a4ec1!8m2!3d13.1901971!4d77.625843!16s%2Fg%2F11j13ls1q4?entry=ttu";
  return (
    <Stack
      direction="row"
      spacing={8}
      sx={{ p: 2, mb: 4, borderTop: 1, borderWidth: 4 }}
    >
      <Stack direction="column">
        <Typography sx={{ py: 2, fontSize: 30, fontWeight: "bold" }}>
          Manbru Associates
        </Typography>
        <Typography sx={{ py: 6 }}>
          © 2023 - 2024, All Rights Reserved
        </Typography>
      </Stack>
      <Stack direction="column">
        <Stack
          direction="row"
          spacing={8}
          sx={{ px: 4, py: 2, display: "flex", justifyContent: "right" }}
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
        <Box>
          <TermsAndConditions></TermsAndConditions>
        </Box>
      </Stack>
    </Stack>
  );
}
