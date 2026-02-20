import CustomStatusBar from "@/src/utils/CustomStatusBar";
import { Image } from "expo-image";
import { router } from "expo-router";
import React, { useRef, useState } from "react";
import {
    Dimensions,
    FlatList,
    NativeScrollEvent,
    NativeSyntheticEvent,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const { width } = Dimensions.get("window");

const slides = [
  {
    id: "1",
    title: "Welcome to KostenKoning",
    description:
      "Compare nearby prices, discover smart deals, and make everyday choices that save you money",
    imageUri:
      "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=600&h=600&fit=crop&auto=format",
  },
  {
    id: "2",
    title: "Compare prices. Save money.",
    description:
      "Compare grocery, fuel, and daily essentials from nearby stores and always choose the cheapest option in seconds.",
    imageUri:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&h=600&fit=crop&auto=format",
  },
  {
    id: "3",
    title: "Best deals, right around you",
    description:
      "Discover real-time discounts, supermarket promotions, and fuel prices based on your location",
    imageUri:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=600&fit=crop&auto=format",
  },
];

export default function OnboardingScreen() {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(e.nativeEvent.contentOffset.x / width);
    setActiveIndex(index);
  };

  const handleNext = () => {
    if (activeIndex < slides.length - 1) {
      flatListRef.current?.scrollToIndex({ index: activeIndex + 1 });
    }
  };

  const handleGetStarted = () => {
    // Navigate to main app
    console.log("Get Started pressed");
    router.push("/auth/log-in");
  };

  const renderItem = ({
    item,
    index,
  }: {
    item: (typeof slides)[0];
    index: number;
  }) => {
    const isLast = index === slides.length - 1;

    return (
      <View style={{ width }} className="flex-1 bg-white">
        {/* Illustration Area */}
        <View
          className=" items-center justify-center mx-[5%] mt-[10%] rounded-3xl overflow-hidden"
          style={{ backgroundColor: "#f0faf4" }}
        >
          <Image
            source={{ uri: item.imageUri }}
            style={{ width: "85%", height: "55%" }}
            contentFit="contain"
            transition={400}
          />
        </View>

        {/* Text Content */}
        <View className="px-[8%] pt-[6%] pb-[4%]">
          <Text className="text-2xl text-[#1C1C1E] mb-3 text-center font-SF_Pro_Bold">
            {item.title}
          </Text>
          <Text className="text-base text-[#B3B3B3] text-center font-SF_Pro_Regular">
            {item.description}
          </Text>
        </View>

        {/* Bottom Navigation */}
        <View className="flex-row items-center justify-between px-[8%]  pt-[20%]">
          {/* Dots */}
          <View className="flex-row items-center">
            {slides.map((_, i) => (
              <View
                key={i}
                style={{
                  width: i === activeIndex ? 22 : 20,
                  height: 7,
                  borderRadius: 4,
                  backgroundColor: i === activeIndex ? "#00C47A" : "#00C47A33",
                  marginRight: 5,
                }}
              />
            ))}
          </View>

          {/* Button */}
          {isLast ? (
            <TouchableOpacity
              onPress={handleGetStarted}
              activeOpacity={0.85}
              className="px-6 py-[2.5%] rounded-xl "
              style={{ backgroundColor: "#00C47A" }}
            >
              <Text className="text-white text-xl font-SF_Pro_Regular ">
                Get Started
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={handleNext} activeOpacity={0.7}>
              <Text
                className="text-xl font-SF_Pro_Regular "
                style={{ color: "#00C47A" }}
              >
                Next
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  };

  return (
    <View className="flex-1 bg-white">
      <CustomStatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <FlatList
        ref={flatListRef}
        data={slides}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        onMomentumScrollEnd={handleScroll}
        getItemLayout={(_, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
      />
    </View>
  );
}
