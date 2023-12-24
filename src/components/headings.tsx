import { Typography } from "@mui/material";

interface props {
  title: string;
}

const Headings = ({ title }: props) => {
  return (
    <Typography
      sx={{
        fontSize: { xs: 32, md: 46 },
        mt: { xs: 8, md: 16 },
        mb: { xs: 8, md: 16 },
        color: "grey",
        fontWeight: "Bold",
      }}
    >
      {title}
    </Typography>
  );
};

export default Headings;
