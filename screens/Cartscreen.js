import React, { useContext } from 'react';
import { Text, View, StyleSheet, Image, TouchableHighlight, Alert,TextInput  } from 'react-native';
import { Card, ListItem, Button,} from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Context } from '../context/cinecontext';

export default function Cartscreen({navigation}) {
  const { comprar,compra,eliminacion_total,calcular } = useContext(Context);

  return (
    <View>
    
      
      <Text style={{textAlign: 'center', fontSize: 20, padding: 4}}>{compra.nombre} ({compra.idioma})</Text>
      <Text style={{textAlign: 'center', fontSize: 20, padding: 4}}>{compra.horario}</Text>
       <TextInput
        style={{textAlign: 'center', fontSize: 20, padding: 4}}
        placeholder="Inserte Cantidad"
        keyboardType="numeric"
        onChangeText={(e)=>calcular(e,compra)}
               
      />
      <Text style={{textAlign: 'center', fontSize: 20, padding: 4}}>Total: ${compra.total}</Text>
      <Button 
              style={styles.container}
              buttonStyle={{ backgroundColor: 'rgba(39, 39, 39, 1)' }}
              title="Cancelar"
              onPress={(e)=>0}
             
             />
             <Button
              style={styles.container}
              buttonStyle={{ backgroundColor: 'rgba(39, 39, 39, 1)' }}
               title="Compra"
              onPress={()=> navigation.navigate('Cartelera')}
             />
    
     
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'flex-end',
    padding: 24,
    flexDirection: 'colum',
  },
});