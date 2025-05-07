import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import MePicture from '../assets/MePicture.png'

export default function StoriesComponent() {
  return (
    // We are creating a Carousel byy adding horizontal to your scroll view Component
    <ScrollView horizontal>
      
      {/* Container that holds our stories */}
      <View style={styles.container}>
        {/* Gradiant Border Around our image */}
        <LinearGradient style={styles.linerGradeant} colors={["#feda75", "#Fede1e", "#d62976", "#962fbf", "#4f5bd5"]}>

        {/* This View will be our image Wrapper*/}
        <View style={styles.imageWrapper}>
          {/* Profile Image */}
          <Image  source={MePicture} style={styles.image}/>
        </View>

        </LinearGradient>
        <Text style={styles.LabelText}>Sigma</Text>
      </View>

      <View style={styles.container}>
        {/* Gradiant Border Around our image */}
        <LinearGradient style={styles.linerGradeant} colors={["#feda75", "#Fede1e", "#d62976", "#962fbf", "#4f5bd5"]}>

        {/* This View will be our image Wrapper*/}
        <View style={styles.imageWrapper}>
          {/* Profile Image */}
          <Image  source={MePicture} style={styles.image}/>
        </View>

        </LinearGradient>
        <Text style={styles.LabelText}>Sigma</Text>
      </View>

      <View style={styles.container}>
        {/* Gradiant Border Around our image */}
        <LinearGradient style={styles.linerGradeant} colors={["#feda75", "#Fede1e", "#d62976", "#962fbf", "#4f5bd5"]}>

        {/* This View will be our image Wrapper*/}
        <View style={styles.imageWrapper}>
          {/* Profile Image */}
          <Image  source={MePicture} style={styles.image}/>
        </View>

        </LinearGradient>
        <Text style={styles.LabelText}>Sigma</Text>
      </View>

      <View style={styles.container}>
        {/* Gradiant Border Around our image */}
        <LinearGradient style={styles.linerGradeant} colors={["#feda75", "#Fede1e", "#d62976", "#962fbf", "#4f5bd5"]}>

        {/* This View will be our image Wrapper*/}
        <View style={styles.imageWrapper}>
          {/* Profile Image */}
          <Image  source={MePicture} style={styles.image}/>
        </View>

        </LinearGradient>
        <Text style={styles.LabelText}>Sigma</Text>
      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({

  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    margin: 10
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50
  },
  imageWrapper: {
    width: 87,
    height: 87,
    borderRadius: 50,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  linerGradeant: {
    width: 94,
    height: 94,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  LabelText: {
    color: "white",
    fontSize: 15,
    marginTop:5,
  }


})