import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button, Image, TouchableOpacity, Alert } from "react-native";

function App() {
  const [img, setImg] = useState(require('./src/img/biscoito.png'))
  const [textoFrase, setTextoFrase] = useState('')

  const listaFrases = [
    'Sonhos são caminhos construídos pelo coração...',
    'Impossível é uma palavra que serve só de enfeite no dicionário.',
    'Você é beleza, luz e força.',
    'Dias nublados guardam o sol atrás deles.',
    'Um dia bonito começa com um barril de esperança e um café de otimismo.',
    'Permita que o seu corpo descanse.',
    'Por trás de um dia difícil, há uma versão forte de você que sempre seguiu em frente.',
    'Mudar pode dar medo, mas é uma aventura que pode te levar muito longe.',
    'Tem uma força dentro de você que é capaz de sempre te surpreender!',
    'Tenha coragem para se tornar aquilo que sonha.',
    'É tão bonita a força que você emana.',
    'Resista àqueles dias que querem esconder tudo de bom que já fizemos até hoje.',
    'Essa mensagem tem um único objetivo: te ver sorrindo.',
    'Minha missão na vida não é apenas sobreviver, mas prosperar.',
    'Olhe para o céu e escute as mensagens de Deus para hoje!',
    'Jamais se esqueça: você é o motivo do sorriso de muitas pessoas.',
    'Quando olhar para o espelho, não se esqueça de enxergar tudo o que já fez até hoje.',
    'As estrelas estão atrás das nuvens, mas elas continuam ali.',
  ]


  function quebraBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * listaFrases.length)
    setTextoFrase(' " ' + listaFrases[numeroAleatorio] + ' " ')
    setImg(require('./src/img/biscoitoAberto.png'))
  }

  function reiniciar() {
    setImg(require('./src/img/biscoito.png'))
    setTextoFrase('')
  }

  return (
    <View style={styles.container}>

      <Image
        style={styles.img}
        source={img}
      />

      <Text style={styles.textFrase}>{textoFrase}</Text>

      <TouchableOpacity style={styles.botao} onPress={quebraBiscoito}>
        <Text style={styles.text}>Quebrar Biscoito</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={reiniciar}>
        <Text style={styles.text}>Zerar Biscoito</Text>
      </TouchableOpacity>

    </View>
  )

  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center'
  },
  img:{
    width: 300,
    height: 300,
    marginBottom: 20
  },
  botao:{
    marginTop: 10,
    backgroundColor: '#121212',
    width: 180,
    height: 50,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text:{
    fontSize: 19,
    color: '#fff'
  },
  textFrase:{
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic'
  }

})

export default App;


