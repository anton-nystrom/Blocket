import React, { useState, useContext } from 'react'
import {
    StyleSheet,
    View,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList
} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import authContext from './authContext';

const Create = (props) => {
    const { authenticated } = useContext(authContext);

    const [data, setData] = useState({
        title: "",
        desc: "",
        price: null,
        userId: authenticated.userData.userId,
        images: []
    });

    const pickImage = async () => {
      console.log("Pick Image plz");
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsMultipleSelection: true,
        orderedSelection: true,
        selectionLimit: 10,
        aspect: [4, 3],
        quality: 0.1,
      });
  
      if (!result.cancelled) {
        const array = data.images.concat(result.selected);
        setData({...data, images: array});
      }
    };

    return (
        <View style={styles.container}>
          <Text style={styles.bevakningar1}>Vad vill du annonsera?</Text>
          <Text style={styles.bilder}>Bilder</Text>
          <TouchableOpacity style={styles.rect} onPress={pickImage}/>
          {data.images.length !== 0 ? (
            <FlatList
              data={data.images}
              keyExtractor={({ id }, index) => id}
              horizontal={true}
              renderItem={({ item }) => (
                <Image style={styles.image} key={item.id} source={{uri: item.uri}}/>
              )}
            />
          ) : (
            null
          )}
            <View style={styles.kategoriStack}>
                <Text style={styles.kategori}>Kategori</Text>
                <Text style={styles.vwTransporter2}></Text>
            </View>
            <TextInput
                placeholder="Välj kategori"
                style={styles.valjKategori}
                onChangeText={(input) => {
                    setData(data => ({...data, kategori: input}))
                }}
            ></TextInput>
            <TouchableOpacity
                onPress={() => props.navigation.navigate("CreateNextStep", {...data})}
                style={styles.button}
            >
                <Text style={styles.fortsatt}>Fortsätt</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#242424",
      paddingRight: 20,
      paddingLeft: 20
    },
    bevakningar1: {
      fontFamily: "Arial",
      color: "rgba(255,255,255,1)",
      fontSize: 20,
      marginTop: 80
    },
    rect: {
      width: 130,
      height: 87,
      borderRadius: 5,
      borderWidth: 2,
      borderColor: "rgba(89,88,88,1)",
    },
    bilder: {
      fontFamily: "Arial",
      color: "rgba(255,255,255,1)",
      fontSize: 14
    },
    kategori: {
      fontFamily: "Arial",
      color: "rgba(255,255,255,1)",
      fontSize: 14
    },
    vwTransporter2: {
      fontFamily: "Arial",
      color: "rgba(105,105,105,1)",
      fontSize: 14
    },
    kategoriStack: {
      width: 52,
      height: 17
    },
    valjKategori: {
      fontFamily: "Arial",
      color: "#121212",
      height: 38,
      borderWidth: 1,
      borderColor: "rgba(89,88,88,1)",
      borderRadius: 5
    },
    button: {
      width: 331,
      height: 50,
      backgroundColor: "rgba(104,138,202,1)",
      borderRadius: 5
    },
    fortsatt: {
      fontFamily: "Arial",
      color: "rgba(255,255,255,1)",
      fontSize: 14,
      marginTop: 17,
      marginLeft: 143
    },
    image: {
      width: 130,
      height: 87,
      borderRadius: 5,
      borderWidth: 2,
      marginRight: 5,
      borderColor: "rgba(89,88,88,1)",
    },
});

export default Create