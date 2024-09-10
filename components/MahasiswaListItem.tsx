import { View, Text } from "react-native";



export default function MahasiswaListItem(props:Mahasiswa){
    return(
        <View>
            <Text>{props.nama}</Text>
            <Text>{props.nim}</Text>
        </View>
    )
}