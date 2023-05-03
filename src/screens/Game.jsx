import { useState, useEffect } from 'react';
import { Text, View, Image, Button } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SelectDropdown from 'react-native-select-dropdown';

import styles from '../ui/styles';
import { mock, resultMock } from '../components/datas';

import { app, db } from '../config/firebase';
import { addDoc, collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

export default function Games({ navigation }) {

  const [getData, setData] = useState(null);
  const [getTable, setTable] = useState(0);
  const [getScore, setScore] = useState(0);
  const [getStyle, setStyle] = useState(styles.null);

  const [getSelectedValue, setSelectedValue] = useState('none');

  function getLoadTable() {
    return setData(mock[getTable])
  };

  function getAllTables() {
    return (mock.length - 1)
  };

  function setResetTable() {
    setTable(0)
    setScore(0)
    setSelectedValue('none')
    setStyle(styles.null)
  };

  function getCheckInfos() {
    if (getSelectedValue !== 'none') {

      if (getSelectedValue === getData?.models) {
        console.log('Acertou!');
        setTable((getTable === getAllTables() ? 0 : getTable + 1));
        setScore(getScore + 1);
        setStyle((getTable === getAllTables() ? styles.null : styles.success));
        if (getData?.id === (getAllTables() + 1)) {
          setPointsInToFirebase();
        };
      } else {
        console.log('Errou!');
        setTable((getTable === getAllTables() ? 0 : getTable + 1));
        setStyle((getTable === getAllTables() ? styles.null : styles.error));
        if (getData?.id === (getAllTables() + 1)) {
          setPointsInToFirebase();
        };
      };
    } else {
      console.log('Seleciona uma opção!');
    };
  };

  async function setPointsInToFirebase() {

    const auth = getAuth();
    const user = auth.currentUser;

    if (user !== null) {

      var nameU = null

      console.log('Usuário logado', user.uid);

      const usersRef = collection(db, 'users');
      const q = query(usersRef, where('uid', '==', user.uid));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0];
        const userData = userDoc.data();

        nameU = userData.name
      } else {
        console.log('User not found');
      };

      const docRef = addDoc(collection(db, 'game-points'), {
        points: (getScore) + '/10',
        dataDeRegistro: new Date(),
        name: nameU,
        email: user.email,
        uid: user.uid
      }).then((docRef) => {
        console.log('Pontos cadastrados com sucesso', docRef.id)
        setResetTable()
      }).catch((error) => {
        console.log(error);
      });
    } else {
      console.log('Não foi possível cadastrar os pontos');
    };
  };

  async function setLogOut() {
    const auth = getAuth();

    await auth.signOut()
      .then(() => {
        console.log('Usuário deslogado com sucesso!');
        navigation.navigate('Logar-se');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getLoadTable(getTable);
  }, [getTable]);

  return (
    <View style={styles.container}>

      <View style={{ margin: 5 }}>
        <Text style={styles.title}>
          Qual é o Modelo do veículo?
        </Text>
      </View>

      <View style={styles.card}>

        <View style={styles.cardItem}>
          <Text>{getData?.id}/{getAllTables() + 1}</Text>
        </View>

        <View style={styles.cardItem}>
          <Image source={{ uri: getData?.img }} style={{ width: 300, height: 300 }} />
        </View>

        <View style={styles.cardItem}>
          <SelectDropdown
            data={resultMock} onSelect={(selectedItem, index) => {
              return (setSelectedValue(selectedItem))
            }}
            defaultButtonText={'Selecione uma opção'}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            buttonStyle={styles.pickerBtnStyle}
            buttonTextStyle={styles.pickerBtnTxtStyle}
            renderDropdownIcon={isOpened => {
              return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#FFF'} size={18} />;
            }}
            dropdownIconPosition={'right'}
            dropdownStyle={styles.pickerDropdownStyle}
            rowStyle={styles.pickerRowStyle}
            rowTextStyle={styles.pickerRowTxtStyle}
            selectedRowStyle={styles.pickerSelectedRowStyle}
          />
        </View>

        <View style={styles.cardItem}>
          <Button title={getTable >= getAllTables() ? 'Inicio' : 'Proximo'} onPress={() => getCheckInfos()} />
        </View>
        <View style={styles.cardItem}>
          <Button title='Resetar' onPress={() => setResetTable()} />
        </View>

        <View style={styles.cardItem}>
          <Text style={getStyle}>Acertos: {getScore}/10</Text>
        </View>

      </View>

      <View style={styles.cardItem}>
        <Button title='Log-out' onPress={() => setLogOut()} />
      </View>

    </View>
  );
};