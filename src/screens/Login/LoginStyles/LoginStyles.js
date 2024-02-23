// LoginScreenStyles.js
import { StyleSheet } from 'react-native';
import Colors from '../../../utils/colors';

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#178e92',
  },
  text: {
    fontSize: 30,
    color: '#FF0000',
    marginBottom: 100,
  },
  logo: {
    width: 150,
    height: 150,
    
    borderColor: Colors.primariColor,
    borderWidth: 10,
    backgroundColor: Colors.primariColor,
    borderRadius: 100,
    marginBottom: 30,
    paddingVertical: 20,
  },
  input: {
    width: 300,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    textAlign: 'center',
    fontSize: 20,
  }
});

export default styles;