import { useState } from 'react';
import { auth } from '../config/firebase';
import { View, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import styles from '../ui/styles';

export default function Register({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [senhac, setSenhac] = useState('');

  function handleRegister() {
    if (nome !== '' && email !== '' && senha !== '' && senhac !== '') {
      if (senha !== senhac) {
        return console.log('Senha não confere');
      }
      createUserWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
          console.log('Usuário cadastrado com sucesso');
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log('Preencha todas as informções');
      return;
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.contentBox}>
        <TextInput
          styles={styles.input}
          label={'Nome'}
          placeholder={'Digite...'}
          value={nome}
          onChangeText={setNome}
          mode='outlined'
        />
        <TextInput
          styles={styles.input}
          label={'Email'}
          placeholder={'Digite...'}
          value={email}
          onChangeText={setEmail}
          mode='outlined'
        />
        <TextInput
          styles={styles.input}
          label={'Senha'}
          placeholder={'Digite...'}
          value={senha}
          secureTextEntry={true}
          onChangeText={setSenha}
          mode='outlined'
        />
        <TextInput
          styles={styles.input}
          label={'Confirmar Senha'}
          placeholder={'Digite...'}
          value={senhac}
          secureTextEntry={true}
          onChangeText={setSenhac}
          mode='outlined'
        />
        <Button
          style={styles.btnRegister}
          labelStyle={{ color: '#fff' }}
          onPress={handleRegister}
        >
          Registrar
        </Button>
      </View>
    </View>
  );
}