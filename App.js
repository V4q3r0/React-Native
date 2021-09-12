import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

//Esté comentario es una prueba.

export default function App() {
  const [vlrPres, setVlrPres] = React.useState(null);
  const [tipPres, setTipPres] = React.useState(null);
  const [numCuo, setNumCuo] = React.useState(null);
  const [vlrCuo, setVlrCuo] = React.useState(null);
  const [total, setTotal] = React.useState(null);

  const CalcularCouta = () => {
    let intereses;
    if (parseFloat(vlrPres) > 4000000) {
      if (parseFloat(numCuo) > 0) {
        switch (tipPres) {
          case 'c':
          intereses = vlrPres * 0.5 / 100;
          setVlrCuo(vlrPres / numCuo + intereses);
          break;
          case 'e':
          intereses = vlrPres * 0.7 / 100;
          setVlrCuo(vlrPres / numCuo + intereses);
          break;
          case 'v':
          intereses = vlrPres * 1.5 / 100;
          setVlrCuo(vlrPres / numCuo + intereses);
          break;
          case 'l':
          intereses = vlrPres * 2.0 / 100;
          setVlrCuo(vlrPres / numCuo + intereses);
          break;
          default:
            alert("El tipo de presupuesto indicado no existe!!");
            setTipPres('');
        }
      }
      else {
        alert("El número de cuotas debe ser mayor de 0.");
      }
    }
    else {
      alert("El valor de préstamo debe ser mayor a 4'000.000.");
    }
  }
  const CalcularTotal = () => {
    let intereses;
    if (parseFloat(vlrPres) > 4000000) {
      if (parseFloat(numCuo) > 0) {
        switch (tipPres) {
          case 'c':
          intereses = vlrPres * 0.5 / 100;
          setTotal(parseFloat(vlrCuo) * 12);
          break;
          case 'e':
          intereses = vlrPres * 0.7 / 100;
          setTotal(parseFloat(vlrCuo) * 12);
          break;
          case 'v':
          intereses = vlrPres * 1.5 / 100;
          setTotal(parseFloat(vlrCuo) * 12);
          break;
          case 'l':
          intereses = vlrPres * 2.0 / 100;
          setTotal(parseFloat(vlrCuo) * 12);
          break;
          default:
            alert("El tipo de presupuesto indicado no existe!!");
            setTipPres('');
        }
      }
      else {
        alert("El número de cuotas debe ser mayor de 0.");
      }
    }
    else {
      alert("El valor de préstamo debe ser mayor a 4'000.000.");
    }
  }
  const Limpiar = () => {
    setVlrPres('');
    setTipPres('');
    setNumCuo('');
    setVlrCuo('');
    setTotal('');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Simulador de prestamo:</Text>
      <br />
      <br />
      <Text style={styles.text}>Valor préstamo: </Text>
      <TextInput
        style={styles.input}
        onChangeText={setVlrPres}
        value={vlrPres}
      />
      <br />
      <br />
      <Text style={styles.text}>Tipo préstamo: </Text><Text>(c=vivienda, e=educación, v=vehículo, l=libre inversión)</Text>
      <TextInput
        style={styles.input}
        onChangeText={setTipPres}
        value={tipPres}
      />
      <br />
      <br />
      <Text style={styles.text}>Número cuotas: </Text>
      <TextInput
        style={styles.input}
        onChangeText={setNumCuo}
        value={numCuo}
      />
      <br />
      <br />
      <Text style={styles.text}>Valor cuota: </Text>
      <TextInput
        style={styles.input}
        onChangeText={setVlrCuo}
        value={vlrCuo}
      />
      <Button
        title="Calcular"
        onPress={CalcularCouta}
      />
      <br />
      <br />
      <Text style={styles.text}>Total deuda: </Text>
      <TextInput
        style={styles.input}
        onChangeText={setTotal}
        value={total}
      />
      <br />
      <br />
      <Button
        title="Calcular"
        onPress={CalcularTotal}
      />
      <br />
      <Button
        title="Limpiar campos"
        onPress={Limpiar}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 25
  },
  input: {
    border: "solid 1px black",
    borderRadius: 10,
    width: 200,
    height: 40
  },
  text: {
    fontWeight: 'bold'
  }
});
