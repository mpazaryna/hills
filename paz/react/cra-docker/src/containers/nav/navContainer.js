import React from 'react';
import Nav from '../../components/nav';

class NavContainer extends React.Component {
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
        <Nav name={this.state.name} header={this.state.header} />
      </div>
    );
  }
}

export default NavContainer;
