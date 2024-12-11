import React from "react"
import {View, Text, StyleSheet} from 'react-native'

const Item = ({item}) => {
    return(
        <View style={styles.cardContainer}>
            <View style={styles.imgContainer}>
                <Image source={{url: `${item.image}`}} style={styles.img} resizeMode="cover"></Image>
            </View>
        <View style={styles.textContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.category}>{item.category}</Text>
            <Text style={styles.desc}>{item.description}</Text>
            <Text style={styles.price}>{item.price}</Text>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        width: "100%",
        height: 130,
        flexDirection: 'row',
        backgourndColor: 'white',
        borderRadius: 8,
        marginBottom: 16,
    }, 
    img: {
        width: 100,
        height: '90%',
        borderRadius: 8,
        marginTop: 5
    },
    textContainer: {
        paddingHorizontal: 10
    }
});
export default Item;