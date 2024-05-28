import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const FooterNavbar = () => {
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.footerContainer}>
        <Image 
          style={styles.footerBackground} 
          source={require('../../../assets/images/footerNavbar.png')} 
        />
        
        <TouchableOpacity style={styles.logoContainer} onPress={() => navigation.navigate('Login')}>
          <Image 
            style={styles.footerLogo} 
            source={require('../../../assets/images/footerlogo.png')} 
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.logoContainer}  onPress={() => navigation.navigate('Faqs')}>
          <Image 
            style={styles.PersonLogo} 
            source={require('../../../assets/images/Person.png')} 
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.ServiceContainer} onPress={() => navigation.navigate('RealEstate')}>
          <Image 
            style={styles.ServiceLogo} 
            source={require('../../../assets/images/Service.png')} 
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.HomeContainer}  onPress={() => navigation.navigate('Services')}>
          <Image 
            style={styles.ServiceLogo} 
            source={require('../../../assets/images/Home.png')} 
          />
        </TouchableOpacity>

        {/* <TouchableOpacity style={styles.playbuttonContainer} onPress={() => navigation.navigate('PlayScreen')}>
          <Image 
            style={styles.ServiceLogo} 
            source={require('../../../assets/images/playbutton.png')} 
          />
        </TouchableOpacity> */}
      </View>
    </View>
  )
}

export default FooterNavbar
   
const styles = StyleSheet.create({
    container: {
       alignItems:'flex-end'
    },
    footerContainer:{
        width:'100%', 
        height:'100%',
        justifyContent:'center', 
        alignItems:'center',
        position:'relative',
        marginTop:60,
        marginBottom:9
    },
    logoContainer:{
        position:'absolute',
        right:30,
    },
    PersonLogo:{
        position:'absolute',
        right:90, 
        bottom:-18
    },
    ServiceContainer:{
        position:'absolute',
        left:100,
    },
    HomeContainer:{
        position:'absolute',
        left:20,
    },
    playbuttonContainer:{
        position:'absolute',
        left:157,
        top:295
    }
})
