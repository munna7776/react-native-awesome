import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCard() {
  return (
    <View>
      <Text style={styles.headingText} >Elevated Card</Text>
      <ScrollView horizontal style={styles.container} >
        <View style={[styles.elevatedCard, styles.cardOne]}>
            <Text style={styles.text}>Tap 1</Text>
        </View>
        <View style={[styles.elevatedCard, styles.cardTwo]}>
            <Text style={styles.text}>Tap 2</Text>
        </View>
        <View style={[styles.elevatedCard, styles.cardThree]}>
            <Text style={styles.text}>Tap 3</Text>
        </View>
        <View style={[styles.elevatedCard, styles.cardFour]}>
            <Text style={styles.text}>Tap 4</Text>
        </View>
        <View style={[styles.elevatedCard, styles.cardOne]}>
            <Text style={styles.text}>Tap 5</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        borderColor: "#fff",
        borderWidth: 1,
        padding: 10,
        marginHorizontal: 10,
        marginTop: 10,
        borderRadius: 5,
        textAlign: "center",
        fontSize: 17,
        lineHeight: 19,
        fontWeight: "500",
        color: "#fff"
    },
    container: {
        flex: 1,
        paddingVertical: 10,
        marginHorizontal: 10,
    },
    elevatedCard: {
        width: 100,
        height: 100,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        borderColor: "#fff",
        borderWidth: 1,
        marginRight: 8
    },
    cardOne: {
        backgroundColor: "#104547",
        elevation: 10,
        shadowColor: "red",
        shadowOffset: {
            width: 1,
            height: 1,
        }
    },
    cardTwo: {
        backgroundColor: "#4b5358"
    },
    cardThree: {
        backgroundColor: "#727072"
    },
    cardFour: {
        backgroundColor: "#af929d"
    },
    text: {
        color: "#fff"
    }
})