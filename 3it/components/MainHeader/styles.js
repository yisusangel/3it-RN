import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#facd0b',
        flexDirection: 'row',
        alignItems: 'center'
    },
    backCont: {
        width: '20%',
        alignItems: 'flex-start',
    },
    menuCont: {
        width: '20%',
        alignItems: 'flex-end',
    },
    menuButton: {
        paddingHorizontal: 10
    },
    logoCont: {
        width: '60%',
        marginVertical: 5,
        alignItems: 'center'
    },
    logo: {
        width: 65,
        height: 50,
    },
});

export default styles;