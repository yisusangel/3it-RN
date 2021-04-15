import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: '#01788F',
  },
  card: {
    borderRadius: 6,
    margin: '2%',
    maxHeight: '98%',
  },
  title: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 5
  },
  modalStyle: {
    backgroundColor: 'white',
    borderRadius: 6,
    padding: 20,
    margin: 10,
  },
  frame: {
    width: '75%',
    height: '50%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
},
});

  export default styles;