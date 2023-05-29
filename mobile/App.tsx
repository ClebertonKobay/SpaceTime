import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree'

import blurBg from './src/assets/bgBlur.png'
import Stripes from './src/assets/stripes.svg'


export default function App() {
  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold 
  });
  if(!hasLoadedFonts)
    return null;
  return (
    <ImageBackground 
      source={blurBg} 
      style={styles.container}
      imageStyle={{position:'absolute', left:'-100%'}}
      >
        <Stripes  />
      <StatusBar style="auto" translucent />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121215',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  text:{
    color:'#eaeaea'
  },
  title:{
    fontFamily:'Roboto_700Bold',
  },
  body:{
    fontFamily:'Roboto_400Regular'
  },
  alt:{
    fontFamily:'BaiJamjuree_700Bold'
  }
});
/**
 * colors:{
        gray:{
              50  :'#eaeaea',
              100 :'#bebebf',
              200 :'#9e9ea0',
              300 :'#727275',
              400 :'#56565a',
              500 :'#2c2c31',
              600 :'#28282d',
              700 :'#1f1f23',
              800 :'#18181b',
              900 :'#121215',
        },
        purple:{
                50: '#f3eefc',
                100:'#d8cbf7',
                200:'#c6b2f3',
                300:'#ab8eee',
                400:'#9b79ea',
                500:'#8257e5',
                600:'#764fd0',
                700:'#5c3ea3',
                800:'#48307e',
                900:'#372560',
        },
        green:{
                50: '#e6fbef',
                100:'#b1f1ce',
                200:'#8cebb6',
                300:'#57e295',
                400:'#36dc81',
                500:'#04d361',
                600:'#04c058',
                700:'#039645',
                800:'#027435',
                900:'#025929',
        },
      },
 */