import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './styles';
import { Feather } from '@expo/vector-icons';  

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [peso, setPeso] = useState('');
  const [pessoas, setPessoas] = useState<{ nome: string; peso: string }[]>([]);

  const handleCadastrar = () => {
    if (!nome || !peso) return;
    const novaPessoa = { nome, peso };
    setPessoas([...pessoas, novaPessoa]);
    setNome('');
    setPeso('');
  };

  return (
    <View style={styles.container}>
  
      <View style={styles.card}>
        <View style={styles.tituloContainer}>
          <Feather name="droplet" size={20} color="#2563eb" style={styles.icon} />
          <Text style={styles.titulo}>Cadastrar Pessoa</Text>
        </View>

        <Text style={styles.subtitulo}>Preencha os dados abaixo</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nome</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite o nome"
            value={nome}
            onChangeText={setNome}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Peso (kg)</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite o peso"
            value={peso}
            onChangeText={setPeso}
            keyboardType="numeric"
          />
        </View>

        <TouchableOpacity style={styles.botao} onPress={handleCadastrar}>
          <Text style={styles.botaoTexto}>Adicionar Pessoa</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.listaContainer}>
        <View style={styles.tituloContainer}>
          <Feather name="droplet" size={20} color="#2563eb" style={styles.icon} />
          <Text style={styles.titulo}>Pessoas Cadastradas ({pessoas.length})</Text>
        </View>

        <FlatList
          data={pessoas}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.itemNome}>{item.nome}</Text>
              <Text style={styles.itemDetalhes}>Peso: {item.peso}kg</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}
