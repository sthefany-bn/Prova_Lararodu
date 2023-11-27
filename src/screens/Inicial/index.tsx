import React from "react";
import { ComponentButton } from "../../components"
import { styles } from "./styles"
import { View } from "react-native";
import { TabTypes } from "../../navigations/tab.navigation";

export function Inicial({ navigation }: TabTypes ) {
    return (
        <View style={styles.conteiner}>
            <ComponentButton title="JOGAR" onPressI={() => { navigation.navigate('Acelerometer') }} />
        </View>
    )
}