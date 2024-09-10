import {useEffect, useState} from "react"
import {View, ScrollView, StyleSheet, ActivityIndicator} from "react-native"
import MahasiswaListItem from "@/components/MahasiswaListItem";

export default function HomeScreen() {
    const [loading, setLoading] = useState(true)
    const [dataMahasiswa, setData] = useState<MahasiswaRespons[]>([])
    const getMahasiswa = async () => {
        try {
            const response = await fetch("https://randomuser.me/api/?results=20")
            const json = await response.json()
            setData(json["results"])
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }

    }

    useEffect(() => {
        getMahasiswa()
    }, [])

    return (
        <ScrollView>
            <View style={styles.container}>
                {
                    loading
                        ? <ActivityIndicator/>
                        : dataMahasiswa.map((item) => (
                            <MahasiswaListItem
                                nama={item.name.first}
                                phone={item.phone}
                                email={item.email}
                                foto={item.picture.thumbnail}
                            />
                        ))
                }
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 250,
    }
})
