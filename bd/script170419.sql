USE [master]
GO
/****** Object:  Database [EDescargas]    Script Date: 17/04/2019 15:57:30 ******/
CREATE DATABASE [EDescargas]
GO
ALTER DATABASE [EDescargas] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [EDescargas].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [EDescargas] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [EDescargas] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [EDescargas] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [EDescargas] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [EDescargas] SET ARITHABORT OFF 
GO
ALTER DATABASE [EDescargas] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [EDescargas] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [EDescargas] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [EDescargas] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [EDescargas] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [EDescargas] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [EDescargas] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [EDescargas] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [EDescargas] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [EDescargas] SET  ENABLE_BROKER 
GO
ALTER DATABASE [EDescargas] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [EDescargas] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [EDescargas] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [EDescargas] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [EDescargas] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [EDescargas] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [EDescargas] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [EDescargas] SET RECOVERY FULL 
GO
ALTER DATABASE [EDescargas] SET  MULTI_USER 
GO
ALTER DATABASE [EDescargas] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [EDescargas] SET DB_CHAINING OFF 
GO
ALTER DATABASE [EDescargas] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [EDescargas] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [EDescargas] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'EDescargas', N'ON'
GO
ALTER DATABASE [EDescargas] SET QUERY_STORE = OFF
GO
USE [EDescargas]
GO
/****** Object:  Table [dbo].[bitacora]    Script Date: 17/04/2019 15:57:30 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[bitacora](
	[id] [int] NOT NULL,
	[producto] [int] NOT NULL,
	[fecha] [datetime] NOT NULL,
	[descripcion] [varchar](300) NOT NULL,
	[usuario] [int] NOT NULL,
 CONSTRAINT [PK_BITACORA] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[categoria_libro]    Script Date: 17/04/2019 15:57:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[categoria_libro](
	[id] [int] NOT NULL,
	[nombre] [varchar](30) NOT NULL,
	[descripcion] [varchar](100) NOT NULL,
 CONSTRAINT [PK_CATLIBRO] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[compra]    Script Date: 17/04/2019 15:57:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[compra](
	[id] [int] NOT NULL,
	[fecha] [datetime] NOT NULL,
	[usuario] [int] NOT NULL,
	[producto] [varchar](100) NOT NULL,
	[cantidad] [int] NOT NULL,
	[precio] [real] NOT NULL,
 CONSTRAINT [PK_COMPRA] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[consecutivo]    Script Date: 17/04/2019 15:57:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[consecutivo](
	[id] [int] NOT NULL,
	[descripcion] [varchar](300) NOT NULL,
	[consecutivo] [varchar](30) NOT NULL,
	[prefijo] [varchar](30) NULL,
	[rango_inicial] [int] NOT NULL,
	[rango_final] [int] NULL,
	[usuario] [int] NOT NULL,
 CONSTRAINT [PK_CONSECUTIVO] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[error]    Script Date: 17/04/2019 15:57:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[error](
	[id] [int] NOT NULL,
	[fecha] [datetime] NOT NULL,
	[descripcion] [varchar](300) NOT NULL,
	[usuario] [int] NOT NULL,
 CONSTRAINT [PK_ERROR] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[genero_musica]    Script Date: 17/04/2019 15:57:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[genero_musica](
	[id] [int] NOT NULL,
	[nombre] [varchar](30) NOT NULL,
	[descripcion] [varchar](100) NOT NULL,
 CONSTRAINT [PK_GENMUSICA] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[genero_pelicula]    Script Date: 17/04/2019 15:57:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[genero_pelicula](
	[id] [int] NOT NULL,
	[nombre] [varchar](30) NOT NULL,
	[descripcion] [varchar](100) NOT NULL,
 CONSTRAINT [PK_GENPELICULA] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[libro]    Script Date: 17/04/2019 15:57:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[libro](
	[id] [int] NOT NULL,
	[nombre] [varchar](30) NOT NULL,
	[categoria] [int] NOT NULL,
	[usuario] [int] NULL,
	[year] [int] NOT NULL,
	[idioma] [varchar](30) NOT NULL,
	[actores] [varchar](200) NOT NULL,
	[editorial] [varchar](50) NOT NULL,
	[url_descarga] [varchar](300) NOT NULL,
	[url_previsualizacion] [varchar](300) NOT NULL,
 CONSTRAINT [PK_LIBRO] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[musica]    Script Date: 17/04/2019 15:57:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[musica](
	[id] [int] NOT NULL,
	[nombre] [varchar](30) NOT NULL,
	[usuario] [int] NULL,
	[genero] [int] NOT NULL,
	[duration] [varchar](30) NOT NULL,
	[autor] [varchar](50) NOT NULL,
 CONSTRAINT [PK_MUSICA] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[parametro]    Script Date: 17/04/2019 15:57:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[parametro](
	[id] [int] NOT NULL,
	[previsualizacion] [varchar](300) NOT NULL,
	[almacenamiento] [varchar](300) NOT NULL,
	[tipo] [int] NOT NULL,
	[usuario] [int] NOT NULL,
 CONSTRAINT [PK_PARAMETRO] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[pelicula]    Script Date: 17/04/2019 15:57:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[pelicula](
	[id] [int] NOT NULL,
	[nombre] [varchar](30) NOT NULL,
	[genero] [int] NOT NULL,
	[year] [int] NOT NULL,
	[idioma] [varchar](30) NOT NULL,
	[usuario] [int] NULL,
	[actores] [varchar](200) NOT NULL,
	[url_descarga] [varchar](300) NOT NULL,
	[url_previsualizacion] [varchar](300) NOT NULL,
 CONSTRAINT [PK_PELICULA] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[rol]    Script Date: 17/04/2019 15:57:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[rol](
	[id] [int] NOT NULL,
	[nombre] [varchar](50) NOT NULL,
	[descripcion] [varchar](10) NOT NULL,
 CONSTRAINT [PK_ROL] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[usuario]    Script Date: 17/04/2019 15:57:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[usuario](
	[id] [int] NOT NULL,
	[usuario] [varchar](30) NOT NULL,
	[contrasenna] [varchar](30) NOT NULL,
	[nombre] [varchar](30) NOT NULL,
	[primer_apellido] [varchar](30) NOT NULL,
	[segundo_apellido] [varchar](30) NOT NULL,
	[pregunta_seguridad] [varchar](50) NOT NULL,
	[rol] [int] NOT NULL,
 CONSTRAINT [PK_USUARIO] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[rol] ([id], [nombre], [descripcion]) VALUES (1, N'Administrador', N'Admin')
INSERT [dbo].[usuario] ([id], [usuario], [contrasenna], [nombre], [primer_apellido], [segundo_apellido], [pregunta_seguridad], [rol]) VALUES (1, N'admin', N'admin', N'Juan', N'Perez', N'Perez', N'blablabla', 1)
INSERT [dbo].[usuario] ([id], [usuario], [contrasenna], [nombre], [primer_apellido], [segundo_apellido], [pregunta_seguridad], [rol]) VALUES (2, N'admin', N'marco', N'marco', N'perez', N'perez', N'blablabla', 1)
INSERT [dbo].[usuario] ([id], [usuario], [contrasenna], [nombre], [primer_apellido], [segundo_apellido], [pregunta_seguridad], [rol]) VALUES (3, N'JOSUE', N'123', N'JOSUE', N'GAITAN', N'QUESADA', N'blablabla', 1)
ALTER TABLE [dbo].[bitacora]  WITH CHECK ADD  CONSTRAINT [FK_BITACORA_USER] FOREIGN KEY([usuario])
REFERENCES [dbo].[usuario] ([id])
GO
ALTER TABLE [dbo].[bitacora] CHECK CONSTRAINT [FK_BITACORA_USER]
GO
ALTER TABLE [dbo].[compra]  WITH CHECK ADD  CONSTRAINT [FK_COMPRA_USUARIO] FOREIGN KEY([usuario])
REFERENCES [dbo].[usuario] ([id])
GO
ALTER TABLE [dbo].[compra] CHECK CONSTRAINT [FK_COMPRA_USUARIO]
GO
ALTER TABLE [dbo].[consecutivo]  WITH CHECK ADD  CONSTRAINT [FK_CONSECUTIVO_USUARIO] FOREIGN KEY([usuario])
REFERENCES [dbo].[usuario] ([id])
GO
ALTER TABLE [dbo].[consecutivo] CHECK CONSTRAINT [FK_CONSECUTIVO_USUARIO]
GO
ALTER TABLE [dbo].[error]  WITH CHECK ADD  CONSTRAINT [FK_ERROR_USUARIO] FOREIGN KEY([usuario])
REFERENCES [dbo].[usuario] ([id])
GO
ALTER TABLE [dbo].[error] CHECK CONSTRAINT [FK_ERROR_USUARIO]
GO
ALTER TABLE [dbo].[libro]  WITH CHECK ADD  CONSTRAINT [FK_CATEGORIA_LIBRO] FOREIGN KEY([categoria])
REFERENCES [dbo].[categoria_libro] ([id])
GO
ALTER TABLE [dbo].[libro] CHECK CONSTRAINT [FK_CATEGORIA_LIBRO]
GO
ALTER TABLE [dbo].[libro]  WITH CHECK ADD  CONSTRAINT [FK_LIBRO_USUARIO] FOREIGN KEY([usuario])
REFERENCES [dbo].[usuario] ([id])
GO
ALTER TABLE [dbo].[libro] CHECK CONSTRAINT [FK_LIBRO_USUARIO]
GO
ALTER TABLE [dbo].[musica]  WITH CHECK ADD  CONSTRAINT [FK_GENERO_MUSICA] FOREIGN KEY([genero])
REFERENCES [dbo].[genero_musica] ([id])
GO
ALTER TABLE [dbo].[musica] CHECK CONSTRAINT [FK_GENERO_MUSICA]
GO
ALTER TABLE [dbo].[musica]  WITH CHECK ADD  CONSTRAINT [FK_MUSICA_USUARIO] FOREIGN KEY([usuario])
REFERENCES [dbo].[usuario] ([id])
GO
ALTER TABLE [dbo].[musica] CHECK CONSTRAINT [FK_MUSICA_USUARIO]
GO
ALTER TABLE [dbo].[parametro]  WITH CHECK ADD  CONSTRAINT [FK_PARAMETRO_USUARIO] FOREIGN KEY([usuario])
REFERENCES [dbo].[usuario] ([id])
GO
ALTER TABLE [dbo].[parametro] CHECK CONSTRAINT [FK_PARAMETRO_USUARIO]
GO
ALTER TABLE [dbo].[pelicula]  WITH CHECK ADD  CONSTRAINT [FK_GENERO_PELICULA] FOREIGN KEY([genero])
REFERENCES [dbo].[genero_pelicula] ([id])
GO
ALTER TABLE [dbo].[pelicula] CHECK CONSTRAINT [FK_GENERO_PELICULA]
GO
ALTER TABLE [dbo].[pelicula]  WITH CHECK ADD  CONSTRAINT [FK_PELICULA_USUARIO] FOREIGN KEY([usuario])
REFERENCES [dbo].[usuario] ([id])
GO
ALTER TABLE [dbo].[pelicula] CHECK CONSTRAINT [FK_PELICULA_USUARIO]
GO
ALTER TABLE [dbo].[usuario]  WITH CHECK ADD  CONSTRAINT [FK_ROL_USER] FOREIGN KEY([rol])
REFERENCES [dbo].[rol] ([id])
GO
ALTER TABLE [dbo].[usuario] CHECK CONSTRAINT [FK_ROL_USER]
GO
USE [master]
GO
ALTER DATABASE [EDescargas] SET  READ_WRITE 
GO
