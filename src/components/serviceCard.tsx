import { Container, Stack, Typography } from "@mui/material";
import { useState } from "react";

interface props {
  path: string;
  alt: string;
  name: string;
  fontSize: number | string;
  imageWidth: number | string;
  imageHeight: number | string;
}

const ServiceCard = ({
  path,
  alt,
  name,
  imageHeight = "250px",
  imageWidth = "250px",
  fontSize = 32,
}: props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleHoverExit = () => {
    setIsHovered(false);
  };

  const hoverStyles = {
    width: isHovered ? "350px" : imageWidth,
    height: isHovered ? "350px" : imageHeight,
    transition: "width 0.3s, height 0.3s",
  };

  const typographyStyles = {
    fontSize: isHovered ? { xs: "32px", md: "46px" } : `${fontSize}px`,
    transition: "font-size 0.3s",
  };

  return (
    <Container
      sx={{
        "&:hover": {
          cursor: "pointer",
          width: "400px",
          height: "500px",
          img: hoverStyles,
          "& .MuiTypography-root": typographyStyles,
          mt: { xs: 0, md: -8 },
        },
        width: { xs: 0.8, sm: "300px" , md:"350px" },
        height: "400px",
        border: "solid",
        borderRadius: "12px",
      }}
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverExit}
    >
      <Stack sx={{ display: "flex", alignItems: "center" }}>
        <img
          src={path}
          alt={alt}
          style={{ width: hoverStyles.width, height: hoverStyles.height }}
        />
        <Typography fontSize={fontSize} sx={{ fontWeight: "bold", mt: 4 }}>
          {name}
        </Typography>
      </Stack>
    </Container>
  );
};

export default ServiceCard;
