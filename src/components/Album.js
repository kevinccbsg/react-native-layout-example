import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const thumbSize = 50;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  thumbImage: {
    borderRadius: thumbSize / 2,
    width: thumbSize,
    height: thumbSize,
  },
  textContainer: {
    flex: 1,
    padding: 5,
  },
  textTitle: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  textName: {
    fontSize: 12,
  },
  image: {
    flex: 1,
    //width: 250,
    height: 250,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

const Album = (props) => (
  <Card>
    <CardSection>
      <View style={styles.header}>
        <Image
          style={styles.thumbImage}
          source={{ uri: props.thumbnail_image }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.textTitle}>{props.title}</Text>
          <Text style={styles.textName}>{props.artist}</Text>
        </View>
      </View>
    </CardSection>
    <CardSection>
      <Image
        style={styles.image}
        source={{ uri: props.image }}
      />
    </CardSection>
    <CardSection>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => props.clickHandler(props.url)}
          title="Buy album"
          color="#3F51B5"
          accessibilityLabel="Buy album"
        />
      </View>
    </CardSection>
  </Card>
);

export default Album;
