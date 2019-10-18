import * as React from "react";
import { View, Dimensions, ScrollView, Text } from "react-native";
import styles from "./style";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { TabOneContainer } from "./TabOne";
import { TabTwoContainer } from "./TabTwo";
import { Row } from "react-native-easy-grid";

export const AcceptTicket = props => {
  return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.welcome}>
              Accept Ticket Screen
            </Text>
            <Text style={styles.instructions}>
              To get started, edit App.js
            </Text>
            <Text style={styles.instructions}>
              {'Show Details'}
            </Text>
            <View style={styles.bottomSpaces}>
            <Row size={1}>
              <TabView
                navigationState={props.payload}
                renderScene={SceneMap({
                  1: () => <TabOneContainer ticketList={props.payload.ticketList}/>,
                  2: () => <TabTwoContainer />
                })}
                renderTabBar={props => (
                   <TabBar
                    {...props}
                    inactiveColor={styles.inactiveTab}
                    activeColor={styles.activeTab}
                    renderLabel={this._renderLabel}
                    getLabelText={({ route: { title } }) => title}
                    indicatorStyle={styles.indicator}
                    tabStyle={styles.tabStyle}
                    style={styles.tab}
                  />
                )}
                onIndexChange={index => props.tabonIndexChange(index)}
                initialLayout={{ width: Dimensions.get("window").width }}
              />
            </Row>
          </View>
        </ScrollView>
      </View>
  );
};
