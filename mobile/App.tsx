import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree'

import blurBg from './src/assets/bgBlur.png'
import Stripes from './src/assets/stripes.svg'
import Logo from './src/assets/logo.svg'

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
      style={[styles.container,{padding:34}]}
      imageStyle={{position:'absolute', left:'-100%'}}
      >
        <Stripes style={{position:'absolute',left:2}} />
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
          <Logo />
          <View style={{justifyContent:'space-between'}}>
            <Text style={
              [styles.title,
              styles.gray50,
              {textAlign:'center', fontSize:24,margin:20}
              ]}>Sua cápsula do tempo</Text>

              <Text 
                style={[styles.body,styles.gray100,{fontSize:16, textAlign:'center'}]}>Colecione momentos marcantes da sua jornada e compartilhe (se quiser) com o mundo </Text>
          </View>
          <View style={{height:40,width:200,marginTop:20}}>
            <TouchableOpacity
              activeOpacity={0.6}
              style={[styles.button,{flex:1 ,justifyContent:'flex-end',alignItems:'center'}]}
            >
              <Text style={[styles.alt,{textTransform:'uppercase',textAlignVertical:'top',height:20}]}>
                Cadastrar Lembrança
              </Text>
            </TouchableOpacity>
          </View>
        </View>
              <Text style={[styles.gray100,{textAlign:'center',fontSize:10,}]}>
                Feito por Cleberton Kobay dos Santos
              </Text>
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
  gray50:{
    color:'#eaeaea'
  },
  gray100:{
    color:'#bebebf'
  },
  title:{
    fontFamily:'Roboto_700Bold',
  },
  body:{
    fontFamily:'Roboto_400Regular'
  },
  alt:{
    fontFamily:'BaiJamjuree_700Bold'
  },
  button:{
    borderRadius:25,
    backgroundColor:'#04d361',
    paddingBottom:12,
    paddingTop:20,
  },
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