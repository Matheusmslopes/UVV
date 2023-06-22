import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-evenly",
        padding: 20,
        backgroundColor: "#0D0D0D",
    },
    
    titulo: {
        fontSize: "calc(2rem + 2vw)",
        fontWeight: 200,
        color: "#EEF1F7",
        textAlign: 'center'
    },

    LoginView: {
        alignItems: 'center'
    },
    
    txt: {
        marginBottom: "calc(1rem + 1vw)",
        fontSize: "calc(1rem + 1vw)",
        fontWeight: 200,
        color: "#EEF1F7",
    },

    RegisterView: {
        textAlign: 'center'
    },

    txtR: {
        marginBottom: "calc(1rem + 1vw)",
        fontSize: "calc(1rem + 1vw)",
        fontWeight: 200,
        color: "#EEF1F7",
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
    
    signin: {
        padding: "calc(0.8rem + 0.4vw)",
        marginBottom: "calc(1rem + 1vw)",
        borderRadius: 50,
        textAlign: "center",
        fontSize: "calc(1rem + 1vw)",
        backgroundColor: "#088C7F",
        color: "#F2CB05",
    },
    
    signup: {
        textAlign: "center",
        fontSize: "calc(1rem + 1vw)",
        color: "#F2CB05",
    },
});

export default styles;