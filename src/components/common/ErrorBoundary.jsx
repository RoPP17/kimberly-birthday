import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <div className="w-full p-4 my-2 text-center bg-white/80 rounded-xl border border-[#FF6B6B]/30 text-[#685E5E]">
          <p className="font-hand text-lg text-[#FF6B6B]">✨ Un momento mágico...</p>
          {process.env.NODE_ENV !== 'production' && (
            <p className="text-xs text-red-500 font-mono mt-1">{this.state.error?.toString()}</p>
          )}
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
