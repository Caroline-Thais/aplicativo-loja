import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

function Pagamentos( { navigation } ) {
    return (
        
        <View style={styles.container}>
            <Text>Aceitamos</Text>
            
            <Image style = {{margin: 10, width: 50, height: 50, resizeMode: 'contain'}}
            source={{
                uri: 'https://www.dsgadvogados.com.br/wp-content/uploads/2017/02/boleto-banc%C3%A1rio-aliexpress.jpg'               
            }}
            />
            <Image style = {{margin: 10, width: 50, height: 40, resizeMode: 'contain'}}
            source={{
                uri: 'https://blog.sirena.app/hubfs/LOGO%20Pay-Pal.png'               
            }}
            />
            <Image style = {{margin: 10, width: 50, height: 40, resizeMode: 'contain'}}
            source={{
                uri: 'https://assets.b9.com.br/wp-content/uploads/2016/07/mastercard-novo-logo.jpg'               
            }}
            />
            <Image style = {{margin: 10, width: 50, height: 40, resizeMode: 'contain'}}
            source={{
                uri: 'http://www.bh1.com.br/wp-content/uploads/2018/05/logomarca-visa.gif'               
            }}
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

export default Pagamentos;