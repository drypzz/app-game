import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    // geral
    container:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },

    // card
    card: {
      padding: 5,
      backgroundColor: 'rgba(0, 0, 0, .1)',
    },
    cardItem:{
      margin: 10,
    },

    // msg
    null:{
      color: '#000',
    },
    error:{
      color: 'red',
    },
    success:{
      color: 'green',
    },
    pickeritem:{
      color: '#000',
      backgroundColor: '#000',
    },

    // Picker
    pickerBtnStyle: {
      width: '100%',
      height: 40,
      backgroundColor: 'rgb(33, 150, 243)',
      borderRadius: 5,
    },
    pickerBtnTxtStyle: {
      color: '#FFF',
      textAlign: 'center',
      fontWeight: 'bold',
    },
    pickerDropdownStyle: {
      backgroundColor: 'rgb(33, 150, 243)',
      borderRadius: 2,
    },
    pickerRowStyle: {
      backgroundColor: 'rgb(33, 150, 243)',
      borderBottomColor: '#C5C5C5',
      padding: 10,
    },
    pickerRowTxtStyle: {
      color: '#FFF',
      textAlign: 'left',
      fontWeight: 'bold',
    },
    pickerSelectedRowStyle: {
      backgroundColor: 'rgba(255,255,255,0.2)',
    },

    //Rgeister
    contentBox: {
      padding: 25,
      borderRadius: 12,
      shadowColor: '#ccc',
      shadowOffset: { width: 0, height: 12 },
      backgroundColor: 'rgba(0, 0, 0, 0.09)',
    },
    input:{
      margin: 5,
    },
    btnRegister:{
      marginTop: '10px',
      backgroundColor: 'rgb(33, 150, 243)',
      borderRadius: '5px',
    },
    btnPage:{
      backgroundColor: 'rgb(33, 150, 243)',
      borderRadius: '5px',
      padding: '2px',
    }
});

export default styles;
