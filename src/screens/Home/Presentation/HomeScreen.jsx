import React, { useEffect } from 'react';
import { View, FlatList, ActivityIndicator, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ListItem from '../Component/ListComponent';
import styles from '../Style/Style';
import HomeScreenLogic from '../Data/FunctionalLogic';

const HomeScreenUI = () => {
  const navigation = useNavigation();
  const { isLoading, products, fetchData } = HomeScreenLogic();

  useEffect(() => {
    fetchData();
  }, []);

  const handlePostPress = (item) => {
    navigation.navigate('Details', { item });
  };

  const renderItem = ({ item }) => (
    <Pressable onPress={() => handlePostPress(item)}>
      <ListItem item={item} />
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <View style={styles.listItem}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <FlatList
            data={products}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
          />
        )}
      </View>
    </View>
  );
};

export default HomeScreenUI;
