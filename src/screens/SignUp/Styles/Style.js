import { StyleSheet } from 'react-native';
import COLORS from '../../../utils/colors';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: COLORS.primariColor,
    padding: 10,
    width: '100%',
    borderRadius: 5,
    marginVertical: 10,
  },
  checkbox: {
    marginRight: 10,
  },
});

export default styles;
