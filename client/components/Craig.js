import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import * as Progress from 'react-native-progress';
import { Button } from 'react-native';

//importing networking
window.navigator.userAgent = 'react-native'; //this NEEDS to be placed before importing socket io
import io from 'socket.io-client/dist/socket.io';

export default class Craig extends React.Component {
  constructor(props) {
    super(props);
    // Creating the socket-client instance will automatically connect to the server.
    this.socket = io('http://10.42.0.219:8080/');
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => {
            this.socket.emit('command', 1);
          }}
          title="Blink"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  },
});
