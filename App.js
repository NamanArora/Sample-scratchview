/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight  
} from 'react-native';
import SketchView from 'react-native-sketch-view';

class App extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={{flex:1, flexDirection: 'column'}}>
                <SketchView 
                sketchStyle={{height:180, left: 50, top: 200, width: 250, backgroundColor: 'gray'}}
                textStyle={{position: 'absolute',color: 'gray' , fontSize: 50,height:180, left: 120, marginTop: 240, width: 250}}
                text="yolo">
              </SketchView>
            </View>
        );
    }
}

export default App;