import { Avatar, Container, Stack, Typography } from "@mui/material";

interface props {
  right: boolean;
  name: string;
  content: string;
  imageUrl: string;
}

const AboutHorizontalContainer = ({
  right,
  name,
  content,
  imageUrl,
}: props) => {
  return (
    <Stack direction="row" spacing={0} sx={{ my: 16 }}>
      <Container
        sx={{
          width: right ? "500px" : "800px",
          height: "500px",
          border: "solid",
          borderRight: 0,
          borderBottomLeftRadius: right ? "50%" : 0,
          borderTopLeftRadius: right ? "50%" : 0,
        }}
      >
        {right ? (
          <Avatar sx={{ width: "450px", height: "450px", mt: "25px" }}>
            <img src={imageUrl} width="450px" />
          </Avatar>
        ) : (
          <Stack direction="column" sx={{ mt: 4 }}>
            <Typography sx={{ p: 2, fontSize: 34, fontWeight: "bold" }}>
              {name}
            </Typography>
            <Typography
              sx={{
                p: 2,
                fontSize: 18,
              }}
            >
              {content}
            </Typography>
          </Stack>
        )}
      </Container>
      <Container
        sx={{
          width: right ? "800px" : "500px",
          height: "500px",
          border: "solid",
          borderLeft: 0,
          borderBottomRightRadius: right ? 0 : "50%",
          borderTopRightRadius: right ? 0 : "50%",
        }}
      >
        {right ? (
          <Stack direction="column" sx={{ mt: 4 }}>
            <Typography sx={{ p: 2, fontSize: 34, fontWeight: "bold" }}>
              {name}
            </Typography>
            <Typography sx={{ p: 2, fontSize: 18 }}>{content}</Typography>
          </Stack>
        ) : (
          <Avatar sx={{ width: "450px", height: "450px", mt: "25px" }}>
            M
          </Avatar>
        )}
      </Container>
    </Stack>
  );
};

export default AboutHorizontalContainer;
