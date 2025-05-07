import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'

import React, { useState } from 'react'
import StoriesComponent from './StoriesComponent'
import elonJump from '../assets/elonJump.jpg'
import MePicture from '../assets/MePicture.png'

export default function PostComponent() {

  const [post, setPost] = useState([
  {
    profilePicture: MePicture,
    usernName: "Sigma",
    postImage: elonJump,
    numOfLikes: "21",
    description: "Elon Musk Jumping in the Air",
    comments: [
      {
        userCommentor: "iHATEPeople",
        comment: "I hate people who jump in the air like this",
      }
    ]
  },
  {
    profilePicture: elonJump,
    usernName: "Elon Xusk",
    postImage: MePicture,
    numOfLikes: "-28",
    description: "why does he look like that",
    comments: [
      {
        userCommentor: "PickleRick",
        comment: "morty gues what",
      }
    ]
  }
  ])

 
  return (
    <ScrollView>
      <StoriesComponent/>
      {
        post.map((post, idx) => {
          return(
            <View key={idx}>

              <View style={styles.profleNav}>
                {/* Profile Picture Container */}
                <View style={{ paddingTop: 10}}>
                  <Image source={post.profilePicture} style={styles.pfp}/>
                </View>
                {/* Username Container */}
                <View style={ styles.usernameContainer}>
                  <Text style={styles.usernameText}>{post.usernName}</Text>
                </View>
                {/* Dots Container */}

                <View style={styles.dotsContainer}>
                  <Text style={styles.dotsText}>⋮</Text>
                </View>

              </View>

              {/* IMage Container 4 real ts time */}

              <View>
                <Image style={styles.postImageStyle} source={post.postImage}/>
              </View>

              {/* Parent container for our Icons and Likes */}
              <View>
                
              </View>

            </View>

        )
        })
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  profleNav: {
    flexDirection: "row",
    paddingBottom: 10
  },
  pfp: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  usernameContainer: {
    paddingLeft: 15,
    justifyContent: "center",
    paddingTop: 10,
  },
  usernameText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  dotsContainer: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    

  },
  dotsText: {
    color: "white",
    fontSize: 30,
    lineHeight: 30,
    
  },
  postImageStyle: {
    height: 400,
    width: "100%"
  }

})