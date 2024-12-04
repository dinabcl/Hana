import { Button } from "react-native-web";
import { View, Text, StyleSheet, Button } from 'react-native'; 
import Icon from "../Icons2";


const About = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Swiper autoplay activeDotColor="#22d4ff" autoplayTimeout={5}>
         
            <View style={styles.item}>
                <Image source={require('../assets/icon.png')} style={styles.imgItem} resizeMode='cover'></Image>
            </View>
            <Text>Welcome to About Screen!</Text>


            <Button title="Go to Home Screen" onPress={()=> navigation.navigate('Home')}></Button>


            <Text>Drawer Navigation Button Functionality</Text>
            
            <Button title="Open Drawer" onPress={()=> navigation.openDrawer()}></Button>
       </Swiper> 
       <View style={styles.iconsContainer}>
            <Icon name='matematik' iconText="Math"> </Icon>
            <Icon name='gjuheAngleze' iconText="English"> </Icon>
            <Icon name='muzik' iconText="Music"> </Icon>
       </View>
       <View style={styles.iconsContainer}>
            <Icon name="gjuhGermane" iconText="German"></Icon>
            <Icon name="fizike" iconText="Physics"></Icon>
            <Icon name="gjuheShqipe" iconText="Albanian"></Icon>
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


export default About;