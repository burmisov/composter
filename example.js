import React, { Component, PropTypes } from 'react';

function composter(WrappedComponent) {

}

const composterOptions = {
  collection: 'messages',
  live: true,
};

class DataConsumer extends Component {
  static propTypes = {
    messages: PropTypes.shape({
      data: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.object),
        PropTypes.objectOf(PropTypes.object),
      ]).isRequired,
      status: PropTypes.oneOf([
        'idle', 'loading', 'loaded'
      ]).isRequired,
      setQuery: PropTypes.func.isRequired, // setQuery({ query })
      update: PropTypes.func.isRequired, // update(objectId, { data })
    }),
  }

  render() {
    //
  }
}

export default Composter(DataConsumer, composterOptions);
