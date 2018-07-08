import React from 'react';
import PropTypes from 'prop-types';

class MicrobundleReactJsxDemo extends React.Component {
  render() {
    const { content } = this.props;
    return <div>{content}</div>;
  }
}

MicrobundleReactJsxDemo.propTypes = {
  content: PropTypes.string,
};

export default MicrobundleReactJsxDemo;
