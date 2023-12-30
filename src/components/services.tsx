import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { Container } from "@mui/material";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface props {
  card: React.ReactElement;
  serviceContent: React.ReactElement;
  title: string;
}

const Services = ({ card, serviceContent, title }: props) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleClickOpen} sx={{ color: "white" }}>
        {card}
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative", bgcolor: "#2e355c" }}>
          <Toolbar>
            <Typography
              sx={{ ml: 2, flex: 1, fontSize: { sm: 18, md: 28 } }}
              component="div"
            >
              {title}
            </Typography>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Container>
          <Typography sx={{ fontSize: { sm: 14, md: 24 } }}>
            {serviceContent}
          </Typography>
        </Container>
      </Dialog>
    </React.Fragment>
  );
};

export default Services;
