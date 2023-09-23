import {SafeAreaView, Text, View} from 'react-native';
import globalStyle from '../../Assets/Styles/GlobalStyles';
import Header from '../../Components/Header/Header';
import Button from '../../Components/Button/Button';
import Tab from '../../Components/Tab/Tab';

export default function Home() {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <Header title={'Jaspal S.'} type={1} />
      <Button
        title={'Donate'}
        onPress={() => {
          console.log('Pressed me');
        }}
      />
      <Tab title={'Tab1'} isInactive={true} />
      <Tab
        title={'Tab2'}
        onPress={() => {
          console.log('Pressed Tab');
        }}
      />
      {/* <Button title={'Donate'} isDisabled={true} /> */}
    </SafeAreaView>
  );
}
