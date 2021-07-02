import React from "react";
import { TextInput, TextInputProps } from "react-native";

// Style
import {styles} from "./styles";

export function SmallInput({...rest}: TextInputProps){
    return(
        <TextInput 
            style={styles.container }
            keyboardType='numeric'
            {...rest}
        />
    )
}