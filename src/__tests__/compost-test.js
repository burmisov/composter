jest.dontMock('../compost');

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const compost = require('../compost');

class TestClass extends Component {
  static propTypes = {
    name: PropTypes.String,
  }
  render() {
    return (<span>{ this.props.name }</span>);
  }
}

describe('compost', () => {
  it('preserves original component properties', () => {

  });
});
