import {SafeAreaView, Text, View} from 'react-native';
import globalStyle from '../../Assets/Styles/GlobalStyles';

export default function Home() {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <View>
        <Text>Home Screen</Text>
      </View>
    </SafeAreaView>
  );
}
