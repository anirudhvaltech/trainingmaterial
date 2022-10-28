
import { View, Text, Image } from "react-native";
import ironman from "./assets/ironman.jpg"
import {blackpanther} from "./assets/blackpanther.jpg"

export default function App() {
let hero="blackpanther";
  return <View>
            {/* An Image that is bundled with your App
            Logo
            Icons */}
            <Image source={require("./assets/blackpanther.jpg")}></Image>
            <Image source={ ironman } style={{width:250, height: 250}}></Image>
            <Image source={ {uri:"https://picsum.photos/200"} } style={{width:200, height: 200}}></Image>
        </View>
}


