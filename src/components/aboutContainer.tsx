import { Avatar, Stack, Typography } from "@mui/material";

function AboutContainer() {
  const content = `Manbru Associates is a leading firm that specializes in providing comprehensive legal, Chartered Accountant (CA), and Company Secretary (CS) services under one roof. With a team of highly skilled professionals, including experienced lawyers, certified accountants, and company secretaries, we offer integrated solutions to meet the diverse needs of our clients. Our firm is committed to delivering exceptional services that are tailored to the unique requirements of each client, whether they are individuals, small businesses, or large corporations. We combine our legal expertise with financial acumen and corporate governance knowledge to provide comprehensive solutions for legal compliance, taxation matters, company formations, regulatory filings, and more. At Manbru Associates, we strive to be a trusted partner for our clients, ensuring their legal, financial, and regulatory needs are met efficiently and effectively.
  `;
  return (
    <Stack
      direction="column"
      sx={{
        border: 2,
        borderWidth: 4,
        borderStyle: "bold",
        width: 1,
        borderRadius: 5,
      }}
    >
      <Typography sx={{ fontSize: { xs: 18, sm: 22, md: 26, lg: 28 }, p: 4 }}>
        {content}
      </Typography>
      <Stack direction="row" sx={{ p: 4 }}>
        <Typography sx={{ fontSize: { xs: 16, sm: 20, md: 24, lg: 26 }, p: 1 }}>
          Know More...
        </Typography>
        <Avatar sx={{ mx: 2 }}>B</Avatar>
        <Avatar>M</Avatar>
      </Stack>
    </Stack>
  );
}

export default AboutContainer;
