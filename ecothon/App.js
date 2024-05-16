import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput, Pressable, Switch, Alert } from 'react-native';
import { SafeAreaView, ScrollView, TouchableOpacity, useColorScheme, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppLoading from 'expo-app-loading';
import { useFonts, Comfortaa_300Light, Comfortaa_400Regular, Comfortaa_500Medium, Comfortaa_600SemiBold, Comfortaa_700Bold, } from '@expo-google-fonts/comfortaa';
import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Camera from './Camera';
import Points from './Points';
import ChatBot from './Chatbot';
import Toggle from "./Toggle";
import earth from "./earth"
import leaderboard from "./leaderboard"
import news from "./news"
import EcoReminder from "./EcoReminder"
import UploadImages from "./UploadImages"

/* starting page -> this is what the user will first see when they download the app. they can sign up or log in */
function StartingPage({ navigation }){
  return (
    <View style={styles.container}>
      
      <Text style={styles.name}>Score Green</Text>

      <Image style={styles.logo} source={require('./assets/logo.png')} />

          <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login Page')}>
          <Text style={styles.loginButtonText}>LOG IN</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.signUpButton} onPress={() => navigation.navigate('Sign Up Page')}>
          <Text style={styles.signUpButtonText}>SIGN UP</Text>
          </TouchableOpacity>


      <StatusBar style="auto" />
    </View>
  );
}

/* login page -> the user will enter their email and password to login. this is only required once unless the user logs out of their account */
function LoginPage({ navigation }) {
  return (
    <View style={styles.container2}>

      <Text style ={styles.loginTitle}>Log In</Text>
      <Image style={styles.logo} source={require('./assets/login.png')} />

      <TextInput style ={styles.loginInput} underlineColorAndroid="transparent" placeholder='Email'/>
      <TextInput style ={styles.loginInput} underlineColorAndroid="transparent" placeholder='Password'/>

      <TouchableOpacity style={styles.loginButton2} onPress={() => navigation.navigate('Home Page')}>
      <Text style={styles.loginButtonText2}>LOG IN</Text>
      </TouchableOpacity>
    </View>
  );
}

/* signup page -> the user will enter their email and password to sign up */
function SignUpPage({navigation}) {
  return (
    <View style={styles.container2}>
      <Text style ={styles.loginTitle}>Sign Up</Text>

      <TextInput style ={styles.loginInput} underlineColorAndroid="transparent" placeholder='Email'/>
      <TextInput style ={styles.loginInput} underlineColorAndroid="transparent" placeholder='Password'/>

      <TouchableOpacity style={styles.loginButton2} onPress={() => navigation.navigate('Enter Your Name Page')}>
      <Text style={styles.loginButtonText2}>SIGN UP</Text>
      </TouchableOpacity>
    </View>
  );
}

/* enter your name page -> after signing up, the user enter's their name for personalization in the app */
function EnterYourNamePage({navigation}) {
  return (
    <View style={styles.container2}>
      <Text style ={styles.loginTitle}>Enter Your Name</Text>

      <TextInput style ={styles.loginInput} underlineColorAndroid="transparent" placeholder='Enter your name'/>

      <TouchableOpacity style={styles.loginButton2} onPress={() => navigation.navigate('Home Page')}>
      <Text style={styles.loginButtonText2}>LET'S GO!</Text>
      </TouchableOpacity>
    </View>
  );
}

function HomePage({navigation}) {
  return (
    <View style={styles.container3}>
      
      <Image style={styles.miniLogo} source={require('./assets/logo.png')} />
      <Text style={styles.userName}>Hi Prakriti</Text>
      
      <Text style={styles.text1}>SCAN THE QR CODE. GET YOUR DISCOUNT!</Text>
      <Image style={styles.background} source={require('./assets/environment.jpg')} />

      <TouchableOpacity style={styles.cameraButton} onPress={() => navigation.navigate('Camera')}>
      <Entypo name="camera" size={50} color="white" />
      </TouchableOpacity>

      <View style={styles.navContainer}>
        <View style={styles.navBar}>


        

          <TouchableOpacity style={styles.iconBehave} onPress={() => navigation.navigate('Donation Page')}>
          <AntDesign name="heart" size={24} color="white" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconBehave} onPress={() => navigation.navigate('Points')}>
          <AntDesign name="staro" size={24} color="white" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconBehave} onPress={() => navigation.navigate('Home Page')}>
          <AntDesign name="home" size={24} color="white"/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconBehave} onPress={() => navigation.navigate('Profile Page')}>
          <AntDesign name="user" size={24} color="white" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconBehave} onPress={() => navigation.navigate('Our Article')}>
          <AntDesign name="earth" size={24} color="white" />
          </TouchableOpacity>

     

        </View>
      </View>
    </View>
  );
}

// function ChatbotPage({ navigation }) {
//   return (
//     <View style={styles.container3}>
//       <Image style={styles.miniLogo} source={require('./assets/logo.png')} />
//       <Text style={styles.userName}>Hi Hannah,</Text>
//       <Text style={styles.text1}>ASK ME ANYTHING ABOUT ENVIRONMENT!</Text>

//       {/* Render the Chatbot component */}
//       <Chatbot />

//       <View style={styles.navContainer}>
//         <View style={styles.navBar}>
//           <TouchableOpacity style={styles.iconBehave} onPress={() => navigation.navigate('Points')}>
//             <AntDesign name="staro" size={24} color="white" />
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.iconBehave} onPress={() => navigation.navigate('Home Page')}>
//             <AntDesign name="home" size={24} color="white"/>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.iconBehave} onPress={() => navigation.navigate('Profile Page')}>
//             <AntDesign name="user" size={24} color="white" />
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// }




// function ProfilePage({navigation}) {
//   return (
//     <View style={styles.container3}>

//       <Image style={styles.profile} source={require('./assets/hannah.jpeg')} />
//       <Text style={styles.userName1}>HANNAH</Text>
//       <Ionicons style={styles.location} name="location-outline" size={30} color="black" />
//       <Text style={styles.text4}>OAKVILLE, ON, CANADA</Text>

//       <TouchableOpacity style={styles.editProfileButton} onPress={() => navigation.navigate('Sign Up Page')}>
//       <Text style={styles.loginButtonText2}>EDIT PROFILE</Text>
//       </TouchableOpacity>
      
           

//       {/* <Image style={styles.reminders} source={require('./assets/reminders.png')} /> */}

//       <View style={styles.br}></View>

//       <View style={styles.navContainer}>
//         <View style={styles.navBar}>
//           <TouchableOpacity style={styles.iconBehave} onPress={() => navigation.navigate('Points')}>
//           <AntDesign name="staro" size={24} color="white" />
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.iconBehave} onPress={() => navigation.navigate('Home Page')}>
//           <AntDesign name="home" size={24} color="white"/>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.iconBehave} onPress={() => navigation.navigate('Profile Page')}>
//           <AntDesign name="user" size={24} color="white" />
//           </TouchableOpacity>
          
//           <TouchableOpacity style={styles.iconBehave} onPress={() => navigation.navigate('Chatbot page')}>
//           <AntDesign name="chatbot" size={24} color="white"/>
//           </TouchableOpacity>

//         </View>
//       </View>
//     </View>
//   );
// }
function ProfilePage({navigation}) {
  return (
    <View style={styles.container3}>

      <Image style={styles.profile} source={require('./assets/hannah.jpeg')} />
      <Text style={styles.userName1}>Prakriti</Text>
      <Ionicons style={styles.location} name="location-outline" size={30} color="black" />
      <Text style={styles.text4}>28 Kilo, Dhulikhel</Text>

      <TouchableOpacity style={styles.editProfileButton} onPress={() => navigation.navigate('Sign Up Page')}>
        <Text style={styles.loginButtonText2}>EDIT PROFILE</Text>
      </TouchableOpacity>
      
      {/* <TouchableOpacity
        style={styles.ToggleButton}
        onPress={() => navigation.navigate("Toggle")}
      >
        <Entypo name="Toggle" size={50} color="white" />
      </TouchableOpacity> */}
    <EcoReminder/>

      <View style={styles.br}></View>

      <View style={styles.navContainer}>
        <View style={styles.navBar}>
          <TouchableOpacity style={styles.iconBehave} onPress={() => navigation.navigate('Points')}>
            <AntDesign name="staro" size={24} color="white" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconBehave} onPress={() => navigation.navigate('Home Page')}>
            <AntDesign name="home" size={24} color="white"/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconBehave} onPress={() => navigation.navigate('Leaderboard')}>
            <AntDesign name="Trophy" size={24} color="white" />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.iconBehave} onPress={() => navigation.navigate('Chatbot page')}>
            <AntDesign name="wechat" size={24} color="white"/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}


const Stack = createNativeStackNavigator();

export default function App() {

  let [fontsLoaded, error] = useFonts ({
    Comfortaa_400Regular,
  });

  if (!fontsLoaded){
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Starting Page" component={StartingPage} />
        <Stack.Screen name="Login Page" component={LoginPage} />
        <Stack.Screen name="Sign Up Page" component={SignUpPage} />
        <Stack.Screen name="Toggle" component={Toggle} />
        <Stack.Screen name="Enter Your Name Page" component={EnterYourNamePage} />
        <Stack.Screen name="Home Page" component={HomePage} />
        <Stack.Screen name="Profile Page" component={ProfilePage} />
        <Stack.Screen name="Camera" component={Camera} />
        <Stack.Screen name="Points" component={Points} />
        <Stack.Screen name="Chatbot page" component={ChatBot} />
        <Stack.Screen name="Our Article" component={earth} />
        <Stack.Screen name="Donation Page" component={news} />
        <Stack.Screen name="EcoReminder" component={EcoReminder} />
        <Stack.Screen name="Leaderboard" component={leaderboard} />
        <Stack.Screen name="UploadImages" component={UploadImages} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C3E2C2",
    alignItems: "center",
    justifyContent: "center",
  },

  /* STARTING PAGE ---------------------------------*/
  name: {
    fontSize: 70,
    fontFamily: "Libre Baskerville",
    marginBottom: 5,
  },

  logo: {
    width: 300,
    height: 300,
    marginBottom: 150,
  },

  signUpButton: {
    width: "42%",
    borderRadius: 7,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#5F6F52",
    borderWidth: 2,
    borderColor: "white",
    position: "absolute",
    right: 25,
    top: 570,
    marginTop: 50,
  },

  signUpButtonText: {
    fontWeight: "bold",
    color: "white",
  },


  loginButton: {
    width: "42%",
    borderRadius: 7,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#5F6F52",
    borderWidth: 2,
    borderColor: "white",
    position: "absolute",
    left: 25,
    top: 570,
    marginTop: 50,
  },

  loginButtonText: {
    fontWeight: "bold",
    color: "white",
  },

  /* LOGIN PAGE -----------------------------*/
  container2: {
    flex: 1,
    backgroundColor: '#C3E2C2',
    alignItems: 'center',
    justifyContent: 'center',
  },

  loginTitle: {
    fontSize: 60,
    // fontFamily: "Libre Baskerville",
    marginBottom: 5,
  },

   loginInput: {
  //   width: "80%",
  //   backgroundColor: "white",
  //   borderColor: "black",
     marginTop: 10,
},

  loginButton2: {
    width: "80%",
    marginTop: 10,
    borderRadius: 7,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    //backgroundColor: "#80A87D",
    marginBottom: 5,
    marginTop:5,
  
    
    
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#5F6F52",
    borderWidth: 2,
    borderColor: "white",
    //position: "absolute",
    // left: 25,
    // top: 570,
  },

  // loginButtonText2: {
  //   fontWeight: "bold",
  //   color: 'white',
  // },

  /* HOME PAGE ---------------------------*/
  container3: {
    flex: 1,
    backgroundColor: '#C3E2C2',
    alignItems: 'center',
    justifyContent: 'center',
  },

  navContainer: {
    position: 'absolute',
    alignItems: 'center',
    backgroundColor: '#C3E2C2',
    bottom: 0,
  },

  navBar: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '100%',
    justifyContent: 'space-evenly',
    borderTopWidth: 0.5,
    borderTopColor: '#C3E2C2',
    paddingTop: 7, 
    paddingBottom: 25, 
  },

  iconBehave: {
    backgroundColor: '#80A87D',
    borderRadius: 20,
    padding: 8,
  },

  cameraButton: {
    backgroundColor: '#80A87D',
    borderRadius: 200,
    padding: 20,
    bottom: 80,
  },

  miniLogo: {
    width: 40,
    height: 60,
    bottom: 80,
  },

  userName: {
    fontSize: 35,
    right: 83,
    bottom: 65,
    fontWeight: 'bold',
    color: '#80A87D',
    fontFamily: 'Comfortaa_400Regular',
  },

  text1: {
    right: 34,
    fontSize: 15,
    fontWeight: "bold",
    bottom: 50,
  },

  background: {
    width: '89%',
    bottom: 30,
  },

  /* PROFILE PAGE ---------------------------*/
  userName1: {
    fontSize: 30,
    marginTop: 10,
    fontWeight: 'bold',
    color: '#80A87D',
    fontFamily: 'Comfortaa_400Regular',
  },

  profile: {
    borderRadius: 100,
    width: 120,
    height: 120,
    bottom: 20,
  },

  editProfileButton: {
    width: "80%",
    marginTop: 20,
    borderRadius: 7,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#80A87D",
    bottom: 60,
  },

  text4: {
    fontSize: 15,
    fontWeight: "bold",
    bottom: 55,
  },

  location: {
    paddingTop: 10,
    paddingBottom: 55,
  },

  reminders: {
    width: 300,
    height: 200,
  },

  br: {
    height: 80,
  },


   /* POINTS PAGE ---------------------------*/
   banner: {
    flexDirection: 'row',
    backgroundColor: "#80A87D",
    width: '100%',
    height: '22%',
    justifyContent: 'space-evenly',
    bottom: 50,
   },

   point: {
    fontSize: 35,
    color: 'white',
    fontFamily: 'Comfortaa_400Regular',
    top: 65,
  },

  miniLogo2: {
    width: 40,
    height: 60,
    top: 20,
    left: 170,
  },

  text2: {
    fontSize: 15,
    color: 'white',
    top: 110,
    right: 75,
  },

  text3: {
    fontSize: 70,
    color: "#80A87D",
    bottom: 35,
    fontWeight: "bold"
  },

  box: {
    backgroundColor: 'white',
    width: 321,
    height: 70,
    borderRadius: 10,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,

    elevation: 1,
  },
  
  elevation: {
    elevation: 1,
    shadowColor: '#171717',
  },

  text5:{
    color: "#80A87D", 
    fontWeight:"bold",
    fontSize: 20,
    paddingTop: 10,
    alignSelf: 'center',
  },

  text6:{
    color: "black", 
    fontSize: 20,
    paddingBottom: 10,
    alignSelf: 'center',
  },

});
