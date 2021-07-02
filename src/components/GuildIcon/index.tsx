import React from "react";
import { Image } from "react-native";
import { styles } from "./styles";

export function GuildIcon() {
    const uri = 'https://logosmarcas.net/wp-content/uploads/2020/12/Discord-Logo.png';
    return(
        <Image 
        source={{uri: uri }}
        style={styles.imag}
        resizeMode='cover'
        />  
    )
}