import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';

import styles from '../ui/styles';

import * as Animatable from 'react-native-animatable';

export default function Login({ navigation }) {
  const [getEmail, setEmail] = useState('');
  const [getPassword, setPassword] = useState('');

  const [isloading, setLoading] = React.useState('login')
  const [isloadingBol, setLoadingBol] = React.useState(false)

  const [getTextButton, setTextButton] = React.useState('Entrar');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate('Game');
      }
    });
    return unsubscribe;
  }, [])


  function handleLogin() {
    if (getEmail !== '' && getPassword !== '') {
      setLoading('loading')
      setLoadingBol(true)
      setTextButton('Carregando...')
      setTimeout(() => {
        signInWithEmailAndPassword(auth, getEmail, getPassword)
          .then((userCredential) => {
            console.log('Usuário logado com sucesso!');
            navigation.navigate('Game');
            setEmail('');
            setPassword('');
            setLoading('login')
            setLoadingBol(false)
            setTextButton('Entrar')
          })
          .catch((error) => {
            console.log(error);
            setLoading('login')
            setLoadingBol(false)
            setTextButton('Entrar')
          });
      }, 1000);
    } else {
      console.log('Insira todas as informações');
    }
  }

  return (
    <View style={styles.container}>

      <Animatable.View animation='fadeInUp' delay={500} style={{ width: '90%', justifyContent: 'center', alignItems: 'center' }}>

        <View style={styles.form}>

          <View style={styles.formContent}>
            <Text style={styles.title}>
              Logar-se
            </Text>
          </View>

          <View style={styles.formContent}>
            <TextInput styles={styles.input} label={'Email'} placeholder={'Digite...'} value={getEmail} onChangeText={setEmail} mode='outlined' />
          </View>

          <View style={styles.formContent}>
            <TextInput styles={styles.input} label={'Senha'} placeholder={'Digite...'} value={getPassword} secureTextEntry={true} onChangeText={setPassword} mode='outlined' />
          </View>

          <View style={styles.formContent}>
            <Button icon={isloading} disabled={isloadingBol} loading={isloadingBol} style={styles.formButton} labelStyle={{ color: '#fff' }} onPress={handleLogin}>
              {getTextButton}
            </Button>
          </View>

          <View style={styles.formContent}>
            <Text>
              Não tem uma conta?{' '}<Text style={{ color: '#1E90FF' }} onPress={() => navigation.navigate('Registrar-se')}>Cadastre-se.</Text>
            </Text>
          </View>

        </View>

      </Animatable.View>

    </View>
  );
};