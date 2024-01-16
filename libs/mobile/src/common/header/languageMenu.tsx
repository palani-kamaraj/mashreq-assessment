import * as React from 'react';
import { I18nManager, Platform, View } from 'react-native';
import { Menu, Icon, Text } from 'react-native-paper';
import RNRestart from 'react-native-restart';
import { useLang, useStore } from '@shared';
import { ILanguageOptions } from '@types';

const LanguageMenu = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const selectedLang = useStore((state) => state.lang);
  const isLoggedInUser = useStore((state) => state.user?.username);
  const { options, changeLanguage } = useLang();
  const currentLanguageLabel =
    options.find((lang) => lang.value === selectedLang)?.label || '';
  const isIOS = Platform.OS === 'ios';
  const customStyle = isLoggedInUser ? { color: '#fff' } : {};
  const openMenu = () => setIsOpen(true);

  const closeMenu = () => setIsOpen(false);

  const onPressItem = (value: ILanguageOptions) => {
    changeLanguage(value, () => {
      I18nManager.forceRTL(value === ILanguageOptions.AR);
      RNRestart.Restart();
    });
    closeMenu();
  };

  return (
    <View
      style={{
        paddingTop: 40,
        flexDirection: isIOS ? 'row' : 'column',
        justifyContent: 'flex-end',
      }}
    >
      <Menu
        visible={isOpen}
        onDismiss={closeMenu}
        anchor={
          <Text onPress={openMenu}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text style={{ marginEnd: 10, ...customStyle }}>
                {currentLanguageLabel}
              </Text>
              <Icon color={customStyle?.color} source="web" size={25} />
            </View>
          </Text>
        }
      >
        {options.map(({ value, label }) => {
          return (
            <Menu.Item
              key={`lang_${value}`}
              onPress={() => onPressItem(value)}
              title={label}
            />
          );
        })}
      </Menu>
    </View>
  );
};

export default LanguageMenu;
