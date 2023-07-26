import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { useRouter } from 'expo-router';

import Logo from '../src/assets/logo.svg'
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import { useEffect } from 'react';
import { api } from '../src/lib/api';

export default function App() {
  const router = useRouter()

  const discovery = {
    authorizationEndpoint: 'https://github.com/login/oauth/authorize',
    tokenEndpoint: 'https://github.com/login/oauth/access_token',
    revocationEndpoint: 'https://github.com/settings/connections/applications/828413a7fe47cec734b5',
  };

  const [request, response, signInWithGithub] = useAuthRequest(
    {
      clientId: '828413a7fe47cec734b5',
      scopes: ['identity'],
      redirectUri: makeRedirectUri({
        scheme: 'cleberSpace'
      }),
    },
    discovery
  );

  async function handleOAuthCode(code: string) {
    const response = await api.post('/register', { code })

    const { token } = response.data

    await SecureStore.setItemAsync('token', token)

    router.push('/memories')

  }

  useEffect(() => {
    // console.log(makeRedirectUri({
    //   scheme: 'cleberSpace'
    // }));
    if (response?.type === 'success') {
      const { code } = response.params;
      handleOAuthCode(code)
    }
  }, [response]);

  return (
    <View style={[styles.container, { padding: 34 }]}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Logo />
        <View style={{ justifyContent: 'space-between' }}>
          <Text style={
            [styles.title,
            styles.gray50,
            { textAlign: 'center', fontSize: 24, margin: 20 }
            ]}>Sua cápsula do tempo</Text>

          <Text
            style={[styles.body, styles.gray100, { fontSize: 16, textAlign: 'center' }]}>Colecione momentos marcantes da sua jornada e compartilhe (se quiser) com o mundo </Text>
        </View>
        <View style={{ height: 40, width: 200, marginTop: 20 }}>
          <TouchableOpacity
            onPress={() => signInWithGithub()}
            activeOpacity={0.6}
            style={[styles.button, { flex: 1, justifyContent: 'flex-end', alignItems: 'center' }]}
          >
            <Text style={[styles.alt, { textTransform: 'uppercase', textAlignVertical: 'top', height: 20 }]}>
              Cadastrar Lembrança
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={[styles.gray100, { textAlign: 'center', fontSize: 10, }]}>
        Feito por Cleberton Kobay dos Santos
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  gray50: {
    color: '#eaeaea'
  },
  gray100: {
    color: '#bebebf'
  },
  title: {
    fontFamily: 'Roboto_700Bold',
  },
  body: {
    fontFamily: 'Roboto_400Regular'
  },
  alt: {
    fontFamily: 'BaiJamjuree_700Bold'
  },
  button: {
    borderRadius: 25,
    backgroundColor: '#04d361',
    paddingBottom: 12,
    paddingTop: 20,
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