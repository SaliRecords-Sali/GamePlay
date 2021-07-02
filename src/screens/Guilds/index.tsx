import React from "react";
import { View, Text, FlatList} from "react-native";

// Styles
import { styles } from "./styles";

// Components
import { Guild, GuildProps } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";

type Props = {
    handleGuildSelect: (guild: GuildProps) => void;
}

export function Guilds({handleGuildSelect}: Props){
    const guilds = [
        {
            id: '1',
            name: 'Lendárius',
            icon: 'image.pgn',
            owner: true,
        },
        {
            id: '2',
            name: 'Lendárius',
            icon: 'image.pgn',
            owner: true,
        }, 
        {
            id: '3',
            name: 'Lendárius',
            icon: 'image.pgn',
            owner: true,
        },
        {
            id: '4',
            name: 'Lendárius',
            icon: 'image.pgn',
            owner: true,
        } 
    ];
    return(
        <View style={styles.container}>
            <FlatList
                data={guilds}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Guild 
                    data={item} 
                    onPress={()=> handleGuildSelect(item)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={()=><ListDivider/>}
                style={styles.guilds}
            />
        </View>
    )
}