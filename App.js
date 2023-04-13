import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import './index';

import { useTranslation } from 'react-i18next';
export default function App() {
  const { t, i18n } = useTranslation();

  const hanldeClick = () => {
    i18n.changeLanguage(i18n.language === 'zh' ? 'en' : 'zh');
  };
  return (
    <View style={styles.container}>
      <Text>{t('hellow')}</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={hanldeClick}
      >
        <Text>{t('lang')}</Text>
      </TouchableOpacity>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10
  },
  btn: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5
  }
});
