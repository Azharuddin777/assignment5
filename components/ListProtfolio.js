import { View, Text } from 'react-native'
import React from 'react'

import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function ListProtfolio() {
  return (
    <View
        style={{
            flex:0.37,
            marginBottom:7,
            marginTop:20
        }}
    >
      <Text
        style={{
            fontSize:16,
            paddingHorizontal:10,
            margin:5,
            fontWeight:"bold",
            color:"black"
        }}
      >Summary</Text>
      <View
            style={{
                flex:1,
                marginHorizontal:20,
                backgroundColor:"white",
                borderRadius:20,
                padding:10,
                justifyContent:"space-between"
            }}
      >
        <Top/>
        <Bottom/>
      </View>
    </View>
  )
}

function Top(){
    return(
        <View
            style={{
                flexDirection:"row",
                justifyContent:"space-between",
                alignItems:"center"
               
            }}
        >
            <View
                style={{
                    flexDirection:"row",
                    alignItems:"center",
                }}
            >
                <View
                    style={{
                        backgroundColor:"#FFD580",
                        padding:10,
                        borderRadius:10,
                    }}
                >
                    <FontAwesome name="home" size={25} color="orange"/>
                </View>
                <Text
                    style={{
                        fontSize:18,
                        fontWeight:"bold",
                        paddingHorizontal:10
                    }}
                >Cash House</Text>
            </View>
            <Text style={{color:"grey"}}>7 products</Text>
        </View>
    )
}

function Bottom(){
    return(
        <View
            style={{
                flexDirection:"row",
                justifyContent:"space-between",
                alignItems:"center",
                paddingHorizontal:10
            }}
        >
            <View>
                <Text style={{color:"grey"}}>My portfolio</Text>
                <Text 
                    style={{
                        fontSize:20,
                        fontWeight:"bold"
                    }}
                >$ 30,12,980</Text>
            </View>
            <View>
                <Text style={{color:"grey"}}>profit</Text>
                <View
                    style={{
                        flexDirection:"row",
                        alignItems:"center"
                    }}
                >
                    <AntDesign name="caretup" color="orange" />
                    <Text
                        style={{
                            fontSize:20,
                            fontWeight:"bold",
                            marginLeft:2
                        }}
                    >8.2%</Text>
                </View>
            </View>
        </View>
    )
}