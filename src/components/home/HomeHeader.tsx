import { Header } from "@react-navigation/elements";
import React from "react";
import { render } from "react-dom";
import { Alert, Animated, Image, Pressable, ViewStyle } from "react-native";
import Colors from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";
import tw from "../../styles/tailwind/tailwind";

interface IProps {
  colorScheme: string;
  transform: Array<any>;
}

class HomeHeader extends React.Component<IProps> {
  render() {
    return (
      <Header
        {...{
          title: "",
          headerTitleAlign: "center",
          headerTransparent: true,
          headerTintColor: Colors[this.props.colorScheme].primary,
          headerStyle: {
            backgroundColor: Colors[this.props.colorScheme].background,
           transform: this.props.transform
          },
          headerTitle: () => (
            <Image
              source={require("../../../assets/images/twitterLogoBlue.png")}
              width={27}
              style={{ aspectRatio: 27 / 22 }}
            />
          ),
          headerRight: () => (
            <Pressable
              onPress={() => Alert.alert("Not yet ready")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <Image
                source={require("../../../assets/icons/images/timeline.png")}
                width={27}
                style={tw`mr-4`}
              />
            </Pressable>
          ),
        }}
      />
    );
  }
}

export default Animated.createAnimatedComponent(HomeHeader);
