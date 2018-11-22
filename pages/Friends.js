import React from 'react';
import {StyleSheet, Button, View} from 'react-native';

export default class Friends extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          Add Friends here!
          <Button
            title="Back to Home"
            onPress={()=> navigate('Home')}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
