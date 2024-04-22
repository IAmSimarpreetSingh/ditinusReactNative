import { Dimensions } from "react-native";


const { width } = Dimensions.get("window");
const guidelineBaseWidth = 378;

export const scale = (size: number) => (width / guidelineBaseWidth) * size;
