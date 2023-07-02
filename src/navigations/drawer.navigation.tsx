import { createDrawerNavigator, DrawerNavigationProp } from "@react-navigation/drawer"
import { ScreenLocation, ScreenShowLocation} from "../screens"
import { ICoords } from "./tab.navigation"
import { Entypo, FontAwesome5 } from "@expo/vector-icons"
import { colors } from "../styles/colors"

type DrawerParam = {
    Input: undefined
    Show: undefined | ICoords
}
type DrawerScreenNavigation = DrawerNavigationProp<DrawerParam, 'Input'>
export type DrawerTypes = {
    navigation: DrawerScreenNavigation
}
export function DrawerNavigation() {
    const Drawer = createDrawerNavigator<DrawerParam>()
    return (
        <Drawer.Navigator screenOptions={{
            drawerActiveBackgroundColor: colors.secundary,
            drawerActiveTintColor: colors.white,
            headerStyle: {
                backgroundColor: colors.primary
            },
            headerTintColor: colors.white,
            drawerInactiveBackgroundColor: colors.primary,
            drawerInactiveTintColor: colors.white,
            drawerStyle: {
                backgroundColor: colors.primary
            }
        }}>
            <Drawer.Screen name="Input" component={ScreenLocation} 
                options={{
                    drawerLabel: "Entrada",
                    headerTitle: "Entrada de Dados",
                    drawerIcon: () => (
                        <FontAwesome5 name="search-location" size={24} color={colors.white}/>
                    )
                }}
            />
            <Drawer.Screen name="Show" component={ScreenShowLocation} 
                options={{
                    drawerLabel: "Mapa",
                    headerTitle: "Posiciona Mapa",
                    drawerIcon: () => (
                        <Entypo name="location-pin" size={24} color={colors.white}/>
                    )
                }}
            />
        </Drawer.Navigator>
    )
}