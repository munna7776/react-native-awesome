import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCard() {
  return (
    <View>
      <Text style={styles.headingText} >FlatCard</Text>
      <View style={styles.container} >
        <View style={[styles.card, styles.cardOne]} >
            <Text>Card -1</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]} >
            <Text>Card -2</Text>
        </View>
        <View style={[styles.card, styles.cardThree]} >
            <Text>Card -3</Text>
        </View>
        <View style={[styles.card, styles.cardFour]} >
            <Text>Card -4</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        borderColor: "#fff",
        borderWidth: 1,
        padding: 10,
        margin: 10,
        borderRadius: 5,
        textAlign: "center",
        fontSize: 17,
        lineHeight: 19,
        fontWeight: "500",
        color: "#fff"
    },
    container: {
        flex: 1,
        flexDirection: "row",
        gap: 10,
        paddingHorizontal: 10,
        flexWrap: "wrap"
    },
    card: {
        width: 100,
        height: 100,
        borderRadius: 10,
        // flex: 1,
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        color: "#fff"
    },
    cardOne: {
        backgroundColor: "#EF5354"
    },
    cardTwo: {
        backgroundColor: "#50DBB4"
    },
    cardThree: {
        backgroundColor: "#5DA3FA"
    },
    cardFour: {
        backgroundColor: "#3AB628"
    }
})