
'use strict';

import {StyleSheet, Platform} from 'react-native'; //引入Platform组件，根据操作系统选择样式

export function create(styles: Object): {[name: string]: number} {
  const platformStyles = {};
  Object.keys(styles).forEach((name) => {
    let {ios, android, ...style} = {...styles[name]};
    if (ios && Platform.OS === 'ios') {
      style = {...style, ...ios};//分别为不同系统展开不同样式
    }
    if (android && Platform.OS === 'android') {
      style = {...style, ...android}; //分别为不同系统展开不同样式
    }
    platformStyles[name] = style;
  });
  return StyleSheet.create(platformStyles);
}
