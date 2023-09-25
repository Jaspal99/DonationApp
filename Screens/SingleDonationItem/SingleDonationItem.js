import React from 'react';

import style from './style';
import {useSelector} from 'react-redux';
import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import BackButton from '../../Components/BackButton/BackButton';
import globalStyle from '../../Assets/Styles/GlobalStyles';
import Badge from '../../Components/Badge/Badge';
import Header from '../../Components/Header/Header';
import Button from '../../Components/Button/Button';

const SingleDonationItem = ({navigation, route}) => {
  const donationItemInformation = useSelector(
    state => state.donations.selectedDonationInformation,
  );
  // console.log(donationItemInformation);
  const categoryInformation = route.params.categoryInformation;
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false} style={style.container}>
        <BackButton onPress={() => navigation.goBack()} />
        <Image
          source={{uri: donationItemInformation.image}}
          style={style.image}
        />
        <View style={style.badge}>
          <Badge title={categoryInformation.name} />
        </View>
        <Header type={1} title={donationItemInformation.name} />
        <Text style={style.description}>
          {donationItemInformation.description}
        </Text>
      </ScrollView>
      <View style={style.button}>
        <Button title={'Donate'} />
      </View>
    </SafeAreaView>
  );
};

export default SingleDonationItem;
