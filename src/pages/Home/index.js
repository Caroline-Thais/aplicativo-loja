import React from 'react';
import { View, Text, Button, Image } from 'react-native';

function Home( { navigation } ) {
    return (     
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: "pink" }}>
            <Text style={{fontSize: 30}}>Loja Bazzaar</Text>
            <Text style={{alignItems: 'center', paddingBottom: 20}}>Feminina, modesta e elegante.</Text>   
           
            <Text>Vestidos a partir R$87</Text>
            <View style={{backgroundColor: "#FF3E96", flexDirection: 'row', justifyContent: 'space-evenly'}}>
            
            <Image style = {{margin: 10, width: 100, height: 150, resizeMode: 'contain'}}
            source={{
                uri: 'https://i.pinimg.com/736x/c6/b7/d4/c6b7d4f0fa29724668245fbb062e084c.jpg'
            }}/>
            
            <Image style = {{margin: 10, width: 100, height: 150, resizeMode: 'contain'}}
            source={{
                uri: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/176/973/products/a62a49b4-00fa-45e2-867e-3736974b10a21-c3f06b49d306b871b916163065241997-1024-1024.jpeg'               
            }}
            />
            
            <Image style = {{margin: 10, width: 100, height: 150, resizeMode: 'contain'}}
            source={{
                uri: 'https://i.pinimg.com/originals/0f/ac/47/0fac47b8fc46b687e9564a9f0d4f4153.jpg'               
            }}
            />
            
        </View>
        <Text>Saias a partir R$50</Text>
        <View style={{backgroundColor: "#FF82AB", flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <Image style = {{margin: 10, width: 100, height: 150, resizeMode: 'contain'}}
            source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmMvZEiK0qBut8n8YWXFYSbyMy1KAHDloAs5JrvvTKAZuldXAEazuZ3p8pT3by-Dv-Z6tdGl0BPg&usqp=CAc'
                
            }}/>
            
            <Image style = {{margin: 10, width: 100, height: 150, resizeMode: 'contain'}}
            source={{
                uri: 'data:image/jpeg;base64,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'               
            }}
            />
            
            <Image style = {{margin: 10, width: 100, height: 150, resizeMode: 'contain'}}
            source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRddoP5O7DilkoTJ8wER9iJoW1Ua638TSGMqCnMpiUvqwzj1yGS9GYUeqdCmrVmsTJLnxQskTC7&usqp=CAc'               
            }}
            />
        </View>
        
        <Text> Pagamentos </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            
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
        </View>
        
        
    );
}

export default Home;