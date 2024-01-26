# Desafio processo seletivo tinnova

1 Exercicio 1 escrita dps cenários do front do banco 

Validar obrigatoridade do campo destino
Validar obrigatoriedade do campo valor
Validar obrigatoriedade do campo data efetivação
Validar data efetivação anterior ao dia de atual
Validar data efetivação superior o dia atual
Validar transferência com cliente destino invalida
Validar tranfêrencia com um valor negativo
Validar transfêrencia com um valor acima do saldo
Validar tranfêrencia com um valor abaixo do saldo
Validar tranfêrencia com todo o saldo
Validar tranfêrencia com o saldo zerado
Validar data efetivação com um formato invalido
Validar cliente destino atingindo o limite de digitos
Validar validar o valor maximo do valor permitido
Validar tranfêrencia com mesmo valor no mesmo dia
Validar cancelar a tranfêrencia

2 - Escrita do sql

* Criação das tabelas
  
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

* Adicionando constraints
  
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

* Inserindo registros
  
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

* Query resolvendo os exercicios

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
