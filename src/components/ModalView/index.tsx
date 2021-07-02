import React, { ReactNode } from "react";
import { View, ModalProps, Modal} from "react-native";

// Styles
import { styles } from "./styles";

// Components
import { Background } from "../Background";

// Icons
import { Feather } from "@expo/vector-icons";
import { theme } from "../../global/styles/theme";


type Props = ModalProps & {
  children: ReactNode;
}
export function ModalView({children,...rest}: Props){

    return(
        <Modal
            transparent
            animationType="slide"
            {... rest}
        >
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <Background>
                        <View style={styles.bar}/>
                        {children}
                    </Background>
                </View>

            </View>

        </Modal>
    )
}