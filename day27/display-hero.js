import { useState } from "react";
import ironman from "./assets/ironman.jpg"
import superman from "./assets/superman.jpg"
import blackpanther from "./assets/blackpanther.jpg"
import thor from "./assets/thor.jpg"
import { Button, Text,View,StyleSheet, Platform,Image } from "react-native";
export default function App(){

  let [name,updateName] = useState({title:'',firstname:'',lastname:'',image:''})
  let changeImage=( img )=>{
    if(img ==="ironman"){
      updateName({
        title:"Ironman",
        firstname:"Tony",
        lastname:"Stark",
        image:ironman
      })
    }
    else if(img ==="thor"){
       updateName({
        title:"Thor",
        firstname:"Thor",
        lastname:"Odinson",
        image:thor
      })
    }
    else if(img ==="blackpanther"){
      updateName({
        title:"Blackpanther",
        firstname:"T",
        lastname:"Challa",
        image:blackpanther
      })
    }
    else{
      updateName({
        title:"Superman",
        firstname:"Clark",
        lastname:"Kent",
        image:superman
      })
    }
  }
  return(    
    <View style={mystyle.viewstyle}>
      <View>
        <Text style={{fontSize:42, color: "orange"}}>Avengers</Text>
      </View>
      <Text/>
      <View>
      <View style={{flexDirection:"row", padding: 20}}>
        <Button onPress={()=>changeImage("blackpanther")} title="blackpanther"></Button>
      </View>
      <View style={{flexDirection:"row", padding: 20}}>
        <Button onPress={()=>changeImage("thor")} title="Thor"></Button>
      </View>
      <View style={{flexDirection:"row", padding: 20}}>
        <Button onPress={()=>changeImage("superman")} title="Superman"></Button>
        <Text/>
      </View>
      <View style={{flexDirection:"row", padding: 20}}>
        <Button onPress={()=>changeImage("ironman")} title="Ironman"></Button> 
        <Text/>
      </View>
        <Text style={{fontSize:22}}>
        Title : {name.title}{"\n"}  
        Firstname: {name.firstname}{"\n"}
        Lastname: {name.lastname}</Text>
        <Image source={name.image}></Image>
      </View>
     </View>
  )
}
let mystyle = StyleSheet.create({
  viewstyle:{
    flex:1,justifyContent:'center',alignItems:'center',paddingTop: Platform.OS ==="android"?30:0
  }
})