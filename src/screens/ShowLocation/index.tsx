import React, { useEffect, useState } from "react"
import { View, Text } from "react-native"
import { styles } from "./styles"
import MapView, { Polyline, Marker, Region } from "react-native-maps"
import { useRoute } from "@react-navigation/native"
import { ICoords } from "../../navigations/tab.navigation"
import { colors } from "../../styles/colors"
import { Entypo, EvilIcons, Ionicons } from "@expo/vector-icons"

export function ShowLocation() {
    const route = useRoute()
    const data = route.params as ICoords
    const [error, setError] = useState<string | null>(null)
    const [origem, setOrigem] = useState<Region | null>(null)
    const [destino, setDestino] = useState<Region | null>(null)
    useEffect(() => {
        if (data && data.origemLatitude && data.origemLongitude) {
            setOrigem({
                latitude: data.origemLatitude,
                longitude: data.origemLongitude,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005
            })
        } else {
            setError('Sem Origem')
        }
        if (data && data.destinoLatitude && data.destinoLongitude) {
            setDestino({
                latitude: data.destinoLatitude,
                longitude: data.destinoLongitude,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005
            })
        } else {
            setError('Sem Destino')
        }
    }, [data])

    return (
        <View style={styles.container}>
            {origem && destino ?
                <MapView
                    showsUserLocation={true}
                    style={styles.map}
                    initialRegion={origem}
                >
                    <Marker coordinate={origem}>
                        <Ionicons name="location-sharp" size={40} color="black" />
                    </Marker>
                    <Marker coordinate={destino}>
                        <Ionicons name="location-sharp" size={40} color="black" />
                    </Marker>
                    <Polyline
                        coordinates={[
                            { latitude: origem.latitude, longitude: origem.longitude },
                            { latitude: destino.latitude, longitude: destino.longitude }
                        ]}
                        strokeColor={colors.black}
                        strokeWidth={5}
                    />
                </MapView>
                : <Text style={styles.text}>{error}</Text>
            }
        </View>
    )
}