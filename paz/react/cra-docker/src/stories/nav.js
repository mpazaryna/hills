import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Nav from '../containers/nav';

const style = {
  left: '50px',
  top: '50px',
  position: 'absolute',
};

storiesOf('Nav', module)
  .add('Container', () => (
    <div style={style}>
      <Nav />
    </div>
  ));
