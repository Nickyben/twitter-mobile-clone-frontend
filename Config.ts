import { Platform } from "react-native";

const Config = {
  API_URL: "http://192.168.0.101:8080/api", //emulator does not see the server when localhost is used
  BASE_URL: "http://192.168.0.101:8080", //emulator does not see the server when localhost is used
};

export const isAndroid = Platform.OS=== 'android'

export default Config