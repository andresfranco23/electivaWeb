-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-05-2017 a las 03:10:10
-- Versión del servidor: 10.1.21-MariaDB
-- Versión de PHP: 7.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyecto`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `actividad`
--

CREATE TABLE `actividad` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `descripcion` varchar(100) NOT NULL,
  `idIntegrante` int(11) NOT NULL,
  `idProyecto` int(11) NOT NULL,
  `inicio` date NOT NULL,
  `fin` date NOT NULL,
  `usuarioId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `actividad`
--

INSERT INTO `actividad` (`id`, `nombre`, `descripcion`, `idIntegrante`, `idProyecto`, `inicio`, `fin`, `usuarioId`) VALUES
(17, 'Crear modulo web', 'crud completo en la tabla', 23, 20, '2017-12-31', '2017-12-31', 7),
(18, 'Crear modulo usuarios', 'crud completo en la tabla', 22, 21, '2017-12-31', '2017-12-31', 7),
(19, 'Modificacion modulo web', 'modifiquelo mijo', 23, 20, '2017-12-31', '2017-12-31', 7);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cargo`
--

CREATE TABLE `cargo` (
  `id` int(11) NOT NULL,
  `nombre` varchar(40) NOT NULL,
  `descripcion` varchar(40) NOT NULL,
  `horario` varchar(40) NOT NULL,
  `salario` double NOT NULL,
  `proyectoId` int(11) NOT NULL,
  `usuarioId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `cargo`
--

INSERT INTO `cargo` (`id`, `nombre`, `descripcion`, `horario`, `salario`, `proyectoId`, `usuarioId`) VALUES
(8, 'Programador', 'front- end', 'sabado', 750000, 20, 7),
(9, 'Programador', 'back -end', 'sabado', 1200000, 21, 7),
(10, 'desarrollador front', 'kjjkk', 'lunes', 99999999, 22, 11),
(11, 'tester', 'jdkksdjfj', 'miercoles', 278778787, 22, 11);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `integrante_proyecto`
--

CREATE TABLE `integrante_proyecto` (
  `id` int(11) NOT NULL,
  `idProyecto` int(11) NOT NULL,
  `idIntegrante` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `integrante_proyecto`
--

INSERT INTO `integrante_proyecto` (`id`, `idProyecto`, `idIntegrante`) VALUES
(21, 26, 6),
(22, 21, 6),
(23, 20, 10);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proyecto`
--

CREATE TABLE `proyecto` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `inicio` date NOT NULL,
  `fin` date NOT NULL,
  `etapa` varchar(100) NOT NULL,
  `usuarioId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `proyecto`
--

INSERT INTO `proyecto` (`id`, `nombre`, `inicio`, `fin`, `etapa`, `usuarioId`) VALUES
(20, 'Electiva web', '2015-11-30', '2016-11-30', '50%-75%', 7),
(21, 'proyecto final', '2017-01-01', '2017-01-01', '25%-50%', 7),
(22, 'proyecto final web', '2017-05-01', '2017-05-31', '0%-25%', 11),
(23, 'qqqqqq', '2017-05-01', '2017-05-31', '0%-25%', 11),
(24, 'test', '2017-12-31', '2017-12-30', '0%-25%', 9),
(25, 'testeo2', '2017-12-31', '2017-12-31', '50%-75%', 9),
(26, 'teste3', '2017-12-31', '2017-12-31', '50%-75%', 9);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `recurso`
--

CREATE TABLE `recurso` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `descripcion` varchar(50) NOT NULL,
  `ubicacion` varchar(50) NOT NULL,
  `tarea` varchar(50) NOT NULL,
  `usuarioId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registro`
--

CREATE TABLE `registro` (
  `id` int(11) NOT NULL,
  `tipodocumento` varchar(50) NOT NULL,
  `numero` varchar(50) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `tipouser` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `repeatpassword` varchar(50) NOT NULL,
  `fechanacimiento` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `registro`
--

INSERT INTO `registro` (`id`, `tipodocumento`, `numero`, `nombre`, `apellido`, `tipouser`, `email`, `password`, `repeatpassword`, `fechanacimiento`) VALUES
(6, 'Cedula de ciudadania', '1094923', 'Jesus quintero', 'cardona', 'Integrante', 'jesus@gmail.com', 'jesus', 'jesus', '1993-12-30'),
(7, 'Cedula de ciudadania', '1094929802', 'Nestor andres', 'franco betancur', 'Administrador', 'nestor9623@hotmail.com', 'teto', 'teto', '1995-06-23'),
(9, 'Cedula de ciudadania', '1', 'nico', 'duque', 'Administrador', 'n@gmail.com', 'n', 'n', '2017-01-01'),
(10, 'Tarjeta de identidad', '2', 'mauro', 'hoyoz', 'Integrante', 'm@gmail.com', 'm', 'm', '2017-01-01'),
(11, 'Cedula de ciudadania', '1053802816', 'johnny', 'salazar', 'Administrador', 'johnny9052@hotmail.com', '12345', '12345', '2017-05-27'),
(12, 'Cedula de ciudadania', '1053802814', 'alexander', 'salazar', 'Integrante', 'alexander9052@hotmail.com', '12345', '12345', '2017-05-19');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reunion`
--

CREATE TABLE `reunion` (
  `id` int(11) NOT NULL,
  `nombre` varchar(40) NOT NULL,
  `ubicacion` varchar(40) NOT NULL,
  `tematica` varchar(40) NOT NULL,
  `usuarioId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `reunion`
--

INSERT INTO `reunion` (`id`, `nombre`, `ubicacion`, `tematica`, `usuarioId`) VALUES
(13, 'reunion del estado', 'eam', 'estado del proyecto', 11);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tareas`
--

CREATE TABLE `tareas` (
  `actividad` varchar(50) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `porcentaje` int(11) NOT NULL,
  `estado` int(11) NOT NULL,
  `inicio` date NOT NULL,
  `fin` date NOT NULL,
  `usuarioId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tareas`
--

INSERT INTO `tareas` (`actividad`, `nombre`, `porcentaje`, `estado`, `inicio`, `fin`, `usuarioId`) VALUES
('17', 'Tarea1', 35, 17, '2017-12-31', '2017-12-31', 7);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `usuario` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `actividad`
--
ALTER TABLE `actividad`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nombre` (`nombre`),
  ADD KEY `fk_integrante` (`idIntegrante`),
  ADD KEY `fk_proyecto` (`idProyecto`),
  ADD KEY `fk_logueado` (`usuarioId`);

--
-- Indices de la tabla `cargo`
--
ALTER TABLE `cargo`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_proyecto_id` (`proyectoId`),
  ADD KEY `fk_cargo_usuario` (`usuarioId`);

--
-- Indices de la tabla `integrante_proyecto`
--
ALTER TABLE `integrante_proyecto`
  ADD PRIMARY KEY (`id`,`idProyecto`,`idIntegrante`),
  ADD KEY `idProyecto` (`idProyecto`),
  ADD KEY `idIntegrante` (`idIntegrante`);

--
-- Indices de la tabla `proyecto`
--
ALTER TABLE `proyecto`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nombre` (`nombre`),
  ADD KEY `fk_proyecto_usuario` (`usuarioId`);

--
-- Indices de la tabla `recurso`
--
ALTER TABLE `recurso`
  ADD PRIMARY KEY (`id`),
  ADD KEY `recurso_ibfk_1` (`usuarioId`);

--
-- Indices de la tabla `registro`
--
ALTER TABLE `registro`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `reunion`
--
ALTER TABLE `reunion`
  ADD PRIMARY KEY (`id`),
  ADD KEY `reunion_ibfk_1` (`usuarioId`);

--
-- Indices de la tabla `tareas`
--
ALTER TABLE `tareas`
  ADD KEY `tareas_ibfk_1` (`usuarioId`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `actividad`
--
ALTER TABLE `actividad`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
--
-- AUTO_INCREMENT de la tabla `cargo`
--
ALTER TABLE `cargo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT de la tabla `integrante_proyecto`
--
ALTER TABLE `integrante_proyecto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
--
-- AUTO_INCREMENT de la tabla `proyecto`
--
ALTER TABLE `proyecto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
--
-- AUTO_INCREMENT de la tabla `recurso`
--
ALTER TABLE `recurso`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `registro`
--
ALTER TABLE `registro`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT de la tabla `reunion`
--
ALTER TABLE `reunion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `actividad`
--
ALTER TABLE `actividad`
  ADD CONSTRAINT `fk_integrante` FOREIGN KEY (`idIntegrante`) REFERENCES `integrante_proyecto` (`id`),
  ADD CONSTRAINT `fk_logueado` FOREIGN KEY (`usuarioId`) REFERENCES `registro` (`id`),
  ADD CONSTRAINT `fk_proyecto` FOREIGN KEY (`idProyecto`) REFERENCES `proyecto` (`id`);

--
-- Filtros para la tabla `cargo`
--
ALTER TABLE `cargo`
  ADD CONSTRAINT `fk_cargo_usuario` FOREIGN KEY (`usuarioId`) REFERENCES `registro` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_proyecto_id` FOREIGN KEY (`proyectoId`) REFERENCES `proyecto` (`id`);

--
-- Filtros para la tabla `integrante_proyecto`
--
ALTER TABLE `integrante_proyecto`
  ADD CONSTRAINT `integrante_proyecto_ibfk_1` FOREIGN KEY (`idProyecto`) REFERENCES `proyecto` (`id`),
  ADD CONSTRAINT `integrante_proyecto_ibfk_2` FOREIGN KEY (`idIntegrante`) REFERENCES `registro` (`id`);

--
-- Filtros para la tabla `proyecto`
--
ALTER TABLE `proyecto`
  ADD CONSTRAINT `fk_proyecto_usuario` FOREIGN KEY (`usuarioId`) REFERENCES `registro` (`id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `recurso`
--
ALTER TABLE `recurso`
  ADD CONSTRAINT `recurso_ibfk_1` FOREIGN KEY (`usuarioId`) REFERENCES `registro` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `reunion`
--
ALTER TABLE `reunion`
  ADD CONSTRAINT `reunion_ibfk_1` FOREIGN KEY (`usuarioId`) REFERENCES `registro` (`id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `tareas`
--
ALTER TABLE `tareas`
  ADD CONSTRAINT `tareas_ibfk_1` FOREIGN KEY (`usuarioId`) REFERENCES `registro` (`id`) ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
