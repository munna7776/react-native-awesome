import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText} >Trending Places</Text>
      <View style={[styles.card, styles.elevatedCard]} >
        <Image 
            source={{
                uri: "https://images.unsplash.com/photo-1617516202907-ff75846e6667?q=80&w=1929&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
            style={styles.cardImage}
        />
        <View style={styles.cardBody} >
            <Text style={styles.cardTitle} >Hawa Mahal</Text>
            <Text style={styles.cardLabel} >Pink City, Jaipur</Text>
            <Text style={styles.cardDescription} >The Hawa Mahal is a palace in the city of Jaipur, Rajasthan, India. Built from red and pink sandstone</Text>
            <Text style={styles.cardFooter} >12 minutes away</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        padding: 10,
        fontSize: 27,
        fontWeight: "700",
        lineHeight: 31,
    },
    card: {
        width: 350,
        borderRadius: 6,
        marginHorizontal: 10,
        marginBottom: 20,
    },
    elevatedCard: {
        backgroundColor: "#fff",
        elevation: 4,
        shadowOffset: {
            height: 10,
            width: 10
        }
    },
    cardImage: {
        height: 180,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
    },
    cardBody: {
        padding: 10,
        flex: 1,
        gap: 4
    },
    cardTitle: {
        color: "#414141",
        fontSize: 23,
        fontWeight: "700",
    },
    cardLabel: {
        color: "#414141",
        fontSize: 14,
        fontStyle: "italic",
    },
    cardDescription: {
        color: "#414141",
        fontSize: 16,
        fontWeight: "500"
    },
    cardFooter: {
        color: "#414141",
        fontSize: 14,
        fontStyle: "italic",
        marginTop: 10,
    }
})