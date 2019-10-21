import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <main>
          <section>
            <h1>Separable Verbs</h1>
            <p className="center-text">Looks like there was an error. We&apos;re working on that.</p>
            <p className="center-text">Please try again later.</p>
          </section>
        </main>
      );
    }

    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.element,
};
