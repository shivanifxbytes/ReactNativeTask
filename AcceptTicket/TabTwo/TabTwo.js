import * as React from "react";
import { View, StyleSheet, Dimensions, ScrollView, Text } from "react-native";
import styles from "./style";

export const TabTwo = props => {
  return (
    <View>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.bottomSpaces}>
            <Text style={styles.welcome}>
              Welcome to Exceptionaire!
            </Text>
            <Text style={styles.instructions}>
              ReactNative demo app - Shivani Agrawal
            </Text>
            <Text style={styles.instructions}>
              {'Working in progress...'}
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
