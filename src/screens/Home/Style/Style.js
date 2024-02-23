import { StyleSheet } from 'react-native';
import Colors from '../../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
  },
  listItem: {
    padding: 40,
  },
  mainCardView: {
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    borderRadius: 15,
    shadowColor: Colors.grey,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 14,
    marginTop: 6,
    marginBottom: 6,
    marginLeft: 16,
    marginRight: 16,
  },
  
});

export default styles;