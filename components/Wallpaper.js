import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dimensions from 'Dimensions';
import {StyleSheet, Image} from 'react-native';

import BgSrc from '../assets/images/wallpaper.png';

export default class Wallpaper extends Component {
  render() {
    return(
      <Image style={styles.picture} source={BgSrc}>
        {this.props.children}
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  picture: {
    flex: 1,
    width: null,
    heigh: null,
    resizeMode: 'cover',
  },
});