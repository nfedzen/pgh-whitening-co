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
      <Container maxWidth='xl'>
        {/* <div className={classes.divBackground}>

        </div> */}
        <Card className={classes.firstCard}>
          <CardMedia
            className={classes.cardMedia}
            image={Image}
          >
            <Typography variant='h2' className={classes.cardTitle}>Welcome to Pittsburgh Whitening Company!</Typography>
            <Typography variant='h3' className={classes.cardTitleTwo}>Pittsburgh's premiere mobile teeth whitening service!</Typography>
          </CardMedia>
        </Card>
      </Container>
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
