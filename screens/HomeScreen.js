import React, { useContext } from 'react';
import { Text, View, StyleSheet, Image, TouchableHighlight, Alert } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Context } from '../context/cinecontext';

export default function HomeScreen({navigation}) {
  const { cartelera,agregar } = useContext(Context);

  return (
    <View>
      <ScrollView>
        {cartelera.map((a, i) => (
          <Card>
            <Card.Title style={{textAlign: 'center', fontSize: 20}}>{a.nombre}</Card.Title>
            <img style={{alignItems: 'left', padding: 30}} src={a.url}/>
            <Text style={{textAlign: 'center', fontSize: 20, padding: 4}}>{a.idioma} </Text>
            <Text style={{textAlign: 'center', fontSize: 20, padding: 4}}>{a.clasificacion}</Text>
            <Text style={{textAlign: 'center', fontSize: 20, padding: 4}}>{a.duracion}</Text>
            <View style={styles.container}>
             { a.horarios.map((f)=>
             
             <Button 
              buttonStyle={{ backgroundColor: 'rgba(39, 39, 39, 1)' }}
               title={f}
             onPress={()=> {navigation.navigate('Carrito');agregar(a,f)}}
             >{f}</Button>)}
             
            </View>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'flex-end',
    padding: 10,
    flexDirection: 'colum',
  },
});
