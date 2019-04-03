
import Toast from 'react-native-root-toast';

let toast; //全局作用域下使用let是否有意义？

export const toastShort = (content) => {
  if (toast !== undefined) {
    Toast.hide(toast);
  }
  toast = Toast.show(content.toString(), {
    duration: Toast.durations.SHORT, //显示时间为短
    position: Toast.positions.BOTTOM,//显示位置
    shadow: true,
    animation: true,
    hideOnPress: true,
    delay: 0
  });
};

export const toastLong = (content) => {
  if (toast !== undefined) {
    Toast.hide(toast);
  }
  toast = Toast.show(content.toString(), {
    duration: Toast.durations.LONG,  //显示时间为长
    position: Toast.positions.BOTTOM,//显示位置
    shadow: true,
    animation: true,
    hideOnPress: true,
    delay: 0
  });
};
