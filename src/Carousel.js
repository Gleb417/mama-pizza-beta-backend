import React, { useEffect, useRef, useState } from "react";
import { FlatList, StyleSheet, View, Dimensions, Image } from "react-native";

const SLIDER_DATA = [
  {
    id: "1",
    image:
      "https://izhevsk.mama-pizza.ru/upload/iblock/b2e/pl6rr6mne380ymp58dng1cdt4xgoc2ln_thumb_600x500.jpg",
  },
  {
    id: "2",
    image:
      "https://izhevsk.mama-pizza.ru/upload/iblock/3e6/o866lrni5seiq8cugdxqs2y3zeb2jep3_thumb_600x500.jpg",
  },
  {
    id: "3",
    image:
      "https://izhevsk.mama-pizza.ru/upload/iblock/a74/dpr9cw2ss3lajlj7ffbqdnwqaf98zopn_thumb_600x500.jpg",
  },
];

const Carousel = () => {
  const FlatlistRef = useRef(null);
  const screenWidth = Dimensions.get("window").width;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % SLIDER_DATA.length;
      FlatlistRef.current.scrollToIndex({ index: nextIndex });
      setActiveIndex(nextIndex);
    }, 5000); // автопрокрутка каждые 5 секунды

    return () => clearInterval(interval);
  }, [activeIndex]);

  const getItemLayout = (_, index) => ({
    length: screenWidth,
    offset: screenWidth * index,
    index,
  });

  const renderItem = ({ item }) => (
    <Image
      source={{ uri: item.image }}
      style={{ height: 300, width: screenWidth }}
    />
  );

  const renderDotIndicators = () => {
    return SLIDER_DATA.map((_, index) => (
      <View
        key={index}
        style={{
          backgroundColor: index === activeIndex ? "#FF4500" : "#FFA500",
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 6,
        }}
      />
    ));
  };

  const onScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / screenWidth);
    setActiveIndex(index);
  };

  return (
    <View>
      <FlatList
        data={SLIDER_DATA}
        ref={FlatlistRef}
        getItemLayout={getItemLayout}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
        pagingEnabled={true}
        onScroll={onScroll}
      />

      <View style={styles.dotIndicatorsContainer}>{renderDotIndicators()}</View>
    </View>
  );
};
const styles = StyleSheet.create({
  dotIndicatorsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
  },
});

export default Carousel;
