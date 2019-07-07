import React from 'react';
import { Grid, Row, Col, Well, Panel, List, ListGroup, ListGroupItem } from 'react-bootstrap';
import './style.css';

const HelloWorld = (props) => (
  <Panel header={props.header} className="about">
    <div>
      <ListGroup>
        <ListGroupItem>Item 1</ListGroupItem>
        <ListGroupItem>Item 2</ListGroupItem>
        <ListGroupItem>...</ListGroupItem>
      </ListGroup>
    </div>
    <div>
      <Grid>
        <Row className="show-grid">
          <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
        </Row>
        <Row className="show-grid">
          <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
        </Row>
        <Row className="show-grid">
          <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
        </Row>
        <Row className="show-grid">
          <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
        </Row>
        <Row className="show-grid">
          <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
        </Row>
        <Row className="show-grid">
          <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
        </Row>
      </Grid>
    </div>
  </Panel>
)

HelloWorld.propTypes = {
  name: React.PropTypes.string.isRequired,
  header: React.PropTypes.string.isRequired,
}

export default HelloWorld;
