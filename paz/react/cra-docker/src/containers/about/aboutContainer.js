import React from 'react';
import Hello from '../../components/about';

class AboutContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Lorem ipson',
      header: 'About'
    };
  }
  render() {
    return (
      <div>
        <Hello header={this.state.header} name={this.state.name} />
      </div>
    );
  }
}

export default AboutContainer;
