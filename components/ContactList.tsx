import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ContactList() {
  const users = [
    {
      id: '1',
      name: 'John Doe',
      status: 'Active',
      image: 'https://i.pravatar.cc/150?u=1',
    },
    {
      id: '2',
      name: 'Jane Smith',
      status: 'Inactive',
      image: 'https://i.pravatar.cc/150?u=2',
    },
    {
      id: '3',
      name: 'Alice Johnson',
      status: 'Active',
      image: 'https://i.pravatar.cc/150?u=3',
    },
    {
      id: '4',
      name: 'Bob Brown',
      status: 'Active',
      image: 'https://i.pravatar.cc/150?u=4',
    },
    {
      id: '5',
      name: 'Emily Davis',
      status: 'Inactive',
      image: 'https://i.pravatar.cc/150?u=5',
    },
    {
      id: '6',
      name: 'Michael Johnson',
      status: 'Active',
      image: 'https://i.pravatar.cc/150?u=6',
    },
    {
      id: '7',
      name: 'Sarah Miller',
      status: 'Active',
      image: 'https://i.pravatar.cc/150?u=7',
    },
    {
      id: '8',
      name: 'David Wilson',
      status: 'Inactive',
      image: 'https://i.pravatar.cc/150?u=8',
    },
    {
      id: '9',
      name: 'Linda Martinez',
      status: 'Active',
      image: 'https://i.pravatar.cc/150?u=9',
    },
    {
      id: '10',
      name: 'Robert Taylor',
      status: 'Active',
      image: 'https://i.pravatar.cc/150?u=10',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <View style={styles.container}>
        {users.map(user => (
          <View key={user.id} style={styles.userCard}>
            <Image source={{uri: user.image}} style={styles.userImage} />
            <View>
              <Text style={styles.userName}>{user.name}</Text>
              <Text style={styles.userStatus}>{user.status}</Text>
            </View>
          </View>
        ))}
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
  container: {
    flex: 1,
    gap: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 60,
  },
  userName: {
    fontSize: 17,
    lineHeight: 19,
    fontWeight: '600',
  },
  userStatus: {
    fontSize: 14,
    fontStyle: 'italic',
  },
});
