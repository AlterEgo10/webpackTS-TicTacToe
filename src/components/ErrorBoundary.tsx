import React, { Component } from 'react'

import axios from 'axios'

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

interface ErrorBoundaryProperties{
  children: React.ReactElement
  fallback?:React.ReactElement
}

interface ErrorBoundaryState{
  hasError:boolean
}

export default class ErrorBoundary extends Component<ErrorBoundaryProperties,ErrorBoundaryState> {
  static defaultProps = {
    fallback: <div>Ошибка 500. Обновите страницу</div>,
  };


  url = `${REACT_APP_BASE_URL}/logs`

  constructor(properties: ErrorBoundaryProperties) {
    super(properties);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info:React.ErrorInfo) {
    //fetch or axios, Post
    axios.get(`${this.url}?message=${error.message}`).then((result) => {
      if (result.data && result.data.length === 0)
        axios.post(this.url, {
          message: error.message,
          stack: info,
          date: new Date(),
        });
    });
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

