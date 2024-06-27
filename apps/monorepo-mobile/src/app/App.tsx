/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useRef, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Linking,
} from 'react-native';
import Svg, { G, Path } from 'react-native-svg';
import { useStore } from '@store'

export const App = () => {
  const { count, increaseCount } = useStore()
  const [whatsNextYCoord, setWhatsNextYCoord] = useState<number>(0);
  const scrollViewRef = useRef<null | ScrollView>(null);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <TouchableOpacity onPress={increaseCount}>
          <Text>Incrementar</Text>
        </TouchableOpacity>
        <Text>{count}</Text>
      </SafeAreaView>
    </>
  );
};

export default App;
