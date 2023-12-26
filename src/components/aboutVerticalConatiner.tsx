import { Avatar, Box, Container, Stack, Typography } from "@mui/material";

interface props {
  name: string;
  content: string;
  imageUrl: string;
}

const AboutVerticalConatiner = ({ name, content, imageUrl }: props) => {
  return (
    <Stack direction="column" spacing={0} sx={{ my: 8 }}>
      <Container
        sx={{
          width: { xs: "350px", sm: "450px" },
          height: { xs: "350px", sm: "450px" },
          border: "solid",
          borderBottom: 0,
          borderTopRightRadius: "50%",
          borderTopLeftRadius: "50%",
        }}
      >
        <Avatar
          sx={{
            width: { xs: "300px", sm: "400px" },
            height: { xs: "300px", sm: "400px" },
            mt: "25px",
          }}
        >
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <img src={imageUrl} width="400px" />
          </Box>
          <Box sx={{ display: { xs: "block", sm: "none" } }}>
            <img src={imageUrl} width="300px" />
          </Box>
        </Avatar>
      </Container>
      <Container
        sx={{
          width: { xs: "350px", sm: "450px" },
          height: "450px",
          border: "solid",
          borderTop: 0,
        }}
      >
        <Stack direction="column" sx={{ mt: 2 }}>
          <Typography sx={{ p: 1, fontSize: 30, fontWeight: "bold" }}>
            {name}
          </Typography>
          <Typography sx={{ p: 1, fontSize: { xs: 14, sm: 16 } }}>
            {content}
          </Typography>
        </Stack>
      </Container>
    </Stack>
  );
};

export default AboutVerticalConatiner;
