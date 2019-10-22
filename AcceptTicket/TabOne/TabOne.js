import * as React from "react";
import { View, StyleSheet, Dimensions, ScrollView, Text,FlatList } from "react-native";
import styles from "./style";
import { Col, Row, Grid } from "react-native-easy-grid";
import { Headline,Caption, Avatar,Button } from "react-native-paper";

export const TabOne = props => {
  return (
    <View>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <Grid>
              {props.ticketList &&
            props.ticketList.length > 0 &&
            props.ticketList.map(
              (ticketData, index) => {
                return (
                  <Row 
                  style={styles.projectRow}
                  key={index}
                  >
                <Col style={styles.projectImgOuter}>  
                  <Avatar.Image
                    size={35}
                    source={{ uri: ticketData.image }}
                  /> 
                  <Button mode="contained" style={styles.continuebtn}>
                    <Caption style={styles.continuebtntext}>
                      <Text style={styles.instructions}>
                        {'Show Details'}
                      </Text>
                    </Caption>
                  </Button>         
                </Col>
                <Col style={styles.projectDetailSection}>
                  <Row style={styles.projectDetailOuter} size={2}>
                    <Col style={styles.projectTitleOuter}>
                      <Headline style={styles.projectTitle} numberOfLines={3}>
                        {ticketData.title}
                      </Headline>
                    </Col>
                  </Row>
                  <Row
                    style={[styles.projectDetailOuter, styles.footerSection]}
                    size={1}
                  >
                    <Col style={styles.starRating}>                               
                      <Text style={styles.starRating}>
                        <Text style={styles.Rating}>Rating { ticketData.rating }</Text>
                      </Text>
                    </Col>
                    <Col style={styles.projectRateOuter}>
                      <Text style={styles.projectRateOuterText}>Release Year { ticketData.releaseYear } </Text>
                    </Col>
                  </Row>
                </Col>
              </Row>
                );
              }
            )}  
            </Grid>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

