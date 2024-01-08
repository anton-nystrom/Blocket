import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity
} from "react-native";
import addListing from "../api/addListing";

const CreateNextStep = (props) => {

    const [data, setData] = useState(props.route.params);

    async function handleClick() {
      await addListing(data);
      //props.navigation.popToTop();
      props.navigation.reset({
        index: 0,
        routes: [{ name: 'Create' }]
      })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.berattaMer}>Berätta mer</Text>
            <Text style={styles.titel}>Titel</Text>
            <View style={styles.vwTransporter2Stack}>
                <Text style={styles.vwTransporter2}></Text>
                <TextInput
                    placeholder="Beskriv din vara"
                    multiline={true}
                    numberOfLines={10}
                    style={styles.valjKategori1}
                    onChangeText={(input) => {
                        setData(data => ({...data, desc: input}))
                    }}
                ></TextInput>
            </View>
            <TextInput
                placeholder="Titel på din annons"
                style={styles.valjKategori}
                onChangeText={(input) => {
                    setData(data => ({...data, title: input}))
                }}
            ></TextInput>
            <TouchableOpacity style={styles.button} onPressOut={() => handleClick()}>
                <Text style={styles.annonsera}>Annonsera</Text>
            </TouchableOpacity>
            <Text style={styles.beskrivning1}>Beskrivning</Text>
            <Text style={styles.pris}>Pris</Text>
            <TextInput
                placeholder="Sätt pris på din vara"
                style={styles.valjKategori2}
                onChangeText={(input) => {
                    setData(data => ({...data, price: input}))
                }}
            ></TextInput>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#242424"
    },
    berattaMer: {
      fontFamily: "Arial",
      color: "rgba(255,255,255,1)",
      fontSize: 20,
      marginTop: 91,
      marginLeft: 20
    },
    titel: {
      fontFamily: "Arial",
      color: "rgba(255,255,255,1)",
      fontSize: 14,
      marginTop: 49,
      marginLeft: 19
    },
    vwTransporter2: {
      top: 1,
      left: 0,
      position: "absolute",
      fontFamily: "Arial",
      color: "rgba(105,105,105,1)",
      fontSize: 14
    },
    valjKategori1: {
      top: 0,
      left: 0,
      position: "absolute",
      fontFamily: "Arial",
      color: "#121212",
      height: 191,
      width: 331,
      borderWidth: 1,
      borderColor: "rgba(89,88,88,1)",
      borderRadius: 5
    },
    vwTransporter2Stack: {
      width: 331,
      height: 191,
      marginTop: 143,
      marginLeft: 20
    },
    valjKategori: {
      fontFamily: "Arial",
      color: "#121212",
      height: 38,
      width: 331,
      borderWidth: 1,
      borderColor: "rgba(89,88,88,1)",
      borderRadius: 5,
      marginTop: -334,
      marginLeft: 20
    },
    button: {
      width: 331,
      height: 50,
      backgroundColor: "rgba(104,202,126,1)",
      borderRadius: 5,
      marginTop: 336,
      marginLeft: 22
    },
    annonsera: {
      fontFamily: "Arial",
      color: "rgba(255,255,255,1)",
      fontSize: 14,
      marginTop: 13,
      marginLeft: 134
    },
    beskrivning1: {
      fontFamily: "Arial",
      color: "rgba(255,255,255,1)",
      fontSize: 14,
      marginTop: -298,
      marginLeft: 20
    },
    pris: {
      fontFamily: "Arial",
      color: "rgba(255,255,255,1)",
      fontSize: 14,
      marginTop: -90,
      marginLeft: 20
    },
    valjKategori2: {
      fontFamily: "Arial",
      color: "#121212",
      height: 38,
      width: 331,
      borderWidth: 1,
      borderColor: "rgba(89,88,88,1)",
      borderRadius: 5,
      marginLeft: 20
    }
});

export default CreateNextStep