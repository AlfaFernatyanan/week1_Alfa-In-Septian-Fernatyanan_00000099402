import { Text, View, StyleSheet} from "react-native";


const dummyData = {
    nama : "Alfa In Septian Fernatjanan",
    nim : "00000099402", 
    
}

export default function HomeScreen(){
    return(
        <View style={styles.container}>
            <Text>{dummyData.nama}</Text>
            <Text>{dummyData.nim}</Text>
        </View>
    )
    
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        margin: 20,
    }
})