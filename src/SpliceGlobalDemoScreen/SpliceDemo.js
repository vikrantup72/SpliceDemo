import React, { useState } from 'react';
import { Text, View, FlatList, Pressable, TextInput } from 'react-native';
import styles from './styles'
export default SpliceDemo=()=>{
  let [data, setData] = useState([]);
  let [search, setSearch] = useState('');

  const fetchApiCall = () => {
    fetch(
      'https://google-search3.p.rapidapi.com/api/v1/search/q='+search+'&num=5',
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'google-search3.p.rapidapi.com',
          'x-rapidapi-key':'30a79d49e4msh60149164f98a8a5p16accdjsn3726a274f766',
        },
      },
    )
      .then(response => response.json())
      .then(response => {

         setData(response.results);
        
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, marginHorizontal: 15, marginVertical: 15 }}>
        <View style={{flexDirection: 'column', alignItems: 'center' }}>
          <TextInput
            style={{ height: 40, width: '100%', borderWidth: 2, borderColor: '#e5b43b', borderRadius: 10 }}
            placeholder="Type here to search"
            onChangeText={newSearch => setSearch(newSearch)}
            value={search}
          />
          <Pressable onPress={fetchApiCall}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Search</Text>
            </View>
          </Pressable>
        </View>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View style={styles.row}>
              <Text style={{fontSize:16, color: '#573802',}}>{item.title}</Text>
              <Text style={{fontSize:16, color: '#573802',}}>{item.description}</Text>
              <Text style={{fontSize:16, color: '#573802',}}>{item.link}</Text>

            </View>
          )}
        />
      </View>
    </View>
  );
}

