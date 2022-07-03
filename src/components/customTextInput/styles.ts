import { StyleSheet } from 'react-native';
import { scale } from '~utils/Scale';

const styles = StyleSheet.create({
  container: {
    // borderBottomWidth: scale(1),
    // borderBottomColor: 'red',
    height: '100%',
  },
  titleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputStyle: {
    fontSize: scale(16),
    color: '#333',
    height: '100%',
  },
  title: {
    fontSize: scale(14),
    color: '#A8A8A8',
  },
  errorMessage: {
    fontSize: scale(12),
    marginLeft: scale(5),
    color: '#F44336',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default styles;
