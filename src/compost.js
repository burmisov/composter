import React, { Component } from 'react';
import invariant from 'invariant';
import hoistStatics from 'hoist-non-react-statics';

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default function compost({ name /* , live = false */}) {
  invariant(name, '`name` option shoud be specified.');

  return function wrapWithCompost(WrappedComponent) {
    class Compost extends Component {
      render() {
        return (
          <WrappedComponent { ...this.props } />
        );
      }
    }

    Compost.displayName = `Compost(${getDisplayName(WrappedComponent)})`;

    return hoistStatics(Compost, WrappedComponent);
  };
}
