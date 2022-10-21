import React,{useState} from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

const Flex = () => {
  let [color, setColor] = useState("black")
  return (
    <View style={[styles.container, {
      // Try setting `flexDirection` to `"row"`.
      flexDirection: "row",
      paddingTop: 50,
      backgroundColor: color
    }]}>
      <Pressable onPress={()=>setColor("#134611")} >
        <View style={{ width:103, height:103, backgroundColor: "#134611" }}/>
      </Pressable>
      <Pressable onPress={()=>setColor("#296813")} >
      <View style={{ width:103, height:103, backgroundColor: "#296813" }} />
      </Pressable>
        <Pressable onPress={()=>setColor("#3E8914")} >
      <View style={{ width:103, height:103, backgroundColor: "#3E8914" }} />
      </Pressable>
          <Pressable onPress={()=>setColor("#3DA35D")} >
      <View style={{ width:103, height:103, backgroundColor: "#3DA35D" }} />
      </Pressable>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});

export default Flex;