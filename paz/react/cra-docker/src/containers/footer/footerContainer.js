import React from 'react';
import Footer from '../../components/footer';

class FooterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'This is the application',
      header: 'About'
    };
  }
  render() {
    return (
      <div>
        <Footer name={this.state.name} header={this.state.header} />
      </div>
    );
  }
}

export default FooterContainer;
