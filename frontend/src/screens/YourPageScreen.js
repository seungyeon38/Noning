import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Dimensions, Text, Image, TouchableOpacity, length} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import { USER } from '../data/user' 
import VoteLike from '../components/userpage/VoteLike'
import VoteDo from '../components/userpage/VoteDo'
import VoteWrite from '../components/userpage/VoteWrite'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useIsFocused } from '@react-navigation/native';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: '#FF5A6E',
      width: '8%',
      marginHorizontal: '7%',
    }}
    tabStyle={{
      paddingBottom: '10%',
      paddingTop: '1%',
    }}
    pressColor={'transparent'}
    style={{
      backgroundColor: 'white',
      shadowColor: 'white',
      borderBottomWidth: 0.3,
      borderBottomColor: '#808080',
      borderTopColor: '#808080',
      height: '10%',
    }}
    renderLabel={({route, focused}) => (
      <Text
        style={
          focused
            ? {
                color: '#FF5A6E',
                margin: 0,
                padding: 0,
                fontWeight: 'bold',
                fontSize: 15,
              }
            : {margin: 0, padding: 0, color: '#808080', fontSize: 15}
        }>
        {route.title}
      </Text>
    )}
  />
);

const initialLayout = {width: Dimensions.get('window').width};

export default function YourPageScreen({route, navigation}) {
  const [yourPageData, setYourPageData] = useState([]);
  const [index, setIndex] = useState(0);
  const id = route.params.id;
  const isFocused = useIsFocused();
  const [routes] = useState([
    {key: 0, title: '얘찜논'},
    {key: 1, title: '얘참논'},
    {key: 2, title: '얘만논'},
    
  ]);
  
  const renderScene = ({ route }) => {
    switch (route.key) {
      case 0:
        return <VoteLike navigation={navigation} id={id} />;
      case 1:
        return <VoteDo navigation={navigation} id={id}/>;
      case 2:
        return <VoteWrite navigation={navigation} id={id}/>;
      default:
        return null;
    }
  };

  useEffect(() => {
    UseAxios.get(`/users/${id}/page`).then(res => {
      setYourPageData(res.data)
      console.log(yourPageData)
    })
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <View style={{flex: 0.1}}>
        </View>
        <View style={{flex: 0.23}}>
            {/* 프로필 이미지, 팔로우/팔로워*/} 
            <View style = {{ flexDirection: "row", alignItems: 'center'}}>
                {/* 프로필 이미지 */}
                <View style={styles.profileImageBox}>
                    <View>
                        <Image source={{uri: USER.user.img}} style={styles.profileImage}/>   
                    </View>
                </View>
                {/* 팔로우/팔로워 */}
                <View style={styles.followsBox}>
                        <View style={styles.follows}>
                            <TouchableOpacity
                                onPress={() => navigation.push('FollowerScreen', {screen: 'FollowerScreen'})}>
                                <Text> follower</Text>
                                <Text style={{alignSelf: 'center'}}> 
                                    {yourPageData.followerIdList
                                    ? yourPageData['followerIdList'].length
                                    : ''}
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => navigation.push('FollowerScreen', {screen: 'FollowerScreen'})}>
                                <Text> following</Text>
                                <Text style={{alignSelf: 'center'}}> 
                                    {yourPageData.followerIdList
                                    ? yourPageData['followingIdList'].length
                                    : ''}
                                </Text>
                            </TouchableOpacity>
                        </View>

                </View>
            </View>
        </View>

        <View style={{flexDirection: 'row', flex: 0.12}}>
            {/* 닉네임, 특징 */}
            <View style={{marginStart: '5%', flex: 2}}> 
                    <View >
                        <Text style={{paddingBottom: '1.5%', fontWeight: 'bold'}}> 
                        {yourPageData.user
                        ? yourPageData.user.nickname
                        : ''}
                        </Text>{yourPageData.user
                        ?
                        <Text> 
                                {(() => {
                                    if (yourPageData.user.genderCode === "G0101") return <Text>남성</Text>
                                    else return <Text>여성</Text>
                                })()} / 
                                {(() => {
                                    if (yourPageData.user.mbti1Code === "M0101") return <Text> E</Text>
                                    else return <Text> I</Text>
                                })()}
                                {(() => {
                                    if (yourPageData.user.mbti2Code === "M0201") return <Text>N</Text>
                                    else return <Text>S</Text>
                                })()}
                                {(() => {
                                    if (yourPageData.user.mbti3Code === "M0301") return <Text>F</Text>
                                    else return <Text>T</Text>
                                })()}
                                {(() => {
                                    if (yourPageData.user.mbti4Code === "M0401") return <Text>P</Text>
                                    else return <Text>J</Text>
                                })()} / 
                                {(() => {
                                    if (yourPageData.user.ageRangeCode === "A0101") return <Text> 10대 미만</Text>
                                    else if (yourPageData.user.ageRangeCode === "A0102") return <Text> 10대</Text>
                                    else if (yourPageData.user.ageRangeCode === "A0103") return <Text> 20대</Text>
                                    else if (yourPageData.user.ageRangeCode === "A0104") return <Text> 30대</Text>
                                    else if (yourPageData.user.ageRangeCode === "A0104") return <Text> 40대</Text>
                                    else return <Text> 50대 이상</Text>
                                })()}
                        </Text>
                        : ""
                        }
                    </View>
            </View>
            <View style={{flex: 2}}>
                <TouchableOpacity style={{backgroundColor: '#FF7171', marginHorizontal: '10%', borderRadius: 10, width: '70%', height: '50%', marginTop: '2.5%' }} >
                    <Text style={{color: 'white', alignSelf: 'center', paddingTop: '3%'}} >팔로우</Text>
                </TouchableOpacity>
            </View>
        </View>

      
        <View style={{flex: 0.8}}>
            <TabView
                navigationState={{index, routes}}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={initialLayout}
                renderTabBar={renderTabBar}
            />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: '1%',
    paddingHorizontal: '2.5%',
    backgroundColor: 'white',
  },
  button: {
    alignItems: 'flex-end', flex: 0.08, marginVertical: '1.5%'
  },
  profileImageBox: {
    flex: 2,
    alignItems: 'center'
},
profileImage: {
    width: 100, 
    height: 100, 
    borderRadius: 50, 
    borderWidth: 3, 
    borderColor: 'red',
    
},
followsBox: {
    flex: 3,
},
follows: {
    flexDirection: "row", 
    justifyContent: 'space-evenly',
    marginBottom: '20%'
    
},
detail: {
  paddingTop: '0.8%',
  paddingRight: '1.5%',
  alignSelf: 'flex-end',
},

});