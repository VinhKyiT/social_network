import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { AppTheme } from '../configs/AppTheme';
import { getLoadingSelector } from '../redux/loading/selector';

function withLoading(WrappedComponent, actionTypes) {
  function HOC({ isLoading, ...props }) {
    return (
      <View style={styles.main}>
        <WrappedComponent {...props} />
        {isLoading && (
          <View style={styles.container}>
            <View style={[styles.loadingIndicator, styles.indicatorBg]}>
              <ActivityIndicator size="large" color={AppTheme.Colors.Primary} />
            </View>
          </View>
        )}
      </View>
    );
  }
  const mapStateToProps = state => ({
    isLoading: getLoadingSelector(state, actionTypes),
  });
  return connect(mapStateToProps, null)(HOC);
}
export default withLoading;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: 'center',
    width: '100%',
    height: '100%',
    opacity: 0.5,
    zIndex: 10,
  },
  loadingIndicator: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  indicatorBg: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
});
