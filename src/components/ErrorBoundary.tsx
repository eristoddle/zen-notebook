import React from 'react';
import { Text, SafeAreaView, StyleSheet, View, TouchableOpacity } from 'react-native';

interface Props {
  resetState: () => void;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props | Readonly<Props>) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_error: Error): any {
    return { hasError: true };
  }

  componentDidCatch(error: Error, _info: React.ErrorInfo): void {
    console.log(error);
  }

  onPress = (): void => {
    const { resetState } = this.props;

    resetState();
    this.setState({ hasError: false });
  };

  render(): React.ReactNode {
    const { hasError } = this.state;
    const { children } = this.props;
    return hasError ? (
      <SafeAreaView style={styles.safeView}>
        <TouchableOpacity onPress={this.onPress}>
          <View style={styles.container}>
            <Text style={styles.primaryText}>Oops, something went wrong!</Text>
            <Text style={styles.secondaryText}>Tap to refresh and try again</Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    ) : (
      children
    );
  }
}

const styles = StyleSheet.create({
  safeView: {
    backgroundColor: '#EEEEEE',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    height: 120,
    width: 120,
  },
  primaryText: {
    color: '#666666',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 30,
    marginBottom: 20,
  },
  secondaryText: {
    color: '#666666',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ErrorBoundary;
