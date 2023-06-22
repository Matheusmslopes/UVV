import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0D0D0D",
        alignItems: 'center'
    },

    img: {
        height: 200,
        width: 200,
        borderRadius: 20,
        margin: 20
    },

    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 20,
        borderColor: "#088C7F",
        color: "#fff",
        width: 250
      },

      Btn: {
        backgroundColor: "#088C7F",
        color: '#F2CB05',
        width: 160,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        marginTop: 10,
    },

    txtBtn: {
        color: '#F2CB05',
        textAlign: 'center',
        fontSize: 20,
        padding: 5
    }
});

export default styles;