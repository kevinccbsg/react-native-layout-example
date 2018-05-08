import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => (
  <View style={styles.viewStyle}>
    <Text style={styles.textStyle}>{props.text}</Text>
  </View>
);

const styles = {
  textStyle: {
    fontSize: 20,
  },
  viewStyle: {
    backgroundColor: '#F8F8F8',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0, height: 2,
    },
    shadowOpacity: 0.9, 
  }
};

export default Header;
