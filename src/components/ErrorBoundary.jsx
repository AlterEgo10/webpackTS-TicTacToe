import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ErrorBoundary extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
    fallback: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
  };

  constructor(properties) {
    super(properties);
    this.state = {
      hasError: false,
    }
}

  static getDerivedStateFromError(error) {
    console.info(error)
    return { hasError: true }
  }
  
  componentDidCatch(error, info) {
    console.info(error, info)
    //fetch or axios, Post
}

  render() {
    if (this.state.hasError) {
      return this.props.fallback
    }
    return this.props.children
  }
}
