import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Flows from '../components/flow/Flows';
import FlowScreen from '../screens/bottomTab/FlowScreen';
import YourPageScreen from '../screens/YourPageScreen';
import FollowerScreen from '../screens/FollowerScreen';
import FollowingScreen from '../screens/FollowingScreen';
import FlowBlank from '../components/flow/FlowBlank';
import PlusScreen from '../screens/bottomTab/PlusScreen';
import HeaderOptions from '../util/HeaderOptions';
import SettingScreen from '../screens/userEdit/SettingScreen';
import ProfileEditScreen from '../screens/userEdit/ProfileEditScreen';
import PasswordEditScreen from '../screens/userEdit/PasswordEditScreen';
import DetailNav from './DetailNav';
import InquiryScreen from '../screens/userEdit/InquiryScreen';
import TosScreen from '../screens/userEdit/TosScreen';
import PrivacyScreen from '../screens/userEdit/PrivacyScreen';
import UserWithdrawalScreen from '../screens/userEdit/UserWithdrawalScreen';

const Stack = createNativeStackNavigator();

export default function FlowNav() {
  return (
    <Stack.Navigator screenOptions={{headerShadowVisible: false}}>
      <Stack.Screen
        name="FlowScreen"
        component={FlowScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Flows"
        component={Flows}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailNav"
        component={DetailNav}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="YourPageScreen"
        component={YourPageScreen}
        options={HeaderOptions('')}
      />
      <Stack.Screen
        name="FollowerScreen"
        component={FollowerScreen}
        options={HeaderOptions('Follower')}
      />
      <Stack.Screen
        name="FollowingScreen"
        component={FollowingScreen}
        options={HeaderOptions('Following')}
      />
      <Stack.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={HeaderOptions('??????')}
      />
      <Stack.Screen
        name="ProfileEditScreen"
        component={ProfileEditScreen}
        options={HeaderOptions('???????????????')}
      />
      <Stack.Screen
        name="PasswordEditScreen"
        component={PasswordEditScreen}
        options={HeaderOptions('??????????????????')}
      />
      <Stack.Screen
        name="InquiryScreen"
        component={InquiryScreen}
        options={HeaderOptions('????????????')}
      />
      <Stack.Screen
        name="TosScreen"
        component={TosScreen}
        options={HeaderOptions('?????????????????????')}
      />
      <Stack.Screen
        name="PrivacyScreen"
        component={PrivacyScreen}
        options={HeaderOptions('????????????')}
      />
      <Stack.Screen
        name="UserWithdrawalScreen"
        component={UserWithdrawalScreen}
        options={{
          title: '?????? ??????',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="FlowBlank"
        component={FlowBlank}
        options={{title: '????????????????????????', headerShown: false}}
      />
      <Stack.Screen
        name="PlusScreen"
        component={PlusScreen}
        options={{title: '???????????????', headerShown: false}}
      />
    </Stack.Navigator>
  );
}
