import React from "react";
import { View, Text, ImageBackground, FlatList} from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

// Style
import { styles } from "./styles";

// Icons
import { Fontisto } from "@expo/vector-icons";

// Components
import { Background } from "../../components/Background";
import { ListHeader } from "../../components/ListHeader";
import { Member } from "../../components/Member";
import { ListDivider } from "../../components/ListDivider";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Header } from "../../components/Header"
import { theme } from "../../global/styles/theme";

// Import
import BannerImg from "../../assets/banner.png";

export function AppointmentDetails() {
    const members = [
        {
            id: '1',
            username: 'Sali',
            avatar_url: 'https://static.wixstatic.com/media/bea14f_a7a19a6648134ef3ba71ac0342542c05~mv2.png/v1/fill/w_1198,h_901,al_c/Sali.webp',
            status: 'online',
        },
        {
            id: '2',
            username: 'Rodrigo',
            avatar_url: 'https://static.wixstatic.com/media/bea14f_a7a19a6648134ef3ba71ac0342542c05~mv2.png/v1/fill/w_1198,h_901,al_c/Sali.webp',
            status: 'offline',
        },
        {
            id: '3',
            username: 'Fernando',
            avatar_url: 'https://static.wixstatic.com/media/bea14f_a7a19a6648134ef3ba71ac0342542c05~mv2.png/v1/fill/w_1198,h_901,al_c/Sali.webp',
            status: 'online',
        }
    ]
    return(
        <Background>
            <Header
                title="Detalhes"
                action={
                    <BorderlessButton>
                        <Fontisto name="share" size={24} color={theme.colors.primary} />
                    </BorderlessButton>
                }
            />
            <ImageBackground 
                source={BannerImg}
                style={styles.banner}
            >
                <View style={styles.bannerContent}>
                    <Text style={styles.title}>
                        Lendários
                    </Text>
                    <Text style={styles.subtitle}> 
                    É hoje que vamos chegar ao challenger sem perder uma partida da md10
                    </Text>
                </View>
            </ImageBackground>
            <ListHeader
            title="Jogadores"
            subtitle="Total 3"
            />
            <FlatList 
                data={members}
                keyExtractor={item => item.id}
                renderItem={({item})=>(
                    <Member data={item} />
                )}
                style={styles.members}
                ItemSeparatorComponent={()=><ListDivider/>}
            />
            <View style={styles.footer}>
                <ButtonIcon title="Entrar na partida" />
            </View>
        </Background>
    )    
}