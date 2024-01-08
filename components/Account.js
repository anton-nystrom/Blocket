import React, { useContext } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from "react-native";
import authContext from './authContext';

const Account = () => {
  const { authenticated, setAuthenticated } = useContext(authContext);
  const name = authenticated.userData.firstName + " " + authenticated.userData.lastName;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setAuthenticated({
          userData: {},
          loggedIn: false
        })}
        style={styles.button}
      >
        <Text style={styles.loggaUt}>Logga ut</Text>
      </TouchableOpacity>
      <Text style={styles.valkommen}>Välkommen!</Text>
      <Text style={styles.namn2}>{name}</Text>
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
    marginTop: 418,
    marginLeft: 22
  },
  loggaUt: {
    fontFamily: "Arial",
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    marginTop: 16,
    marginLeft: 138
  },
  valkommen: {
    fontFamily: "Arial",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    marginTop: -385,
    marginLeft: 131
  },
  namn2: {
    fontFamily: "Arial",
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    textAlign: "center",
    marginTop: 31,
    alignSelf: "center"
  }
});

export default Account