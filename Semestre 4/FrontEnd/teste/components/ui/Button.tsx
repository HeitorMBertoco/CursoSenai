import { TouchableOpacity, Text, AnimatableNumericValue, ColorValue } from "react-native";
interface Betao{
    text: string
    color: string
    textColor: string
    radius: AnimatableNumericValue
    padding: number
    border: number
    brdcolor: string
}

export default function Betao({text, color , textColor, radius, padding, border, brdcolor} : Betao){
    return(
<TouchableOpacity style={{
        backgroundColor: color,
        padding: padding,
        width: 900,
        borderRadius: radius,
        borderWidth: border,
        borderColor: brdcolor,

      }}>
        <Text style={{textAlign:'center',color: textColor}}>
      {text}
        </Text>

      </TouchableOpacity>
    )
}