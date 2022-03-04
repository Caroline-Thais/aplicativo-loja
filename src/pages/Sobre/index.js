import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function Sobre( { navigation } ) {
    return (
        <View style={styles.container}>
            <Text style={{paddingBottom: 200, margin: 30, fontSize: 15}}>Somos uma loja de roupas modestas. Nosso estilo é feminino e elegante. Temos peças exclusivas.</Text>

            <Button 
                title="Ir para Produtos"
                onPress= {() => {navigation.navigate('Produtos')}}
            />
            {/* Não funciona, pois já estamos na página sobre */}

              {/* Volta para a rota anterior */}
              <Button 
                  title="Voltar rota anterior"
                  onPress= {() => {navigation.goBack()}}
              />

        </View>
    );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'pink',
        alignItems: 'center', 		
	},

});
  

export default Sobre;