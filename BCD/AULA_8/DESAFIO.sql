-- Active: 1788268411059@@127.0.0.1@3306@smartcoffe_dml_livia

-- Parte A - INSERT 

-- 1. Cadastre dois novos clientes. 
INSERT INTO cliente (nome, email, telefone, cidade, ativo) VALUES
('Tiana','tiana@email.com','1999999900','Nova orleans', TRUE),
('Naaven', 'naaven@email.com', '1995799990', 'Maldonia', TRUE);

-- 2. Cadastre uma nova categoria chamada Especiais da Casa. 
INSERT INTO categorias (nome_categoria) VALUES
('Especiarias da casa');


-- 3. Cadastre três produtos na nova categoria. 
INSERT INTO produto (nome_categoria, preco, ativo, id_categoria) VALUES
('Tostadas', 15.00, TRUE, 1),
('Gumbo', 50.00, TRUE, 2),
('Jambalaia', 25.00, TRUE, 3);

-- 4. Insira um cliente sem telefone e observe o uso de NULL. 
INSERT INTO cliente (nome, email, telefone, cidade, ativo) VALUES
('Charlotte','Charlotte@email.com',NULL,'Nova orleans', TRUE);

-- 5. Crie um novo pedido para um dos clientes cadastrados.
INSERT INTO pedido (data_pedido, status_pedido, valor_total, id_cliente) VALUES
(NOW(), 'Preparando',0.00,14);

-- 6. Use LAST_INSERT_ID() para inserir pelo menos dois itens no pedido. 
SET @pedido = LAST_INSERT_ID(); --Sempre que for inserir um valor novo ele vai ser inserido apartir do ultimo 

SELECT @pedido;
INSERT INTO item_pedido (id_pedido, id_produto, quantidade, preco_unitario, observacao) VALUES
(@pedido, 4, 1, 13.00, 'Étouffée');

-- Parte B-UPDATE 

-- 7. Corrija o telefone de um dos clientes criados.
UPDATE cliente
SET telefone = '19999888801'
WHERE id_cliente = 4; 
-- 8. Altere cidade e telefone de outro cliente em um único comando. 

-- 9. Aumente em 8% os preços dos produtos da categoria criada. 
-- 10. Altere o status do novo pedido para PREPARANDO. 
-- 11. Atualize o valor_total do pedido para refletir os itens adicionados. 
-- 12. Desative um produto utilizando exclusão lógica. 

-- Parte C-DELETE 

-- 13. Crie um cliente de teste que não possua pedidos e depois exclua-o. 
-- 14. Tente excluir um cliente que possui pedidos e registre o que aconteceu. 
-- 15. Explique por que a FK protegeu o banco. 
-- 16. Crie uma categoria de teste sem produtos e depois remova-a. 





