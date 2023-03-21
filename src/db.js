import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase({
  name: 'database.db',
  location: 'default',
});

db.transaction((tx) => {
  tx.executeSql(
    'CREATE TABLE IF NOT EXISTS produtos (id INTEGER PRIMARY KEY AUTOINCREMENT, codigo TEXT, descricao TEXT,categoria TEXT, preco REAL);',
    [],
    () => {
      console.log('Tabela de produtos criada com sucesso.');
    },
    (error) => {
      console.log('Erro ao criar tabela de produtos:', error);
    }
  );
});