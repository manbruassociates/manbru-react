import * as React from "react";
import { Container, Typography, BottomNavigation, Stack} from "@mui/material";
import {Button ,Menu,MenuItem, } from "@mui/material";
import ListIcon from "@mui/icons-material/List";

const navItems = ["Home", "About", "Service", "Contact"];

export default function NavBar() {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        borderBottom: 1,
        borderColor: "#F8DE22",
        borderWidth: 4,
      }}
    >
      <Typography sx={{color:"white",p: 3, fontSize: { xs: 14, md: 26 } }}>
        MANBRU ASSOCIATES
      </Typography>
      <SimpleBottomNavigation></SimpleBottomNavigation>
      <BasicMenu></BasicMenu>
    </Container>
  );
}

function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      sx={{
        bgcolor: "transparent",
        display: { xs: "none", md: "block" },
        mt: 4,
      }}
    >
      <Stack direction="row" spacing={4}>
      {navItems.map((item ,index) => (
        <Typography sx={{ color: index === value ? "white" :"#F8DE22", fontSize:18}}>{item}</Typography>
      ))}
      </Stack>
    </BottomNavigation>
  );
}

function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          mt: 2.5,
          display: { xs: "block", md: "none" },
          color: "#F8DE22",
        }}
      >
        <ListIcon></ListIcon>{" "}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {navItems.map((items) => (
          <MenuItem onClick={handleClose}>{items}</MenuItem>
        ))}
      </Menu>
    </div>
  );
}
