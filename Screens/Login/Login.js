import React, {useState} from 'react';
import {Pressable, SafeAreaView, ScrollView, View} from 'react-native';
import globalStyle from '../../Assets/Styles/GlobalStyles';
import Input from '../../Components/Input/Input';
import style from './Style';
import Button from '../../Components/Button/Button';
import Header from '../../Components/Header/Header';
import {Routes} from '../../Navigation/Routes';
// import Input from '../../components/Input/Input';

// import style from './style';
// import globalStyle from '../../assets/styles/globalStyle';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log(email);
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.container}>
        <View style={globalStyle.marginBottom24}>
          <Header type={1} title={'Welcome Back'} />
        </View>
        <View style={globalStyle.marginBottom24}>
          <Input
            keyboardType={'email-address'}
            label={'Email'}
            placeholder={'Enter your email...'}
            onChangeText={value => setEmail(value)}
          />
        </View>
        <View style={globalStyle.marginBottom24}>
          <Input
            secureTextEntry={true}
            label={'Password'}
            placeholder={'******'}
            onChangeText={value => setPassword(value)}
          />
        </View>
        <View style={globalStyle.marginBottom24}>
          <Button title={'Login'} />
        </View>
        <Pressable
          style={style.registrationButton}
          onPress={() => navigation.navigate(Routes.Registration)}>
          <Header color={'#156CF7'} type={3} title={"Don't have an account?"} />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
