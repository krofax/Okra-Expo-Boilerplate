import React, { useState } from 'react';
 import {
   Alert,
   SafeAreaView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';

import { Okra } from 'react-native-okra-webview';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Okra.BuildWithOptions
        token="5da6358130a943486f33dced"
        okraKey="7d9d39f0-23a0-5b93-8603-6c03fb0e02c5"
        env="production"
        products={["auth", "identity", "balance", "transaction"]}
        name={'tobi the builder'}
        onSuccess={(e)=>{
            console.log("success>>>>", e)
        }}
        onError={(e)=>{
        }}
        onClose={(e)=>{
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
