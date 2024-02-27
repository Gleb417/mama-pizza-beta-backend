import Header from "./src/components/Header.js";
import Categoryes from "./src/components/Categoryes.js";
import Pizzacat from "./src/components/Pizzacat.js";
import Breakfastcat from "./src/components/Breakfastcat.js";
import ComponentsPizzaclassiccat from "./src/components/Pizzaclassiccat.js";
import Combocat from "./src/components/Combocat.js";
import Pizzaforonecat from "./src/components/Pizzaforonecat.js";
import Snackscat from "./src/components/Snackscat.js";
import HotDishescat from "./src/components/HotDishescat.js";
import Pastescat from "./src/components/Pastescat.js";
import Soupscat from "./src/components/Soupscat.js";
import Saladscat from "./src/components/Saladscat.js";
import Dessertscat from "./src/components/Dessertscat.js";
import Drinkscat from "./src/components/Drinkscat.js";
import Saucescat from "./src/components/Saucescat.js";
import NiceLittleThingscat from "./src/components/NiceLittleThingscat.js";
import Cakescat from "./src/components/Cakescat.js";
import Footer from "./src/components/Footer.js";
import Carousel from "./src/Carousel.js";

import React from "react";
import { View, ScrollView } from "react-native";

export default function App() {
  return (
    <View
      style={{
        // paddingTop: 45,
        // paddingLeft: 25,
        // paddingRight: 25,
        // paddingBottom: 5,
        flex: 1,
      }}
    >
      <View
        style={{
          paddingTop: 45,
          paddingLeft: 25,
          paddingRight: 25,
          paddingBottom: 5,
          // flex: 1,
        }}
      >
        <Header />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Carousel />
        </View>

        <View
          style={{
            paddingTop: 45,
            paddingLeft: 25,
            paddingRight: 25,
            paddingBottom: 5,
            // flex: 1,
          }}
        >
          <Categoryes />
        </View>
        <View
          style={{
            paddingTop: 45,
            paddingLeft: 25,
            paddingRight: 25,
            paddingBottom: 5,
            // flex: 1,
          }}
        >
          <Pizzacat />
        </View>
        <View
          style={{
            paddingTop: 45,
            paddingLeft: 25,
            paddingRight: 25,
            paddingBottom: 5,
            // flex: 1,
          }}
        >
          <Breakfastcat />
        </View>
        <View
          style={{
            paddingTop: 45,
            paddingLeft: 25,
            paddingRight: 25,
            paddingBottom: 5,
            // flex: 1,
          }}
        >
          <ComponentsPizzaclassiccat />
        </View>
        <View
          style={{
            paddingTop: 45,
            paddingLeft: 25,
            paddingRight: 25,
            paddingBottom: 5,
            // flex: 1,
          }}
        >
          <Combocat />
        </View>
        <View
          style={{
            paddingTop: 45,
            paddingLeft: 25,
            paddingRight: 25,
            paddingBottom: 5,
            // flex: 1,
          }}
        >
          <Pizzaforonecat />
        </View>
        <View
          style={{
            paddingTop: 45,
            paddingLeft: 25,
            paddingRight: 25,
            paddingBottom: 5,
            // flex: 1,
          }}
        >
          <Snackscat />
        </View>
        <View
          style={{
            paddingTop: 45,
            paddingLeft: 25,
            paddingRight: 25,
            paddingBottom: 5,
            // flex: 1,
          }}
        >
          <HotDishescat />
        </View>
        <View
          style={{
            paddingTop: 45,
            paddingLeft: 25,
            paddingRight: 25,
            paddingBottom: 5,
            // flex: 1,
          }}
        >
          <Pastescat />
        </View>
        <View
          style={{
            paddingTop: 45,
            paddingLeft: 25,
            paddingRight: 25,
            paddingBottom: 5,
            // flex: 1,
          }}
        >
          <Soupscat />
        </View>
        <View
          style={{
            paddingTop: 45,
            paddingLeft: 25,
            paddingRight: 25,
            paddingBottom: 5,
            // flex: 1,
          }}
        >
          <Saladscat />
        </View>
        <View
          style={{
            paddingTop: 45,
            paddingLeft: 25,
            paddingRight: 25,
            paddingBottom: 5,
            // flex: 1,
          }}
        >
          <Dessertscat />
        </View>
        <View
          style={{
            paddingTop: 45,
            paddingLeft: 25,
            paddingRight: 25,
            paddingBottom: 5,
            // flex: 1,
          }}
        >
          <Drinkscat />
        </View>
        <View
          style={{
            paddingTop: 45,
            paddingLeft: 25,
            paddingRight: 25,
            paddingBottom: 5,
            // flex: 1,
          }}
        >
          <Saucescat />
        </View>
        <View
          style={{
            paddingTop: 45,
            paddingLeft: 25,
            paddingRight: 25,
            paddingBottom: 5,
            // flex: 1,
          }}
        >
          <NiceLittleThingscat />
        </View>
        <View
          style={{
            paddingTop: 45,
            paddingLeft: 25,
            paddingRight: 25,
            paddingBottom: 5,
            // flex: 1,
          }}
        >
          <Cakescat />
        </View>
        <View>
          <Footer />
        </View>
      </ScrollView>
    </View>
  );
}
