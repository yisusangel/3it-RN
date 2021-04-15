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
  detailCont: {
    flex: 1,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#aaa',
    padding: 10,
    flexDirection: 'row',
  },
  detailText: {
    width: '50%',
    fontSize: 16
  }
});

  export default styles;