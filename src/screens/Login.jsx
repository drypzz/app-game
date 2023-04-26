import { useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import styles from '../ui/styles';

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
  
    function handleLogin() {
      if (email !== '' && senha !== '') {
        signInWithEmailAndPassword(auth, email, senha)
          .then((userCredential) => {
            console.log('Usuário logado com sucesso!');
            navigation.navigate('Game');
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        console.log('Insira todas as informações');
      }
    }
  
    return (
      <View style={styles.container}>
        <View style={styles.contentBox}>
          <View
            style={{
              padding: 25,
              backgroundColor: 'rgba( 0, 0, 0, 0.09)',
              shadowColor: '#ccc',
              shadowOffset: { width: 0, height: 12 },
              borderRadius: 12,
            }}>
            <TextInput
              label='Email'
              mode='outlined'
              value={email}
              onChangeText={setEmail}
              placeholder='Digite...'
            />
            <TextInput
              label='Senha'
              mode='outlined'
              value={senha}
              onChangeText={setSenha}
              placeholder='Digite...'
              secureTextEntry={true}
            />
            <Button
              style={styles.btnRegister}
              labelStyle={{ color: '#fff' }}
              onPress={handleLogin}>
              Entrar
            </Button>
            <View style={{margin: 5}}>
              <Button style={styles.btnPage} labelStyle={{ color: '#fff' }} onPress={() => {navigation.navigate("Register")}}>
                Não tem uma conta? Registre-se
              </Button>
            </View>
          </View>
        </View>
      </View>
    );
  }