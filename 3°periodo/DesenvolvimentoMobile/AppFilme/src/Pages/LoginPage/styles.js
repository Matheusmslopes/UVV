import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0D0D0D",
        justifyContent: 'center',
        alignItems: 'center'
    },

    img: {
        height: 200,
        width: 200,
        borderRadius: 20,
    },

    txt: {
        color:"#088C7F",
        fontSize: 40,
        marginTop: 15
    },

    LoginBox: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },

    link: {
        backgroundColor: "#088C7F",
        color: '#F2CB05',
        width: 160,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        marginBottom: 10,
        /*paddingVertical: 12,
        paddingHorizontal: 32,*/
        textAlign: 'center'
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
      }
});

export default styles;
