import React, { useState, useContext } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from "react-native";
import login from '../api/login';
import authContext from './authContext';


const Login = () => {
  const { setAuthenticated } = useContext(authContext);

  const loginHandle = (data) => {
    data = data.data;
    console.log(data);
    !data.error ? (
      setAuthenticated({
        userData: {
          userId: data.userId,
          firstName: data.firstName,
          lastName: data.lastName
        },
        loggedIn: true
      })
    ) : (
      console.log(data.error)
    )
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={async() => loginHandle(await login())}
        style={styles.button}
      >
        <Text style={styles.loggaInMedBankId}>Logga in med BankID</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#242424"
    },
    button: {
      width: 331,
      height: 50,
      backgroundColor: "rgba(104,138,202,1)",
      borderRadius: 5,
      marginTop: 250,
      marginLeft: 22
    },
    loggaInMedBankId: {
      fontFamily: "Arial",
      color: "rgba(255,255,255,1)",
      fontSize: 14,
      marginTop: 16,
      marginLeft: 100
    }
  });

export default Login