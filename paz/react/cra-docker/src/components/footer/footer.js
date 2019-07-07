import React from 'react';
import { Grid } from 'react-bootstrap';

const Footer = (props) => (
  <Grid>
    <hr />
    <footer>
      <p> Blah: {props.name} : {props.header} </p>
    </footer>
  </Grid>
)

Footer.propTypes = {
  name: React.PropTypes.string.isRequired,
  header: React.PropTypes.string.isRequired,
}

export default Footer;
