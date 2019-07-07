import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Footer from '../containers/footer';

const style = {
  left: '50px',
  top: '50px',
  position: 'absolute',
};

storiesOf('Footer', module)
  .add('Container', () => (
    <div style={style}>
      <Footer />
    </div>
  ));
