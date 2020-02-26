import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';


const weatherOptions = {
    Haze: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0","#D39D38"],
        title:"Haze",
        subtitle:"just Don't go outside"
    },
    Clouds: {
        iconName: "cloud",
        gradient: ["#4DA0B0","#D39D38"],
        title:"cloudy",
        subtitle:"It's depressing"
    },
    Thunderstorm:{
        iconName: "weather-lightning-rainy",
        gradient: ["#1F1C2C","#928DAB"],
        title:"Thunderstorm",
        subtitle:"make sure close the window"
    },
    Drizzle:{
        iconName: "weather-rainy",
        gradient: ["#4CB8C4","#3CD3AD"],
        title:"Drizzle",
        subtitle:"take your umbrella"
    },
    Rain:{
        iconName: "weather-rainy",
        gradient: ["#12D8FA","#A6FFCB"],
        title:"Rain",
        subtitle:"take your umbrella"
    },
    Snow:{
        iconName: "weather-snowy",
        gradient: ["#86A8E7","#91EAE4"],
        title:"Snow",
        subtitle:"Rubbish falling from the sky"
    },
    Atmosphere:{
        iconName: "weather-windy-variant",
        gradient: ["#00B4DB","#0083B0"],
        title:"Atmosphere",
        subtitle:"It's good day to go outside"
    },
    Clear:{
        iconName: "white-balance-sunny",
        gradient: ["#0ED2F7","#B2FEFA"],
        title:"Clear",
        subtitle:"Let's have a date if you can..."
    },
    Dust:{
        iconName: "cloud-alert",
        gradient: ["#1D4350","#A43931"],
        title:"Dust",
        subtitle:"Take your mask"
    },
    Mist:{
        iconName: "weather-fog",
        gradient: ["#16BFFD","#CB3066"],
        title:"Mist",
        subtitle:"Don't do the laundry"
    }

}


export default function Weather({ temp, condition }) {
    return (
       
             <LinearGradient
          colors={weatherOptions[condition].gradient}
          style={styles.container}>
              <StatusBar barStyle ="light-content"/>
            <View style = {styles.halfContainer}>
            <MaterialCommunityIcons 
            size={96} 
            name = {weatherOptions[condition].iconName} 
            color = "white" 
            />
            <Text style = {styles.temp}>{temp}°</Text>
            </View>
        <View style = {{...styles.halfContainer, ...styles.textContainer}} >
            
                <Text style = {styles.title}>{weatherOptions[condition].title}</Text>
                <Text style = {styles.subtitle}>{weatherOptions[condition].subtitle}</Text> 
            
        </View>
        </LinearGradient>
       
        
    );
}


Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm", 
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Dust",
        "Mist"
    ]).isRequired
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 42,
        color: "white"
    },

    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10
    },
    subtitle:{
        fontWeight: "600",
        color: "white",
        fontSize: 24
    },
    textContainer:{
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }
});