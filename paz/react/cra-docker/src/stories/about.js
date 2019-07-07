import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import About from '../containers/about';

const style = {
  left: '50px',
  top: '50px',
  position: 'absolute',
};

storiesOf('About', module)
  .add('Container', () => (
    <div style={style}>
      <About />
    </div>
  ));
