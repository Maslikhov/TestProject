import React,{useState} from "react"
import { TouchableOpacity,Text } from "react-native"
import styles from "./styles"

const ClearButton = () => {
  const [male,setMale] = useState();
  const [femaile,setFemaile] = useState();
  const [other,setOther] = useState();

  const clear = () => {
    return setMale(0), setFemaile(0), setOther(0)
  };
  console.log(male, femaile, other);

return (
<TouchableOpacity style={styles.clearButton} onPress={clear}>
  <Text style={styles.buttonClear}>
    Clear
  </Text>
</TouchableOpacity>
)
}
export default ClearButton;