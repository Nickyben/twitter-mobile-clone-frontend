// lib/tailwind.js
import { ImageStyle, TextStyle, ViewStyle } from "react-native";
import { create,} from "twrnc";

type TailwindReturn = ((...any) => TextStyle & ViewStyle & ImageStyle) | never ;
// create the customized version...
// eslint-disable-next-line @typescript-eslint/no-var-requires
const tw: TailwindReturn = create(require(`../../../tailwind.config`)); // <- your path may differ

// ... and then this becomes the main function your app uses
export default tw; //as

