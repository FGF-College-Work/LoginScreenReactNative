import React, { Component } from 'react';
import { Router, Scene, Stack, Actions, ActionConst } from 'react-native-router-flux';

import LoginScreen from './LoginScreen';
import SecondScreen from './SecondScreen';

export default class Main extends Component{
  render() {
    return(
      <Router>
        <Stack key='root'>
          <Scene>
            <Scene key="loginScreen"
              component={LoginScreen}
              animation='fade'
              hideNavBar={true}
              initial={true}          
            />

            <Scene key="secondScreen"
              component={SecondScreen}
              animation='fade'
              hideNavBar={true}          
            />
          </Scene>
        </Stack>
      </Router>
    );
  }
}