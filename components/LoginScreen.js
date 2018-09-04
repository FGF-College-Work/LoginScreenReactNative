import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ImageBackground} from 'react-native';
import Logo from './Logo';
import Form from './Form';
import Wallpaper from './Wallpaper';
import ButtonSubmit from './ButtonSubmit';
import SignupSection from './SignupSection';

export default class LoginScreen extends Component {
  render() {
    return (
      <ImageBackground>
        <Wallpaper>
          <Logo />
          <Form />
          <SignupSection />
          <ButtonSubmit />
        </Wallpaper>
     </ImageBackground>
    );
  }
}

