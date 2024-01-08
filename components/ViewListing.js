import React, { useEffect, useState } from 'react'
import { Dimensions, Image, StyleSheet, View, StatusBar, Text, ActivityIndicator } from "react-native";
import FlatListSlider from './FlatListSlider';
import getListing from '../api/getListing';

const url = "https://firebasestorage.googleapis.com/v0/b/blocket-88664.appspot.com/o/test1%2F121975204_3722461431131361_7733342220503000105_o.jpg?alt=media&token=a3bad256-07fa-4f4e-9cf1-41f416df8588"

const ViewListing = (props) => {

    console.log(props.route.params);

    const initialImage = [{image: props.route.params.image}];
    
    const [data, setData] = useState(props.route.params);

    async function fetchData() {
        setData(await getListing(props.route.params.id));
    }

    useEffect(() => {
        fetchData();
    }, [])

    const screenWidth = Math.round(Dimensions.get('window').width);

    return (
        <View style={styles.container}>
                  <View>
                    <StatusBar animated barStyle="light-content" />
                    <FlatListSlider
                        data={initialImage}
                        imageKey={'image'}
                        local={false}
                        width={screenWidth}
                        separator={0}
                        loop={false}
                        autoscroll={false}
                        onPress={item => alert(JSON.stringify(item))}
                        indicator
                        animation
                    />
                    <Text style={styles.titel}>{data.title}</Text>
                    <Text style={styles.pris}>{data.price}kr</Text>
                    <Text style={styles.beskrivning2}>Beskrivning</Text>
                    <Text style={styles.beskrivning}>{data.desc}</Text>
                    <Text style={styles.saljes}>Säljes av</Text>
                    {data.creator === undefined ? (
                      <ActivityIndicator/>
                    ) : (
                      <Text style={styles.namn}>{data.creator.firstName + " " + data.creator.lastName}</Text>
                    )}
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "rgba(36,36,36,1)"
    },
    rect3: {
      width: 375,
      height: 284,
      borderRadius: 5
    },
    beskrivning: {
      fontFamily: "Arial",
      color: "rgba(105,105,105,1)",
      fontSize: 14,
      marginLeft: 20
    },
    pris: {
      fontFamily: "Arial",
      color: "rgba(255,255,255,1)",
      fontSize: 14,
      marginLeft: 20
    },
    titel: {
      fontFamily: "Arial",
      color: "rgba(255,255,255,1)",
      fontSize: 20,
      marginTop: 10,
      marginLeft: 20
    },
    beskrivning2: {
      fontFamily: "Arial",
      color: "rgba(255,255,255,1)",
      fontSize: 14,
      marginTop: 44,
      marginLeft: 20
    },
    namn: {
      fontFamily: "Arial",
      color: "rgba(255,255,255,1)",
      fontSize: 20,
      marginLeft: 20
    },
    saljes: {
      fontFamily: "Arial",
      color: "rgba(105,105,105,1)",
      fontSize: 14,
      marginTop: 100,
      marginLeft: 20
    },
  });

export default ViewListing