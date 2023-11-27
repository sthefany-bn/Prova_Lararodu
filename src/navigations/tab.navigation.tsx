import React from "react"
import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs"
import { ScreenAcelerometro, ScreenInicial } from "../screens"
import { colors } from "../styles/colors"
import { Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons';

type TabParamList = {
    Inicial: undefined
    Acelerometer: undefined
}
type TabScreenNavigation = BottomTabNavigationProp<TabParamList, 'Inicial'>
export type TabTypes = {
    navigation: TabScreenNavigation
}
export function TabNavigation() {
    const Tab = createBottomTabNavigator<TabParamList>();
    return (
        <Tab.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: colors.primary
                },
                headerTintColor: colors.white,
                tabBarActiveBackgroundColor: colors.primary,
                tabBarActiveTintColor: colors.white,
                tabBarInactiveTintColor: colors.black
            }}
        >
            <Tab.Screen name="Inicial" component={ScreenInicial}
                options={{
                    tabBarIcon: () => (
                        <Ionicons name='person' color={colors.white} size={24} />
                    ),
                }}
            />

            <Tab.Screen name='Acelerometer' component={ScreenAcelerometro}
                options={{
                    tabBarIcon: () => (<AntDesign name="car" color={colors.white} size={24} />)
                }}
            />
        </Tab.Navigator>
    );
}