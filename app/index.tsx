import { Text, View, StyleSheet } from "react-native";

type Mahasiswa = {
    id : number,
    nama : string,
    nim : string,
}

const dummyData:Mahasiswa[] = [
    {
        id: 1,
        nama: "Alfa In Septian Fernatjanan",
        nim: "00000099402",
    },
    {
        id: 2,
        nama: "Alfa 2",
        nim: "00000099402",
    },
    {
        id: 3,
        nama: "Alfa 3",
        nim: "00000099402",
    },
    {
        id: 4,
        nama: "Alfa 4",
        nim: "00000099402",
    },
    {
        id: 5,
        nama: "Alfa 5",
        nim: "00000099402",
    },
]

export default function HomeScreen() {
    return (
        <View  style={styles.container}>
            {
                dummyData.map((item) => (
                 <MahasiswaListItem id={item.id} nama={item.nama} nim={item.nim}/>
                ))
            }
         
        </View>
    )

}

function MahasiswaListItem(props:Mahasiswa){
    return(
        <View key={props.id}>
            <Text>{props.nama}</Text>
            <Text>{props.nim}</Text>
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

