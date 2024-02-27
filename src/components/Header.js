import React from "react";
import { Linking, View, Image, TouchableHighlight } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View>
        <TouchableHighlight
          onPress={() => Linking.openURL("https://google.com")}
        >
          <Image
            source={{
              uri: "https://kodvpalto.ru/content/images/shops/7k/7702/promokod-izhevsk.mama-pizza.jpg?v=1703959217",
            }}
            style={{
              width: 70,
              height: 70,
            }}
          />
        </TouchableHighlight>
      </View>
      <View>
        <Image
          source={{ uri: "https://cdn.onlinewebfonts.com/svg/img_290616.png" }}
          style={{
            width: 45,
            height: 45,
          }}
        />
      </View>
    </View>
  );
}
