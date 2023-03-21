import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { listarCategorias, criarCategoria } from './categorias';

function ListaCategorias() {
  const [categorias, setCategorias] = useState([]);
  const [novaCategoria, setNovaCategoria] = useState('');

  useEffect(() => {
    const listaDeCategorias = listarCategorias();
    setCategorias(listaDeCategorias);
  }, []);

  function handleNovaCategoria() {
    criarCategoria({ nome: novaCategoria });
    const listaDeCategoriasAtualizada = listarCategorias();
    setCategorias(listaDeCategoriasAtualizada);
    setNovaCategoria('');
  }

  return (
    <View>
      {categorias.map((categoria) => (
        <Categoria key={categoria.id} id={categoria.id} />
      ))}

      <Text>Nova categoria:</Text>
      <TextInput
        value={novaCategoria}
        onChangeText={(valor) => setNovaCategoria(valor)}
      />
      <Button title="Criar categoria" onPress={handleNovaCategoria} />
    </View>
  );
}