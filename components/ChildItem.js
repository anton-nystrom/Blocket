import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';

export default (ChildItem = ({
  item,
  style,
  onPress,
  index,
  imageKey,
  local,
  height
}) => {
  return (
    <View
      style={styles.container}
      onPress={() => onPress(index)}>
      <Image
        style={[styles.image, style, {height: height}]}
        source={local ? item[imageKey] : {uri: item[imageKey]}}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
  },
  image: {
    resizeMode: 'contain'
  },
});