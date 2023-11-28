-- MariaDB dump 10.19  Distrib 10.4.28-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: tccgme
-- ------------------------------------------------------
-- Server version	10.4.28-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `empresa`
--

DROP TABLE IF EXISTS `empresa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `empresa` (
  `idEmpresa` int(11) NOT NULL AUTO_INCREMENT,
  `descEmpresa` varchar(60) NOT NULL,
  PRIMARY KEY (`idEmpresa`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empresa`
--

LOCK TABLES `empresa` WRITE;
/*!40000 ALTER TABLE `empresa` DISABLE KEYS */;
INSERT INTO `empresa` VALUES (1,'ADS UCEFF 2023');
/*!40000 ALTER TABLE `empresa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estoque`
--

DROP TABLE IF EXISTS `estoque`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `estoque` (
  `idEmpresaREf` int(11) NOT NULL,
  `idProdutoRef` int(11) NOT NULL,
  `quantidadeProduto` float NOT NULL,
  KEY `idEmpresaREf` (`idEmpresaREf`),
  KEY `idProdutoRef` (`idProdutoRef`),
  CONSTRAINT `estoque_ibfk_1` FOREIGN KEY (`idEmpresaREf`) REFERENCES `empresa` (`idEmpresa`),
  CONSTRAINT `estoque_ibfk_2` FOREIGN KEY (`idProdutoRef`) REFERENCES `produto` (`idProduto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estoque`
--

LOCK TABLES `estoque` WRITE;
/*!40000 ALTER TABLE `estoque` DISABLE KEYS */;
INSERT INTO `estoque` VALUES (1,6,9),(1,12,11),(1,18,13),(1,24,6),(1,30,9),(1,36,14),(1,42,13),(1,48,15),(1,54,8),(1,60,6),(1,66,14),(1,72,9);
/*!40000 ALTER TABLE `estoque` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produto`
--

DROP TABLE IF EXISTS `produto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `produto` (
  `idEmpresaREf` int(11) NOT NULL,
  `idProduto` int(11) NOT NULL AUTO_INCREMENT,
  `descProduto` varchar(60) NOT NULL,
  `unMedidaRef` int(11) NOT NULL,
  PRIMARY KEY (`idProduto`),
  KEY `idEmpresaREf` (`idEmpresaREf`),
  KEY `unMedidaRef` (`unMedidaRef`),
  CONSTRAINT `produto_ibfk_1` FOREIGN KEY (`idEmpresaREf`) REFERENCES `empresa` (`idEmpresa`),
  CONSTRAINT `produto_ibfk_2` FOREIGN KEY (`unMedidaRef`) REFERENCES `unmedida` (`unMedida`)
) ENGINE=InnoDB AUTO_INCREMENT=77 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produto`
--

LOCK TABLES `produto` WRITE;
/*!40000 ALTER TABLE `produto` DISABLE KEYS */;
INSERT INTO `produto` VALUES (1,1,'Alfinete p/ Mapas, Cor Verde,  c/ 50 und. ',1),(1,2,'Apagador para Quadro Branco ',2),(1,3,'Apontador de Lápis, Alumínio, sem Depósito ',2),(1,4,'Bloco p/ Recado Auto Adesivo, 76x102 mm, Cor Amarelo ',2),(1,5,'Borracha Branca, 54x24x10 mm ',2),(1,6,'Caderno Universitário, Capa Dura, Espiral, 96 folhas ',2),(1,7,'Caixa Plástica, p/ Arquivo Permanente, Cor Verde, Medindo 39',2),(1,8,'Caneta Esferográfica Tipo Ecológica, Cor Azul ',2),(1,9,'Caneta Esferográfica, Cor Azul ',2),(1,10,'Caneta Esferográfica, Cor Vermelha ',2),(1,11,'Caneta Marca Texto, Cor Amarela ',2),(1,12,'Caneta Nankin, Descartável, 0,5mm ',2),(1,13,'Clips Metálico, Niquelado, N° 2/0,  c/ 500 g ',1),(1,14,'Clips Metálico, Niquelado, N° 4/0,  c/ 500 g ',1),(1,15,'Clips Metálico, Niquelado, N° 6/0,  c/ 500 g ',1),(1,16,'Cola Líquida, Tubo 40 g ',2),(1,17,'Corretivo Liquido, 18 ml ',2),(1,18,'Envelope Tipo Ofício, 114x229 mm, Cor Branco ',2),(1,19,'Envelope Tipo Saco, 229x324 mm, Papel Pardo ',2),(1,20,'Envelope Tipo Saco, 310x410 mm, Papel Pardo ',2),(1,21,'Estilete Tipo Faca, c/ Lâmina Larga Retrátil ',2),(1,22,'Etiqueta Auto Adesiva, 25,4x66,7 mm, Cor Branca ',2),(1,23,'Etiqueta Auto Adesiva, 99,10x34 mm, Cor Branca ',2),(1,24,'Extrator de Grampo tipo Espátula ',2),(1,25,'Fita Adesiva Crepe, 48mmx50m ',2),(1,26,'Fita Adesiva Transparente 12 mm x 10 m ',2),(1,27,'Fita Adesiva Transparente p/ Empacotamento, 45 m x 45 mm ',2),(1,28,'Fita Adesiva, 12 mm x 10m, cor Vermelha ',2),(1,29,'Fita Adesiva, 12mmx10m, cor Azul ',2),(1,30,'Fita Adesiva, Tipo Mágica, 25 mm x 65m ',2),(1,31,'Fita p/ Impressão de Código de Barras, Cor Branca ',2),(1,32,'Grampeador Metálico p/ Grampo 26/-6, 20 Folhas ',2),(1,33,'Caixa Grampo p/ Grampeador 26/6,  c/ 5000 Grampos ',2),(1,34,'Caixa Grampo p/ Grampeador 9/14,  c/ 5000 Grampos ',2),(1,35,'Lacre para Malote, Pact. 400 unid ',2),(1,36,'Lápis Preto, n° 02 ',2),(1,37,'Limpador e Spray p/ Quadro Branco, Frasco 60 ml ',2),(1,38,'Livro Ata c/ 50Folhas, Tamanho 205x300 mm, Capa e Contra Cap',2),(1,39,'Livro de Protocolo c/ 100 Folhas, Tamanho 20,5x15 mm ',2),(1,40,'Marcador P/ Quadro Branco, Cor Azul ',2),(1,41,'Marcador P/ Quadro Branco, Cor Preto ',2),(1,42,'Marcador P/ Quadro Branco, Cor Vermelha ',2),(1,43,'Marcador Permanente, Cor Azul ',2),(1,44,'Marcador Permanente, Cor Preto ',2),(1,45,'Papel A3, Branco, 297x420 mm,  ',3),(1,46,'Papel A4, Branco, 210x297 mm,  ',3),(1,47,'Papel Almaço, c/ Pauta e Margem, Pct. 400 Folhas ',4),(1,48,'Papel Pardo, Tamanho 60 cm de Largura, Rolo c/ 10KG ',2),(1,49,'Pasta Plástica em L, 210x297 mm, Cor Verde ',2),(1,50,'Pasta Plástica, Aba 40 mm e Elástico, 240 x 350 mm ',2),(1,51,'Pasta suspensa 240x360 mm - 336 A 350 G/M2',2),(1,52,'Perfurador de Papel, Cap. 20 Folhas ',2),(1,53,'Plástico Autoadesivo Contact Cristal Rolo 10 m Rolo',2),(1,54,'Prancheta 24x34 cm ',2),(1,55,'Prendedor de Papel, 51 mm ',2),(1,56,'Régua Transparente, 30 cm ',2),(1,57,'Saco Plástico Transparente c/ 4 Furos ',2),(1,58,'Tesoura em Aço Inoxidável ',2),(1,59,'Tinta, Cor Preta p/ Carimbo automatizado, Fraco 40 ml ',2),(1,60,'Base para Carimbo, 30 x 30 mm ',2),(1,61,'Base para Carimbo, 47 x 18 mm ',2),(1,62,'Base para Carimbo, 59 x 23 mm ',2),(1,63,'Base para Carimbo, 69 x 30 mm ',2),(1,64,'Base para Carimbo, 75 x 36 mm ',2),(1,65,'Base para Carimbo, Circular , 30 mm ',2),(1,66,'Carimbo Automático, 30 x 30 mm ',2),(1,67,'Carimbo Automático, 47 x 18 mm ',2),(1,68,'Carimbo Automático, 59 x 23 mm ',2),(1,69,'Carimbo Automático, 69 x 30 mm ',2),(1,70,'Carimbo Automático, 75 x 36 mm ',2),(1,71,'Carimbo Automático, Circular, 30 mm ',2),(1,72,'Pilha Alcalina AA, 1,5 V ',4),(1,73,'Pilha Alcalina AAA, 1,5 V ',4),(1,74,'Pilha Recarregável AA ',4),(1,75,'Pilha Recarregável AAA ',4);
/*!40000 ALTER TABLE `produto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quantidadedesejada`
--

DROP TABLE IF EXISTS `quantidadedesejada`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `quantidadedesejada` (
  `idEmpresaREf` int(11) NOT NULL,
  `idProdutoRef` int(11) NOT NULL,
  `quantidadeDesejada` float NOT NULL,
  KEY `idEmpresaREf` (`idEmpresaREf`),
  KEY `idProdutoRef` (`idProdutoRef`),
  CONSTRAINT `quantidadedesejada_ibfk_1` FOREIGN KEY (`idEmpresaREf`) REFERENCES `empresa` (`idEmpresa`),
  CONSTRAINT `quantidadedesejada_ibfk_2` FOREIGN KEY (`idProdutoRef`) REFERENCES `produto` (`idProduto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quantidadedesejada`
--

LOCK TABLES `quantidadedesejada` WRITE;
/*!40000 ALTER TABLE `quantidadedesejada` DISABLE KEYS */;
INSERT INTO `quantidadedesejada` VALUES (1,6,6),(1,12,10),(1,18,9),(1,24,9),(1,30,6),(1,36,6),(1,42,11),(1,48,11),(1,54,12),(1,60,15),(1,66,8),(1,72,6);
/*!40000 ALTER TABLE `quantidadedesejada` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `unmedida`
--

DROP TABLE IF EXISTS `unmedida`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `unmedida` (
  `unMedida` int(11) NOT NULL AUTO_INCREMENT,
  `siglaUnidade` varchar(3) NOT NULL,
  `descUnidade` varchar(20) NOT NULL,
  PRIMARY KEY (`unMedida`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `unmedida`
--

LOCK TABLES `unmedida` WRITE;
/*!40000 ALTER TABLE `unmedida` DISABLE KEYS */;
INSERT INTO `unmedida` VALUES (1,'CX','Caixa'),(2,'UN','Unidade'),(3,'RES','Resma'),(4,'PCT','Pacote');
/*!40000 ALTER TABLE `unmedida` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuario` (
  `idUsuario` int(11) NOT NULL AUTO_INCREMENT,
  `nomeUsuario` varchar(60) NOT NULL,
  `senhaUsuario` varchar(60) NOT NULL,
  PRIMARY KEY (`idUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'Felipe','1234'),(2,'Robson','5678');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarioporempresa`
--

DROP TABLE IF EXISTS `usuarioporempresa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarioporempresa` (
  `idUsuarioRef` int(11) NOT NULL,
  `idEmpresaREf` int(11) NOT NULL,
  KEY `idUsuarioRef` (`idUsuarioRef`),
  KEY `idEmpresaREf` (`idEmpresaREf`),
  CONSTRAINT `usuarioporempresa_ibfk_1` FOREIGN KEY (`idUsuarioRef`) REFERENCES `usuario` (`idUsuario`),
  CONSTRAINT `usuarioporempresa_ibfk_2` FOREIGN KEY (`idEmpresaREf`) REFERENCES `empresa` (`idEmpresa`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarioporempresa`
--

LOCK TABLES `usuarioporempresa` WRITE;
/*!40000 ALTER TABLE `usuarioporempresa` DISABLE KEYS */;
INSERT INTO `usuarioporempresa` VALUES (1,1),(2,1);
/*!40000 ALTER TABLE `usuarioporempresa` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-28 13:09:06
