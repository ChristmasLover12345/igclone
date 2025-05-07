import { StyleSheet, Text, View } from 'react-native'

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
    <View >
      <StoriesComponent/>
      <Text style={{color: "white"}}>PostComponent</Text>
    </View>
  )
}

const styles = StyleSheet.create({})