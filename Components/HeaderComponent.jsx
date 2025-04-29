import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GrandHotel_400Regular, useFonts } from '@expo-google-fonts/grand-hotel'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';



export default function HeaderComponent() {

    const [isLoaded] = useFonts({
        GrandHotel_400Regular
    });

    //Because our fonts are packaged within app we want to check if the font's are loaded first before displaying them to avoid ugly jumping

    if(!isLoaded) {
        return null; 
    }

  return (
    <View style={styles.HeaderContainer}>
        {/* First view will represent the div our text "Instagram" is in */}
        <View>
        
            <Text style={[styles.WhiteText, styles.HeaderText, {fontFamily: "GrandHotel_400Regular"}]}>Instagram</Text>

        </View>

        {/* This "div" will be where our buttons or icons are */}
        <View>
            <FontAwesomeIcon Ico/>
            

        </View>


    </View>

    
)
}

const styles = StyleSheet.create({
    HeaderContainer: {
        marginTop: 5,
        paddingLeft: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    WhiteText: {
        color: "white"
    },
    HeaderText: {
        fontSize: 35
    }
})