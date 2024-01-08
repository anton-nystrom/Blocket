import React, { useEffect, useState } from 'react'
import { Image, ActivityIndicator, FlatList, StyleSheet, View, StatusBar, Text, TextInput, ScrollView, RefreshControl, Dimensions, TouchableOpacity } from "react-native";
import getListings from '../api/getListings';

const Main = (props) => {
    const [data, setData] = useState([]);
    const [refresh, setRefresh] = useState(false);

    async function fetchData() {
      setData(await getListings());
    }

    useEffect(() => {
        fetchData();
    }, [])

    function onRefresh() {
      setRefresh(true);
      fetchData();
      setRefresh(false);
    }

    return (
        <View style={styles.container}>
            <StatusBar animated barStyle="light-content" />
            <View style={styles.rectStack}>
            <View style={styles.rect}>
                <Text style={styles.blocket}>blocket</Text>
            </View>
            <TextInput
                placeholder="Bilar, möbler, boende m.m"
                style={styles.textInput}
            ></TextInput>
            </View>
            <ScrollView 
              refreshControl={
                <RefreshControl
                  refreshing={refresh}
                  onRefresh={onRefresh}
                />
              }
            >
              <View style={styles.bevakningarRow}>
                  <Text style={styles.bevakningar}>Bevakningar</Text>
                  <Text style={styles.visaAlla}>Visa alla</Text>
              </View>
              {data.length == 0 ? <ActivityIndicator/> : (
                  <FlatList
                      data={data}
                      keyExtractor={({ id }, index) => id}
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}
                      renderItem={({ item }) => (
                        <TouchableOpacity key={item.id} onPress={() => props.navigation.navigate("ViewListing", item)}>
                          <View style={styles.group}>
                            <Image
                              style={styles.rect2}
                              source={{uri: item.image}}
                            />
                            <Text style={styles.vwTransporter}>{item.title}</Text>
                            <Text style={styles.vwTransporter2}>{item.price}kr</Text>
                          </View>
                        </TouchableOpacity>
                      )}
                  />
              )}
              <View style={styles.utvaldaAnnonserRow}>
                <Text style={styles.utvaldaAnnonser}>Utvalda annonser</Text>
                <Text style={styles.visaAlla1}>Visa alla</Text>
              </View>
              {data.length == 0 ? <ActivityIndicator/> : (
                  <FlatList
                      data={data}
                      keyExtractor={({ id }, index) => id}
                      horizontal={false}
                      numColumns={2}
                      columnWrapperStyle={{justifyContent: 'space-between'}}
                      style={{paddingRight: 20, paddingLeft: 20}}
                      renderItem={({ item }) => (
                        <TouchableOpacity key={item.id} onPress={() => props.navigation.navigate("ViewListing", item)}>
                          <View style={styles.group1} key={item.id}>
                            <Image
                              style={styles.utvaldaItem}
                              source={{uri: item.image}}
                            />
                            <Text style={styles.utvaldaTitel}>{item.title}</Text>
                            <Text style={styles.utvaldaPris}>{item.price}kr</Text>
                          </View>
                        </TouchableOpacity>
                      )}
                  />
              )}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(36,36,36,1)"
  },
  rect: {
    top: 0,
    left: 0,
    width: 375,
    height: 104,
    position: "absolute",
    backgroundColor: "rgba(208,52,52,1)"
  },
  blocket: {
    fontFamily: "Arial",
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    marginTop: 40,
    marginLeft: 133
  },
  textInput: {
    top: 83,
    left: 20,
    position: "absolute",
    fontFamily: "Arial",
    color: "#121212",
    height: 42,
    width: 335,
    backgroundColor: "#333131",
    borderRadius: 3,
    shadowColor: "rgba(30,29,29,1)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    elevation: 30,
    shadowOpacity: 1,
    shadowRadius: 10
  },
  rectStack: {
    width: 375,
    height: 125
  },
  bevakningar: {
    fontFamily: "Arial",
    color: "rgba(255,255,255,1)",
    fontSize: 16
  },
  visaAlla: {
    fontFamily: "Arial",
    color: "rgba(255,255,255,1)",
    fontSize: 12,
    marginLeft: 200,
    marginTop: 3
  },
  bevakningarRow: {
    height: 19,
    flexDirection: "row",
    marginTop: 69,
    marginLeft: 20,
    marginRight: 23
  },
  group: {
    width: 130,
    height: 121,
    marginTop: 19,
    marginLeft: 20
  },
  rect2: {
    width: 130,
    height: 87,
    backgroundColor: "#E6E6E6",
    borderRadius: 5
  },
  vwTransporter: {
    fontFamily: "Arial",
    color: "rgba(255,255,255,1)",
    fontSize: 14
  },
  vwTransporter2: {
    fontFamily: "Arial",
    color: "rgba(105,105,105,1)",
    fontSize: 14
  },
  utvaldaAnnonser: {
    fontFamily: "Arial",
    color: "rgba(255,255,255,1)",
    fontSize: 16
  },
  visaAlla1: {
    fontFamily: "Arial",
    color: "rgba(255,255,255,1)",
    fontSize: 12,
    marginLeft: 164,
    marginTop: 3
  },
  utvaldaAnnonserRow: {
    height: 19,
    flexDirection: "row",
    marginTop: 26,
    marginLeft: 20,
    marginRight: 23
  },
  group1: {
    width: Dimensions.get('window').width * .42,
    marginTop: 20
  },
  utvaldaItem: {
    width: '100%',
    height: Dimensions.get('window').width * .42,
    backgroundColor: "#E6E6E6",
    borderRadius: 5
  },
  utvaldaTitel: {
    fontFamily: "Arial",
    color: "rgba(255,255,255,1)",
    fontSize: 14
  },
  utvaldaPris: {
    fontFamily: "Arial",
    color: "rgba(105,105,105,1)",
    fontSize: 14
  }
});

export default Main