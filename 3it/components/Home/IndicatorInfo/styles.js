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
    fontSize: 24,
    fontWeight: 'bold',
    color: '#425ba6',
    alignSelf: 'center',
    margin: 10
  },
  infoCont: {
    flexDirection: 'row',
    marginVertical: 4
  },
  infoTitle: {
    fontSize: 16,
    width: '50%'
  },
  infoValue: {
    fontSize: 16,
    color: '#425ba6',
    width: '50%'
  },
});

  export default styles;