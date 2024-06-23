const database = 'BD3-NoSQL-AtlasMongoDB';

const collection = "bd3-nosql-atv6";

use(database);

db[collection].findOne({
  'cpf': '333.333.333-03'
}, {
  'cod_aluno' : 0
})