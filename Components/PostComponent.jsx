import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'

import React, { useState } from 'react'
import StoriesComponent from './StoriesComponent'
import elonJump from '../assets/elonJump.jpg'
import MePicture from '../assets/MePicture.png'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBookmark, faComment, faHeart, faPaperPlane } from '@fortawesome/free-regular-svg-icons'

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
              <View style={{ flexDirection: "row"}}>
                
                <View style={{ flexDirection: "row", flex: 1, alignItems: "center", paddingLeft: 14, paddingTop: 10}}>
                  <FontAwesomeIcon icon={faHeart} style={{color: "white", marginRight: 5}} size={25}/>
                  <Text style={{color: "white", fontWeight: "bold", marginRight: 10}}>{post.numOfLikes}</Text>
                  <FontAwesomeIcon icon={faComment} style={{color: "white", transform: [{rotateY: "180deg"}], marginRight: 20}} size={25}/>
                  <FontAwesomeIcon icon={faPaperPlane} style={{color: "white"}} size={25}/>
                </View>

                <View style={{justifyContent: "center", paddingTop: 10, marginRight: 10}}>
                  <FontAwesomeIcon icon={faBookmark} size={25} style={{color: "white"}}/>
                </View>
              </View>
            
                {/* Description Container */}
                <View style={{flex: 1, flexDirection: "row", paddingTop: 5}}>
                  <Text style={{color: "white", fontWeight: "bold", paddingLeft: 14, paddingRight: 5 }}>{post.usernName}</Text>
                  <Text style={{color: "white"}}>{post.description}</Text>
                </View>
                <View>
                    {
                      post.comments.map((comment, idx) => {
                        return (
                        
                          <View key={idx} style={{flex: 1, flexDirection: "row"}}>
                            <Text style={{color: "white", fontWeight: "bold", paddingLeft: 14, paddingRight: 5, paddingTop: 5 }}>{comment.userCommentor}</Text>
                            <Text style={{color: "white", paddingTop: 5}}>{comment.comment}</Text>
                          </View>
                          
                          
                        )
                      })
                    }
                    {
                      <View style={{flex: 1, flexDirection: "row"}}>
                        <Image source={post.profilePicture} style={{height: 30, width: 30, borderRadius: 50, marginLeft: 14}}/>
                        <Text style={{color: "gainsboro", paddingLeft: 13, alignSelf: "center"}}>Add a Comment...</Text>

                        <View> 
                          <Text style={{color: "gainsboro", paddingLeft: 14, paddingTop: 6}}>12 Hours Ago</Text>
                        </View>


                      </View>

                     

                    }
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