/* global jest, describe, it, expect */

jest.dontMock('../compost');

import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

jest.autoMockOff();
const compost = require('../compost');
jest.autoMockOn();

class TestClass extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
  }

  render() {
    return (<span>{ this.props.label }</span>);
  }
}

describe('compost', () => {
  it('preserves original component properties', () => {
    const CompostedClass = (compost({ name: 'test', live: false }))(TestClass);
    const labelText = 'labeltext';
    const composted = TestUtils.renderIntoDocument(
      <CompostedClass label={ labelText } />
    );
    const testNode = ReactDOM.findDOMNode(composted);
    expect(testNode.textContent).toEqual(labelText);
  });
});
