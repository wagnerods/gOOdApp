const createProduct = (codigo, descricao,categoria, preco) => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          'INSERT INTO produtos (codigo, descricao,categoria, preco) VALUES (?, ?, ?);',
          [codigo, descricao,categoria, preco],
          (tx, results) => {
            resolve(results.insertId);
          },
          (error) => {
            reject(error);
          }
        );
      });
    });
  };

