import { useState, useEffect } from 'react';
import { Text, View, Image, Dimensions, Button, Picker } from 'react-native';
import styles from './src/ui/styles'

const mock = [
  {
    'id': 1,
    'name': 'BMW',
    'models': 'X6',
    'color': 'Black',
    'img': 'https://s2.glbimg.com/c6ltPw5xvMGec2lLaRdcXPqESx8=/0x0:620x413/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/Z/c/4aN0UFQR2HnujfrBvpSw/2019-08-29-p90363149-highres.jpg'
  },
  {
    'id': 2,
    'name': 'Ford',
    'models': 'Focus Hatch',
    'color': 'Red',
    'img': 'https://cdn.motor1.com/images/mgl/pokXJ/s1/ford-focus-hatch-brasil.jpg'
  },
  {
    'id': 3,
    'name': 'VolksWagen',
    'models': 'Gol G4',
    'color': 'Black',
    'img': 'https://img.olx.com.br/images/69/693223695226797.jpg'
  },
  {
    'id': 4,
    'name': 'Hyundai',
    'models': 'i30',
    'color': 'White',
    'img': 'https://s2.glbimg.com/veP-G8uMCxkNMbVMP5ZS_nWE0ZM=/0x0:620x400/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/g/Q/Al5m7gTCGv9bB0vFmgbA/2014-02-18-hyundaii30-12.jpg'
  },
  {
    'id': 5,
    'name': 'Toyota',
    'models': 'Corolla',
    'color': 'Blue',
    'img': 'https://s3.sa-east-1.amazonaws.com/revista.mobiauto/Toyota/Corolla/2024+Europa/Toyota+Corolla+2024+dianteira+esquerda+Europa.jpg'
  },
  {
    'id': 6,
    'name': 'Toyota',
    'models': 'Supra MK4',
    'color': 'Black',
    'img': 'https://i.pinimg.com/736x/25/f5/49/25f549d75bb0e6332d6f48f8e201493c.jpg'
  },
  {
    'id': 7,
    'name': 'McLaren',
    'models': 'P1',
    'color': 'Black',
    'img': 'https://upload.wikimedia.org/wikipedia/commons/c/c8/McLaren_P1.jpg'
  },
  {
    'id': 8,
    'name': 'Ferrari',
    'models': 'F40',
    'color': 'Red',
    'img': 'https://s2.glbimg.com/8uypzeS3J2w8GOPdGXgwAVhJCTY=/0x0:1920x1244/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2023/B/k/9exR2VQJCHzdaxWxGJGQ/ferrari-toto-1.jpg'
  },
  {
    'id': 9,
    'name': 'Mazda',
    'models': 'RX7',
    'color': 'Blue',
    'img': 'https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2020/08/08/draft/8329135.jpg&x=0&y=0&sw=0&sh=0&sl=W&fw=1050'
  },
  {
    'id': 10,
    'name': 'Mercedes-Benz',
    'models': 'Maybach S650',
    'color': 'Green',
    'img': 'https://i.insider.com/5f80b317ea74820019ca6505?width=700'
  }
]

export default function App() {

  const [ getData, setData ] = useState(null)
  const [ getTable, setTable ] = useState(0)
  const [ getScore, setScore ] = useState(0)
  const [ getStyle, setStyle ] = useState(styles.null)

  function getLoadTable(){
    return setData(mock[getTable])
  }

  function getMockLength(){
    return (mock.length - 1)
  }

  function getCheckInfos(){
    if(getSelectedValue !== 'none'){
      if(getSelectedValue === getData?.models){
        console.log('Acertou!')
        setTable((getTable === getMockLength() ? 0 : getTable + 1))
        setSelectedValue('none')
        setScore((getScore >= 0 ? getScore + 1 : 0))
        setStyle(styles.success)
      }else{
        console.log('Errou!')
        setTable((getTable === getMockLength() ? 0 : getTable + 1))
        setSelectedValue('none')
        setStyle(styles.error)
      }
    }else{
      console.log('Selecione uma opção')
    }
  }

  useEffect(() => {
    getLoadTable( getTable )
  }, [getTable])

  const dimensions = Dimensions.get('window');
  const imageHeight = Math.round(dimensions.width * 10 / 15);
  const imageWidth = dimensions.width;

  const [ getSelectedValue, setSelectedValue ] = useState('none');

  return (
    <View style={styles.body}>
      <View>
        <Image source={{uri: getData?.img}} style={{width: imageWidth, height: imageHeight}} />
        
        <Picker selectedValue={getSelectedValue} style={{ height: 50, width: 150 }} onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
          <Picker.Item label='Selecione...' value='none' />
          <Picker.Item label='Corolla' value='Corolla' />
          <Picker.Item label='Focus Hatch' value='Focus Hatch' />
          <Picker.Item label='F40' value='F40' />
          <Picker.Item label='Gol G4' value='Gol G4' />
          <Picker.Item label='i30' value='i30' />
          <Picker.Item label='Maybach S650' value='Maybach S650' />
          <Picker.Item label='P1' value='P1' />
          <Picker.Item label='RX7' value='RX7' />
          <Picker.Item label='Supra MK4' value='Supra MK4' />
          <Picker.Item label='X6' value='X6' />
        </Picker>

        <Button title={getTable >= 9 ? 'Inicio' : 'Proximo'} onPress={() => getCheckInfos()} />

        <Text style={getStyle}>Acertos: {getScore}/10</Text>
      </View>
    </View>
  );
}
