// import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import createSecureStore from "redux-persist-expo-securestore";
const PersistSecureStore = createSecureStore();



export const rootPersistConfig = {
  key: "root",
  storage: AsyncStorage,
  blacklist: ["auth"],
};

export const authPersistConfig = {
  key: "auth",
  storage: PersistSecureStore,
  // whitelist: ["token"],
};

export const navPersistConfig = {
  key: "nav",
  storage: AsyncStorage,
};
