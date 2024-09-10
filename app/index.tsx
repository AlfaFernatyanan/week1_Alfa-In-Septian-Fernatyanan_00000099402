import MahasiswaListItem from "@/components/MahasiswaListItem"
import { useEffect, useState } from "react"
import { Text, View, StyleSheet } from "react-native"



export default function HomeScreen() {
    const [loading, setLoading] = useState(true)
    const [dataMahasiswa, setData] = useState<MahasiswaRespons[]>([])
    const getMahasiswa = async () => {
        try {
            const respon = await fetch("https://randomuser.me/api/?results=20")
            const json = await respon.json()
            setData(json["results"])

        } catch (error) {
            console.log(error)

        } finally {
            setLoading(false)
        }

    } 

    useEffect(()=>{
        getMahasiswa()
    }, [])

    return(
        <View style={styles.container}>
            {
                dataMahasiswa.map((item) => (
                 <MahasiswaListItem id={item.id} nama={item.name.first} nim={item.phone} />
                ))
            }
          

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

