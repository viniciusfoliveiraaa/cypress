# Desafio processo seletivo tinnova

* 1 escrita dos cenários do front do banco 

Cenario: Validar obrigatoridade do campo destino
```
   Dado que eu estou na tela de trasferência
   Quando não preencer o campo destino
   Então exibir mensagem dizendo que o campo é obrigatório
```

Cenario: Validar obrigatoriedade do campo valor
```
   Dado que eu estou na tela de trasferência
   Quando não preencer o campo valor
   Então exibir mensagem dizendo que o campo é obrigatório
```

Cenário: Validar obrigatoriedade do campo data efetivação
```
   Dado que eu estou na tela de trasferência
   Quando não preencer o campo data efetivação
   Então exibir mensagem dizendo que o campo é obrigatório
```

Cenário: Validar data efetivação anterior ao dia de atual
```
   Dado que eu estou na tela de trasferência
   Quando preencher a data da efetivação anterior ao dia atual
   Então exibir mensagem não permitindo a transfêrencia
```

Cenário: Validar data efetivação superior o dia atual

```
   Dado que eu estou na tela de trasferência
   Quando preencher a data da efetivação anterior ao dia atual
   Então exibir mensagem do agendamento da tranfêrencia
```
Cenário: Validar transferência com cliente destino invalida

```
   Dado que eu estou na tela de trasferência
   Quando preencher o cliente destino invalido
   Então exibir mensagem de o cliente é invalido
```
Cenário: Validar tranfêrencia com um valor negativo

```
   Dado que eu estou na tela de trasferência
   Quando preencher as informações para transfêrencia com um valor negativo
   Então exibir mensagem não que não pode tranferir um valor negativo
```
Cenário: Validar transfêrencia com um valor acima do saldo

```
   Dado que eu estou na tela de trasferência
   E tenho saldo na conta
   Quando preencher as informações da transferência porém com valor superior ao saldo
   Então exibir mensagem de saldo insuficiente
```
Cenário: Validar tranfêrencia com um valor abaixo do saldo

```
   Dado que eu estou na tela de trasferência
   Quando preencher as informações da transfêrencia com valor abaixo do saldo
   Então exibir mensagem de tranferencia com sucesso
```
Cenário: Validar tranfêrencia com todo o saldo

```
   Dado que eu estou na tela de trasferência
   Quando preencher as informações de transfêrencia
   E transferir todo o saldo
   Então exibir o saldo zerado
```
Cenário: Validar tranfêrencia com o saldo zerado

```
   Dado que eu estou na tela de trasferência
   E estou com saldo zerado
   Quando preencher as informações de transferência 
   Então exibir o saldo negativo
```
Cenário: Validar data efetivação com um formato invalido

```
   Dado que eu estou na tela de trasferência
   Quando preencher a data da efetivação com um formato inválido
   Então exibir a mensagem de data inválida
```
Cenário: Validar cliente destino atingindo o limite de digitos

```
   Dado que eu estou na tela de trasferência
   Quando preencher o cliente destino atingindo o limite de caracteres
   Então exibir mensagem deve limnite de caracteres estourado
```
Cenário: Validar o valor maximo do valor permitido

```
   Dado que eu estou na tela de trasferência
   Quando preencher o valor atingindo seu maximo
   Então exibir mensagem a mensagem de limite excedido
```
Cenário: Validar tranfêrencia com mesmo valor no mesmo dia

```
   Dado que eu estou na tela de trasferência
   Quando realizar a mesma transação 2 vezes
   Então exibir mensagem de confirmação da operaçao
```
Cenário Validar cancelar a tranfêrencia

```
   Dado que eu estou na tela de trasferência
   Então cancelar a transfêrencia
```

* 2 - criação das tabelas  
```
CREATE TABLE ALUNO(
  coda INT NOT NULL,
  nome VARCHAR(50) NOT NULL,
  ano DATE NOT null
);

CREATE TABLE DISCIPLINA (
  
  codd INT NOT NULL,
  nome VARCHAR(50) NOT NULL
); 

CREATE TABLE PROFESSOR (
   
   codp INT NOT NULL,
   nome VARCHAR (50),
   telefone VARCHAR (16)
);

CREATE TABLE ALUNO_DISCIPLINA
(
  id_aluno INT NOT NULL,
  id_disciplina INT NOT NULL,
  id_professor INT NOT NULL
);
```

* 3 - Adicionando constraints
  
```
ALTER TABLE ALUNO ADD CONSTRAINT PRIMARY_KEY_ALUNO PRIMARY KEY (coda);
ALTER TABLE DISCIPLINA ADD CONSTRAINT PRIMARY_ALUNO PRIMARY KEY (codd);
ALTER TABLE PROFESSOR ADD CONSTRAINT PRIMARY_PROFESSOR PRIMARY KEY (codp);
ALTER TABLE ALUNO_DISCIPLINA ADD CONSTRAINT FOREIGIN_KEY_ID_PROFESSOR_DISCIPLINA FOREIGN KEY
(id_professor) REFERENCES PROFESSOR(codp);
ALTER TABLE ALUNO_DISCIPLINA ADD CONSTRAINT FOREIGN_ALUNO_DISCIPLINA_ID_ALUNO FOREIGN KEY(id_aluno)
REFERENCES ALUNO(coda)
ALTER TABLE ALUNO_DISCIPLINA ADD CONSTRAINT FOREIGN_ALUNO_DISCIPLINA_ID_DISCIPLINA FOREIGN KEY(id_disciplina)
REFERENCES DISCIPLINA(codd); 
```

* 4 - Inserindo registros
  
```
INSERT INTO ALUNO(coda, nome, ano) VALUES(1,'Vinicius', '2021-10-11');
INSERT INTO ALUNO(coda, nome, ano) VALUES(2,'Andreia', '2000-10-11');
INSERT INTO ALUNO(coda, nome, ano) VALUES(3,'Vitor', '2005-10-11');
INSERT INTO ALUNO(coda, nome, ano) VALUES(4,'João', '2020-07-11');
INSERT INTO ALUNO(coda, nome, ano) VALUES(7,'João', '1999-07-11');

INSERT INTO PROFESSOR(codp, nome, telefone) VALUES(10,'Jonas', '954995091');
INSERT INTO PROFESSOR(codp, nome, telefone) VALUES(11,'João', '9763232101');
INSERT INTO PROFESSOR(codp, nome, telefone) VALUES(12,'Vinicius', '213456673');
INSERT INTO PROFESSOR(codp, nome, telefone) VALUES(13,'Pedro', '123435454');
INSERT INTO PROFESSOR(codp, nome, telefone) VALUES(14,'Pedro', '123435454');

INSERT INTO DISCIPLINA(codd, nome) VALUES(5,'Matematica');
INSERT INTO DISCIPLINA(codd, nome) VALUES(6,'Cáculo');
INSERT INTO DISCIPLINA(codd, nome) VALUES(7,'Cáculo');
INSERT INTO DISCIPLINA(codd, nome) VALUES(9,'Português');

INSERT INTO ALUNO_DISCIPLINA(id_aluno, id_disciplina, id_professor) VALUES (1,5, 10);
INSERT INTO ALUNO_DISCIPLINA(id_aluno, id_disciplina, id_professor) VALUES (2,6,11);
INSERT INTO ALUNO_DISCIPLINA(id_aluno, id_disciplina, id_professor) VALUES (3,6, 11);
INSERT INTO ALUNO_DISCIPLINA(id_aluno, id_disciplina, id_professor) VALUES (4,9,12);
INSERT INTO ALUNO_DISCIPLINA(id_aluno, id_disciplina, id_professor) VALUES (7,6,11);
```

* 5 - Query resolvendo os exercicios

```
/*Exericicio 1*/
SELECT a.nome FROM ALUNO a

INNER JOIN ALUNO_DISCIPLINA ad

ON  a.coda = ad.id_aluno

INNER JOIN PROFESSOR p

ON ad.id_professor = p.codp

WHERE ad.id_disciplina IN (6) AND p.nome = 'João'


/* Exercicio 2 */

SELECT COUNT(id_aluno) FROM

ALUNO_DISCIPLINA GROUP BY id_disciplina;

/* Exercicio 3*/

SELECT DISTINCT d.nome, p.nome FROM DISCIPLINA d

INNER JOIN ALUNO_DISCIPLINA ad

ON ad.id_disciplina = d.codd

INNER JOIN PROFESSOR p

ON p.codp = ad.id_professor


/*Exercicio 4*/

SELECT COUNT(codp) from PROFESSOR;

/*Exercicio 5*/

SELECT a.nome,  FROM ALUNO a

INNER JOIN ALUNO_DISCIPLINA ad

ON a.coda = ad.id_aluno

WHERE YEAR(a.ano) BETWEEN 2000 and 2020;
```

* 6 - Automação de api com cypress

```
     * request -> funções que contém as requisições e são exportadas para ser usadas nos arquivos de testes
     * payload -> são os jsons utilizados para fazer as requisições e autentificação
     * testes  -> são colocados os arquivos de testes e suas validação onde importamos as nossas requests 
```
