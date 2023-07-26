import { View, Text, StyleSheet } from "react-native";

export default function Memories(){
    return(
        <View style={styles.view}>
            <Text>Memories</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },gray50:{
        color:'#eaeaea'
      },
      gray100:{
        color:'#bebebf'
      },
})