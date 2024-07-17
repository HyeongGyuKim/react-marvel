export const showTabBar = () => window.isBottomVisible?.postMessage(true);

export const hideTabBar = () => window.isBottomVisible?.postMessage(false);

export const setColorTabBarButton = ({menu = '0xff9999A0', home = '0xffDB2018', setting = '0xff9999A0'}) => {
  console.log(menu, home, setting);
  window.buttonChange?.postMessage(
    JSON.stringify([{name: 'menu', color: menu}, {name: 'home', color: home}, {name: 'setting', color: setting},]));
};

export const setActiveSettingTabBar = () => setColorTabBarButton({home: '0xff9999A0', setting: '0xffDB2018'});

export const setActiveHomeTabBar = () => setColorTabBarButton({});
