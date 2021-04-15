import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    menuItems: {
        paddingTop: 25,
        paddingBottom: 10,
    },
    divisor: {
        borderTopWidth: 3,
        borderTopColor: '#dededf',
        marginBottom: 20
    },
    menuItemCont: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        paddingHorizontal: 25,
    },
    menuItemText: {
        color: 'black',
        marginLeft: 15,
        fontSize: 17,
        flex: 1,
        flexWrap: 'wrap',
    },
    userText: {
        fontSize: 17,
        marginBottom: 20,
        paddingHorizontal: 25,
        fontWeight: 'bold'
    }
});

  export default styles;