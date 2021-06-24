import React from "react";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import PropTypes from "prop-types";
import useStyles from '../styles'

import {
  Typography,
  AppBar,
  CssBaseline,
  Toolbar,
  Container,
  Box,
  ButtonGroup,
  Button,
} from "@material-ui/core";

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function AppHeader(props) {
  const classes = useStyles()

  return (
    <>
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar className={classes.toolbar}>
            <Typography variant="h6">Pittsburgh Whitening Company</Typography>
            <Toolbar>
              <ButtonGroup
                variant="text"
                className={classes.buttons}
                aria-label="text primary button group"
              >
                <Button className={classes.buttons}>Services</Button>
                <Button className={classes.buttons}>Contact</Button>
                <Button className={classes.buttons}>About Me</Button>
              </ButtonGroup>
            </Toolbar>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </>
  );
}
