import React, {useEffect, useState} from 'react';
import {Divider} from '@rneui/base/dist/Divider';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  SafeAreaView,
  FlatList,
} from 'react-native';
import LogoSearch from '../../components/home/LogoSearch';
import FilterButtonTabs from '../../components/home/FilterButtonTabs';
import Boards from '../../components/home/Boards';
import {BOARDS} from '../../data/boards';
import axios from 'axios';

// 게시글 가져오기 :  /api/boards/list/{userid}  인풋 : userId, categoryCode, order?categorycode=””
function HomeScreen({navigation}) {

  const [filterName, setFilterName] = useState('전체');
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    (async () => {
      // const {data} = await axios.get("님들 서버 URL");
      setBoards(BOARDS);
    })();
  }, []);



  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <LogoSearch navigation={navigation}></LogoSearch>
        <Divider width={0.5}></Divider>
        <FilterButtonTabs filterName = {filterName} setFilterName={setFilterName} />
        <Divider width={0.5}></Divider>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={boards}
          renderItem={({item}) => (
            <Boards board={item} boards={boards} setBoards={setBoards} navigation={navigation}></Boards>
          )}
          keyExtractor={board => board.board_id}>
        </FlatList>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    height: 30,
    marginBottom: 5,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
  scrollContainer: {
    container: {
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      height: 30,
      marginBottom: 5,
    },
  },
  textFocused: {
    color: '#FF7171',
  },
  textNotFocused: {},
});
export default HomeScreen;
