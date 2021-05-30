import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import i18n from 'i18n-js';

import { RootStackParamList } from '../../types';
import styles from './NotFoundScreen.styles';

export default function NotFoundScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'NotFound'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{i18n.t('common.notFoundScreen.screenDoesNotExist')}</Text>
      <TouchableOpacity onPress={() => navigation.replace('Root')} style={styles.link}>
        <Text style={styles.linkText}>{i18n.t('common.notFoundScreen.goToHomeScreen')}</Text>
      </TouchableOpacity>
    </View>
  );
}
