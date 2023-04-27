import { useState, useEffect } from 'react';
import { Text, View, Image, Button } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SelectDropdown from 'react-native-select-dropdown';

import styles from '../ui/styles';
import {mock, resultMock} from '../components/datas';

export default function Games() {

  const [ getData, setData ] = useState(null)
  const [ getTable, setTable ] = useState(0)
  const [ getScore, setScore ] = useState(0)
  const [ getStyle, setStyle ] = useState(styles.null)

  const [ getSelectedValue, setSelectedValue ] = useState('none');

  function getLoadTable(){
    return setData(mock[getTable])
  }

  function getAllTables(){
    return (mock.length - 1)
  }

  function setResetTable(){
    setTable(0)
    setScore(0)
    setStyle(styles.null)
  }

  function getCheckInfos(){
    if(getSelectedValue !== 'none'){
      if(getData?.id === (getAllTables() + 1)){
        setResetTable()
        setSelectedValue('none')
      }else{
        if(getSelectedValue === getData?.models){
          console.log('Acertou!')
          setTable((getTable === getAllTables() ? 0 : getTable + 1))
          setScore(getScore + 1)
          setStyle((getTable === getAllTables() ? styles.null : styles.success))
        }else{
          console.log('Errou!')
          setTable((getTable === getAllTables() ? 0 : getTable + 1))
          setStyle((getTable === getAllTables() ? styles.null : styles.error))
        }
      }
    }else{
      console.log('Seleciona uma opção!')
    }
  }

  useEffect(() => {
    getLoadTable( getTable )
  }, [getTable])

  return (
    <View style={styles.container}>

      <View style={{margin: 5}}>
        <Text style={styles.title}>
          Qual é o Modelo do veículo?
        </Text>
      </View>

      <View style={styles.card}>
        
        <View style={styles.cardItem}>
          <Image source={{uri: getData?.img}} style={{width: 300, height: 300}} />
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

    </View>
  );
}