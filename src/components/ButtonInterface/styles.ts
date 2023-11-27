import {StyleSheet} from "react-native"
import {colors} from "../../styles/colors"

export const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.secundary,
        borderRadius: 5,
        fontWeight: "bold",
        fontSize: 18,
        padding: 10,
        margin: 10
    },
    text: {
    color: colors.white,
    padding:10, 
    fontSize: 18,
    textAlign: "center"
  },
})