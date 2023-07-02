import {StyleSheet} from "react-native"
import {colors} from "../../styles/colors"

export const styles = StyleSheet.create({
    conteiner: {
       flex: 1,
       flexDirection: "column",
       justifyContent: "space-around"
    },
    buttonText: {
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center",
        color: colors.white
    }
})