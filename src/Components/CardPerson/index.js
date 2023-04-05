import React, { useEffect, useState } from "react";
import { View, Text,ActivityIndicator,FlatList } from "react-native";
import styles from "./styles";
import ButtonLike from "./ButtonLike";
import getPeople from "../../ApiService/"

const CardPerson = () => {
  const [data,setData] = useState()

  useEffect(() => {
    setData(getPeople)
  }, []);
  
console.log(data)
return(
<View>
    <FlatList
      data={data}
      keyExtractor = {(item, index) => `${index}`}
      renderItem={({ item }) => (
      <View style={styles.cardContainer}>
        <View style={styles.nameBox}>
          <Text style={styles.cardText}>
            Name :
          </Text>
          <Text style={styles.fetchInform}>
            {item.name}
          </Text>
        </View>
        <View style={styles.yearGendeContainer}>
          <View style={styles.genderBox}>
            <Text style={styles.cardText} >
              Gender :
            </Text>
            <Text style={styles.fetchInform}>
              {item.gender}
            </Text>
          </View>
          <View style={styles.yearBox}>
            <Text style={styles.cardText} >
              Year :
            </Text> 
            <Text style={styles.fetchInform}>
              {item.birth_year}
            </Text>
          </View>
        </View>
        <View style={styles.likeBox}>
          <ButtonLike/>
        </View>
      </View>
    )}
    />
</View>
)
}
export default CardPerson;
