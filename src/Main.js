import { React } from  'react';
import { Text, View, Image, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import bigIcon from './img/Logotype.png';

const Main = ({navigation}) => {
    return (
        <View style={Styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={Styles.main}>
                <Text style={Styles.headerText}>👋 CodeLinigo-ға қош келдіңіз!</Text>
                <Text style={Styles.headerTopText}>Прораммалау әлеміндегі сіздің жеке нұсқаулығыңыз.</Text>
            </View>
            <ScrollView>
            <View style={{backgroundColor: '#010011', top: 50}}>
                <View style={Styles.theCenter}>
                    <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Image source={bigIcon} style={{display: 'flex', width: 200, height: 200, justifyContent: 'center', alignItems: 'center'}}></Image>
                 </View>
                 <View>
                     <Text style={{color: '#CCC9DC', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>CodeLinigo-бұл жай ғана программа емес, бұл сіздің Код әлеміндегі жеке тәлімгеріңіз. Мұнда сіз әртүрлі бағдарламалау тілдері бойынша курстарды, интерактивті тапсырмаларды және т. б. таба аласыз!</Text>
                    </View>
                </View>
            </View>

            <View style={{ top: 150, width: '100%', height: '30%'}}>
                <View styl={{display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center',}}>
                    <Text style={{color: '#CCC9DC', fontSize: 14, justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>👇 Дәл қазір программалау жолыңызды бастаңыз!</Text>
                </View>
                <View style={{paddingTop: 15, display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity 
                        style={{backgroundColor: '#1B2A41', width: 250, borderRadius: 8, padding: 10}}
                        onPress={() => navigation.navigate('Register')}
                        >
                        <Text style={{color: '#CCC9DC', fontSize: 20, textAlign: 'center'}}>Тіркелу</Text>
                    </TouchableOpacity>
                    <View style={{padding: 10}}>
                        <Text style={{color: '#CCC9DC', fontSize: 20, justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>немесе</Text>
                    </View>
                    <TouchableOpacity 
                        style={{backgroundColor: '#1B2A41', width: 250, borderRadius: 8, padding: 10}}
                        onPress={() => navigation.navigate('Login')}
                    >
                        <Text style={{color: '#CCC9DC', fontSize: 20, justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>Кіру</Text>
                    </TouchableOpacity>
                </View>
                <View style={{display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center', paddingTop: 15}}>
                    <Text style={{color: '#CCC9DC', fontSize: 14, justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>CodeLinigo-ның барлық мүмкіндіктерін ашу үшін.</Text>
                </View>
            </View>
            </ScrollView>
        </View>
    );
}

const Styles = ({
    container : {
          display: 'flex',
          jusifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#010011',
          width: '100%',
          height: '100%',
          padding: 5,
     },
     main : {
        display: 'flex',
        height: 75,
        padding: 10,
        // backgroundColor: '#ffff',
     },
     headerText : {
        color: '#CCC9DC',
        fontSize: 23,
        textAlign: 'center',
        top: 10,
     },
     headerTopText : {
        color: '#CCC9DC',
        fontSize: 15,
        textAlign: 'center',
        top: 15,
     }
})

export default Main;