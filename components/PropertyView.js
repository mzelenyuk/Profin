"use strict";

import React, { Component } from "react";
import { StyleSheet, Image, View, Text } from "react-native";

export default class PropertyView extends Component {
  static navigationOptions = {
    title: "Property"
  };

  render() {
    const { params } = this.props.navigation.state;

    var property = params.property;
    var stats = property.bedroom_number + " bed " + property.property_type;
    var price = property.price_formatted.split(" ")[0];

    if (property.bathroom_number) {
      stats += ", " + property.bathroom_number + " " + (
          property.bathroom_number > 1 ? "bathrooms" : "bathroom"
        );
    }

    return (
      <View>
        <Image style={styles.image} source={{uri: property.img_url}}/>

        <View style={styles.heading}>
          <Text style={styles.price}>{price}</Text>
          <Text style={styles.title}>{property.title}</Text>
          <View style={styles.separator}/>
        </View>

        <Text style={styles.description}>{stats}</Text>
        <Text style={styles.description}>{property.summary}</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  heading: {
    backgroundColor: "#F8F8F8"
  },
  separator: {
    height: 1,
    backgroundColor: "#DDDDDD"
  },
  image: {
    height: 300
  },
  price: {
    fontSize: 25,
    fontWeight: "bold",
    margin: 5,
    color: "#48BBEC"
  },
  title: {
    fontSize: 20,
    margin: 5,
    color: "#656565"
  },
  description: {
    fontSize: 18,
    margin: 5,
    color: "#656565"
  }
});
