import { ScrollView, StyleSheet } from "react-native";
import { Button } from "react-native-elements";

import { Text, View } from "../../components/Themed";
import { useAppDispatch } from "../../hooks/redux";
import { fakeLogout } from "../../redux/actions/auth/loginAction";
import tw from "../../styles/tailwind/tailwind";

export default function HomeScreen() {
  const dispatch = useAppDispatch();

  return (
    <ScrollView style={styles.container} >
      <Text style={styles.title}>Home Screen</Text>
      <Button
        title="Logout"
        buttonStyle={tw`btn`}
        containerStyle={tw`mt-6`}
        titleStyle={tw`btn-text`}
        onPress={() => dispatch(fakeLogout())}
      />
      <Button
        title="Logout"
        buttonStyle={tw`btn`}
        containerStyle={tw`mt-6`}
        titleStyle={tw`btn-text`}
        onPress={() => dispatch(fakeLogout())}
      />
      <Button
        title="Logout"
        buttonStyle={tw`btn`}
        containerStyle={tw`mt-6`}
        titleStyle={tw`btn-text`}
        onPress={() => dispatch(fakeLogout())}
      />
      <Button
        title="Logout"
        buttonStyle={tw`btn`}
        containerStyle={tw`mt-6`}
        titleStyle={tw`btn-text`}
        onPress={() => dispatch(fakeLogout())}
      />
      <Button
        title="Logout"
        buttonStyle={tw`btn`}
        containerStyle={tw`mt-6`}
        titleStyle={tw`btn-text`}
        onPress={() => dispatch(fakeLogout())}
      />
      <Button
        title="Logout"
        buttonStyle={tw`btn`}
        containerStyle={tw`mt-6`}
        titleStyle={tw`btn-text`}
        onPress={() => dispatch(fakeLogout())}
      />
      <Button
        title="Logout"
        buttonStyle={tw`btn`}
        containerStyle={tw`mt-6`}
        titleStyle={tw`btn-text`}
        onPress={() => dispatch(fakeLogout())}
      />
      <Button
        title="Logout"
        buttonStyle={tw`btn`}
        containerStyle={tw`mt-6`}
        titleStyle={tw`btn-text`}
        onPress={() => dispatch(fakeLogout())}
      />
      <Button
        title="Logout"
        buttonStyle={tw`btn`}
        containerStyle={tw`mt-6`}
        titleStyle={tw`btn-text`}
        onPress={() => dispatch(fakeLogout())}
      />
      <Button
        title="Logout"
        buttonStyle={tw`btn`}
        containerStyle={tw`mt-6`}
        titleStyle={tw`btn-text`}
        onPress={() => dispatch(fakeLogout())}
      />
      <Button
        title="Logout"
        buttonStyle={tw`btn`}
        containerStyle={tw`mt-6`}
        titleStyle={tw`btn-text`}
        onPress={() => dispatch(fakeLogout())}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
