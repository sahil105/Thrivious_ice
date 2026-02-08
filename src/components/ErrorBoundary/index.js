import React from 'react';
import MKBox from 'components/MKBox';
import MKTypography from 'components/MKTypography';
import MKButton from 'components/MKButton';
import Container from '@mui/material/Container';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  handleGoHome = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    window.location.href = '/';
  };

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      const { error } = this.state;
      return (
        <MKBox
          minHeight="100vh"
          width="100%"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            p: 3,
          }}
        >
          <Container>
            <MKBox
              bgColor="white"
              borderRadius={4}
              p={6}
              textAlign="center"
              boxShadow="0 8px 32px rgba(0,0,0,0.2)"
            >
              <MKTypography variant="h1" color="error" mb={2}>
                ⚠️
              </MKTypography>
              <MKTypography variant="h3" mb={2} fontWeight="bold">
                Oops! Something went wrong
              </MKTypography>
              <MKTypography variant="body1" color="text" mb={4}>
                We're sorry for the inconvenience. An unexpected error occurred.
              </MKTypography>
              {process.env.NODE_ENV === 'development' && error && (
                <MKBox
                  bgColor="#f5f5f5"
                  borderRadius={2}
                  p={2}
                  mb={4}
                  textAlign="left"
                  sx={{ maxHeight: '200px', overflow: 'auto' }}
                >
                  <MKTypography variant="caption" component="pre" sx={{ fontSize: '12px' }}>
                    {error.toString()}
                  </MKTypography>
                </MKBox>
              )}
              <MKBox display="flex" gap={2} justifyContent="center" flexWrap="wrap">
                <MKButton
                  variant="gradient"
                  color="info"
                  onClick={this.handleGoHome}
                  sx={{ px: 4 }}
                >
                  Go to Homepage
                </MKButton>
                <MKButton
                  variant="outlined"
                  color="info"
                  onClick={this.handleReload}
                  sx={{ px: 4 }}
                >
                  Reload Page
                </MKButton>
              </MKBox>
            </MKBox>
          </Container>
        </MKBox>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
