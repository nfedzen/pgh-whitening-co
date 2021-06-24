import React from "react";
import {
  Typography,
  CssBaseline,
  Container,
  Box,
  Button,
  Card,
  CardMedia,
} from "@material-ui/core";
import useStyles from "./styles";
import AppHeader from "./components/AppHeader";
import Image from "./img/pittsburgh.png";

export default function App() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <AppHeader classes={classes} />
        <Card className={classes.firstCard}>
          <CardMedia
            className={classes.firstContainer}
            image={Image}
          ></CardMedia>
        </Card>
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
    </>
  );
}
