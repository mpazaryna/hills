import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Card from '../containers/card';

const style = {
  left: '50px',
  top: '50px',
  position: 'absolute',
};

storiesOf('Card', module)
  .add('Container', () => (
    <div style={style}>
      <Card />
    </div>
  ));
