import React from "react";
import { View, Text } from "react-native";
import { Avatar } from '../Avatar'
import { styles } from "./styles";

export function Profile() {
    return(
        <View style={styles.container}>

            <Avatar urlImage="https://static.wixstatic.com/media/bea14f_a7a19a6648134ef3ba71ac0342542c05~mv2.png/v1/fill/w_1198,h_901,al_c/Sali.webp"/>
            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Olá,
                    </Text>

                    <Text style={styles.username}>
                        Sali
                    </Text>
                </View>
                <Text style={styles.message}>
                Hoje é dia de vitória
                </Text>
            </View>
        </View>
        
    )
}