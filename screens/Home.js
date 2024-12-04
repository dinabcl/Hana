import { Button } from "react-native-web";
import { View, Text, StyleSheet, Button } from 'react-native'; 
import Icon from "../Icon";


const Home = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Swiper autoplay activeDotColor="#22d4ff" autoplayTimeout={5}>
         
            <View style={styles.item}>
                <Image source={require('../assets/icon.png')} style={styles.imgItem} resizeMode='cover'></Image>
            </View>
            <Text>Welcome to Home Screen!</Text>


            <Button title="Go to About Screen" onPress={()=> navigation.navigate('About')}></Button>


            <Text>Drawer Navigation Button Functionality</Text>
            
            <Button title="Open Drawer" onPress={()=> navigation.openDrawer()}></Button>
       </Swiper> 
       <View style={styles.iconsContainer}>
            <Icon name='cellphone-iPhone' iconText="iPhone"> </Icon>
            <Icon name='android' iconText="Samsung"> </Icon>
            <Icon name='llaptop' iconText="Laptop Lenovo"> </Icon>
       </View>
       <View style={styles.iconsContainer}>
            <Icon name="tablet" iconText="Tablet"></Icon>
            <Icon name="mouse" iconText="Mouse"></Icon>
            <Icon name="keyboard-outline" iconText="Keyboard"></Icon>
       </View>
       </View>
    );
}


const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        justifyContent: 'center',
    },
    sliderContainer: {
        width: '90%',
        height: 200,
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 10,
        borderRadius: 8,
    },
    imgItem: {
        width: '100%',
        height: '100%',
        borderRadius: 8
    },
    item: {
        flex: 1,
        justifyContent: 'center'
    }, 
    iconsContainer : {
        width: '90%',
        alignSelf: 'center',
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});


export default Home;