import {Image, Linking, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

export default function ActionCard() {
    function openWebiste(url: string) {
        Linking.openURL(url)
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <Text style={styles.cardTitle}>What's new in latest react?</Text>
        <Image
          source={{
            uri: 'https://www.freecodecamp.org/news/content/images/size/w2000/2023/07/React-Server-Components-2.png',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardDescription} numberOfLines={3} >
            React Server Components can fetch data faster
            as they are on the server. They have the access to your server
            infrastructure like file systems and data store without making any
            roundtrips over the network.
          </Text>
          <Text style={styles.author} >~ by Josh Comeau</Text>
          <TouchableOpacity
            onPress={() => openWebiste("https://www.joshwcomeau.com/react/server-components/")}
          >
            <Text style={styles.readMore} >Read more</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    padding: 10,
    fontSize: 27,
    fontWeight: '700',
    lineHeight: 31,
  },
  card: {
    width: 350,
    borderRadius: 6,
    marginHorizontal: 10,
    marginBottom: 20,
  },
  elevatedCard: {
    backgroundColor: '#fff',
    elevation: 4,
    shadowOffset: {
      height: 10,
      width: 10,
    },
  },
  cardImage: {
    height: 180,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody: {
    padding: 10,
    flex: 1,
    gap: 4,
  },
  cardTitle: {
    color: '#414141',
    fontSize: 19,
    fontWeight: '700',
    paddingHorizontal: 10,
    paddingVertical: 8,
    textAlign: 'center',
  },
  cardDescription: {
    color: '#333333',
    fontSize: 16,
    fontWeight: '500',
  },
  author: {
    color: "#333333",
    fontSize: 14,
    fontStyle: "italic"
  },
  readMore: {
    color: "#414141",
    padding: 6,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#414141",
    width: 100,
    textAlign: "center",
    marginTop: 6,
  }
});
