const database = 'BD3-NoSQL-AtlasMongoDB';
const collection = 'bd3-nosql-atv6';

use(database);


db['bd3-nosql-atv6'].insertMany(
    [
        {
            "cod_aluno": "01",
            "aluno": "João da Silva",
            "cpf": "111.111.111-01",
            "rg": "1234567",
            "tel_aluno": "1111-1111",
            "tel_responsavel": "0000-0000",
            "data_nascimento": "2005-01-15"
        },
        {
            "cod_aluno": "02",
            "aluno": "Maria Oliveira",
            "cpf": "222.222.222-02",
            "rg": "2345678",
            "tel_aluno": "2222-2222",
            "tel_responsavel": "0000-0000",
            "data_nascimento": "2006-03-20"
        },
        {
            "cod_aluno": "03",
            "aluno": "Pedro Santos",
            "cpf": "333.333.333-03",
            "rg": "3456789",
            "tel_aluno": "3333-3333",
            "tel_responsavel": "0000-0000",
            "data_nascimento": "2007-05-25"
        },
        {
            "cod_aluno": "04",
            "aluno": "Ana Souza",
            "cpf": "444.444.444-04",
            "rg": "4567890",
            "tel_aluno": "4444-4444",
            "tel_responsavel": "0000-0000",
            "data_nascimento": "2008-07-30"
        },
        {
            "cod_aluno": "05",
            "aluno": "Carlos Pereira",
            "cpf": "555.555.555-05",
            "rg": "5678901",
            "tel_aluno": "5555-5555",
            "tel_responsavel": "0000-0000",
            "data_nascimento": "2009-09-05"
        },
        {
            "cod_aluno": "06",
            "aluno": "Juliana Lima",
            "cpf": "666.666.666-06",
            "rg": "6789012",
            "tel_aluno": "6666-6666",
            "tel_responsavel": "0000-0000",
            "data_nascimento": "2010-11-10"
        },
        {
            "cod_aluno": "07",
            "aluno": "Fernando Costa",
            "cpf": "777.777.777-07",
            "rg": "7890123",
            "tel_aluno": "7777-7777",
            "tel_responsavel": "0000-0000",
            "data_nascimento": "2011-01-15"
        },
        {
            "cod_aluno": "08",
            "aluno": "Sônia Oliveira",
            "cpf": "888.888.888-08",
            "rg": "8901234",
            "tel_aluno": "8888-8888",
            "tel_responsavel": "0000-0000",
            "data_nascimento": "2012-03-20"
        },
        {
            "cod_aluno": "09",
            "aluno": "Rafael Almeida",
            "cpf": "999.999.999-09",
            "rg": "9012345",
            "tel_aluno": "9999-9999",
            "tel_responsavel": "0000-0000",
            "data_nascimento": "2013-05-25"
        }
    ]
)