import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import ClearButton from "./ClearButton";

const TopCounter = () => {

return(
  <View>
  <ClearButton/>
  <View style={styles.boxContainer}> 
  <View style={styles.borderBox}>
    <Text style={styles.count}>
      0
    </Text>
    <Text style={styles.countText}>
      Male
    </Text>
  </View>
  <View style={styles.borderBox}>
    <Text style={styles.count}>
      0
    </Text>
    <Text style={styles.countText}>
      Femaile
    </Text>
  </View>
  <View style={styles.borderBox}>
    <Text style={styles.count}>
      0
    </Text>
    <Text style={styles.countText}>
      Other
    </Text>
  </View>
</View>
</View>
)
}
export default TopCounter;
