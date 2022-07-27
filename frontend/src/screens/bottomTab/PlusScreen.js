import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { Divider } from '@rneui/themed';
import React, { useState , useRef} from 'react'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import NoCheckInput from '../../components/signUp/NoCheckInput';
import InputLabel from '../../components/signUp/InputLabel';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import schema from '../../components/board/BoardValidation';



export default function PlusScreen({navigation}) {
    const inputRef = useRef([]);
    const [titleStyle, setTitleStyle] = useState(styles.blurInput);
    const [argu1Style, setArgu1Style] = useState(styles.blurInput);
    const [argu2Style, setArgu2Style] = useState(styles.blurInput);

    console.log({errors})
    const {
      handleSubmit,
      control,
      formState: {errors},
      getValues
    } = useForm({
      mode: 'onChange',
      defaultValues: {
        title: '',
        argu1: '',
        argu2: '' 
      },
      resolver: yupResolver(schema),
    });

    const onSubmit = data => {
      console.log(data)
    };

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView style={{}}>
                {/* 논쟁등록/주의사항*/}
                <View style={{alignItems: 'center', marginTop: '5%'}}>
                    <View>
                        <Text style={ styles.registArgu }>논쟁등록</Text>
                    </View>
                    <View>
                        <Text style={ styles.warning }>※성별, 지역, 정치 논쟁은 그 내용과 관계없이 삭제됩니다.</Text>
                    </View> 
                    <Divider orientation="vertical" />
                </View>
                
                {/* 논쟁, 1/2안 입력 */}
                <View style={{marginTop: '5%'}}>
                    <InputLabel name="논쟁" star="*"/>
                    <NoCheckInput
                        // placeholder='논쟁을 입력해주세요'
                        control={control}
                        style={titleStyle}
                        setStyle={setTitleStyle}
                        property="title"
                        errorMessage={errors.title ? errors.title.message : ''}
                        styles={styles}
                        inputRef={inputRef}
                        index={0}>
                    </NoCheckInput>
                    <InputLabel name="1안" star="*" />
                    <NoCheckInput
                        control={control}
                        style={argu1Style}
                        setStyle={setArgu1Style}
                        property="argu1"
                        errorMessage={errors.argu1 ? errors.argu1.message : ''}
                        styles={styles}
                        inputRef={inputRef}
                        index={0}> 
                    </NoCheckInput>
                    <InputLabel name="2안" star="*" />
                    <NoCheckInput
                        control={control}
                        style={argu2Style}
                        setStyle={setArgu2Style}
                        property="argu2"
                        errorMessage={errors.argu2 ? errors.argu2.message : ''}
                        styles={styles}
                        inputRef={inputRef}
                        index={0}>
                    </NoCheckInput>
                </View>

              {/* 미리보기 -> 카드 제대로 만들면 다시해야함!!*/}
              <View style={{}}>
                  <Divider orientation="vertical" style={{ marginTop: '2.5%'}} />
                  <Text style={styles.preview}> PREVIEW </Text>
                  <View style={styles.card}>
                      <Text style={{textAlign: 'center'}}>{getValues('title')}</Text>
                      <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                          <Text>{getValues('argu1')}</Text>
                          <Text> | </Text>
                          <Text>{getValues('argu2')}</Text>
                      </View>
                  </View>
                  <Divider orientation="vertical" style={{ marginVertical: '7%' }} />
              </View>
              

              {/* 등록 버튼 */}
              <View style={{ alignItems: 'center', marginVertical: '3%'}}>
                  <TouchableOpacity
                      style={styles.checkButton}
                      onPress={handleSubmit(onSubmit)}>
                      <Text style={styles.buttonText}>등록</Text>
                  </TouchableOpacity>
            </View>
        </KeyboardAwareScrollView>
    </View>

    )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingTop: '1%',
    paddingHorizontal: '5%',
    backgroundColor: 'white',
    height: '100%'
  },
  registArgu: {
    fontWeight: 'bold',
    marginBottom: '3%'
  },
  warning: {
    color: 'red',
    marginBottom: '3%'
  },
  preview: {
    textAlign: 'center',
    marginVertical: '5%'
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    marginHorizontal: '10%',
  },
  focusInput: {
    width: '100%',
    backgroundColor: 'white',
    borderColor: 'black',
    paddingVertical: 0,
    paddingHorizontal: '2%',
    height: '100%',
    borderRadius: 4,
    borderWidth: 1.5,
  },
  blurInput: {
    width: '100%',
    borderColor: '#808080',
    paddingVertical: 0,
    paddingHorizontal: '2%',
    height: '100%',
    borderRadius: 4,
    borderWidth: 1,
  },
  focusHalfInput: {
    width: '100%',
    backgroundColor: 'white',
    borderColor: 'black',
    paddingVertical: 0,
    paddingHorizontal: '4%',
    height: '100%',
    borderRadius: 4,
    borderWidth: 1.5,
  },
  blurHalfInput: {
    width: '100%',
    borderColor: '#808080',
    paddingVertical: 0,
    paddingHorizontal: '4%',
    height: '100%',
    borderRadius: 4,
    borderWidth: 1,
  },
  errorText: {
    color: '#FF7171',
    fontSize: 10,
    fontWeight: 'bold',
    marginLeft: '1%',
    marginVertical: 2,
  },
  checkButton: {
    marginBottom: '5%',
    width: '23%',
    color: 'white',
    backgroundColor: '#FF7171',
    borderRadius: 6,
    justifyContent: 'center',
    paddingVertical: '2.5%'
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Bold',
    textAlign: 'center',
    fontSize: 15,
  },
})
