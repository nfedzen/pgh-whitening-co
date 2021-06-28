import React from "react";
import { CssBaseline, Container, Box, Grid } from "@material-ui/core";
import useStyles from "./styles";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import AppHeader from "./components/AppHeader";
import Image from "./img/pghwhiteningco.png";
import ScrollTop from "./components/ScrollTop";

export default function App(props) {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <CssBaseline />
      <AppHeader classes={classes} />

      <div className={classes.fill} id="back-to-top-anchor">
        <img className={classes.topImage} src={Image} alt="" />
      </div>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box my={2}>
            {[...new Array(20)]
              .map(
                () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
              )
              .join("\n")}
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box my={2}>
            {[...new Array(20)]
              .map(
                () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
              )
              .join("\n")}
          </Box>
        </Grid>
      </Grid>

      <Container maxWidth="md">
        <Box my={2}>
          {[...new Array(200)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
            )
            .join("\n")}
        </Box>
      </Container>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  );
}
