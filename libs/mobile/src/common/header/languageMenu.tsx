import { useLang, useStore } from '@shared';
import { ILanguageOptions } from '@types';
import * as React from 'react';
import { Platform, View } from 'react-native';
import { Menu, Icon, Text } from 'react-native-paper';

const LanguageMenu = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const selectedLang = useStore((state) => state.lang);
  const { options, changeLanguage } = useLang();
  const currentLanguageLabel =
    options.find((lang) => lang.value === selectedLang)?.label || '';
  const isIOS = Platform.OS === 'ios';
  const openMenu = () => setIsOpen(true);

  const closeMenu = () => setIsOpen(false);

  const onPressItem = (value: ILanguageOptions) => {
    changeLanguage(value);
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
              <Text style={{ marginEnd: 10 }}>{currentLanguageLabel}</Text>
              <Icon source="web" size={25} />
            </View>
          </Text>
        }
      >
        {options.map(({ value, label }) => {
          return (
            <Menu.Item key={`lang_${value}`} onPress={() => onPressItem(value)} title={label} />
          );
        })}
      </Menu>
    </View>
  );
};

export default LanguageMenu;
