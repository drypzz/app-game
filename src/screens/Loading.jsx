import { View } from 'react-native';
import { ActivityIndicator, Text } from 'react-native-paper';
import styles from '../ui/styles';

export default function Loading({ navigation }) {
    setTimeout(() => {
        navigation.navigate('Logar-se');
    }, 500);
    
    return (
        <View style={styles.container}>
            <ActivityIndicator size={20} color='rgba(33, 150, 243, .5)' />
            <Text style={{marginTop: 10,}}>Aguarde um instante...</Text>
        </View>
    );
}