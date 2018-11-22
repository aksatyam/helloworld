import React from 'react';
import {StyleSheet, Button, View} from 'react-native';

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          We have no friends!
          <Button
          title="Add some Friends"
          onPress={()=> navigate('Friends')}
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
