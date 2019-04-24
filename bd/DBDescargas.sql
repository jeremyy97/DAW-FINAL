USE [master]
GO
/****** Object:  Database [DBDescargas]    Script Date: 4/23/2019 10:23:59 PM ******/
CREATE DATABASE [DBDescargas]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'DBDescargas', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER01\MSSQL\DATA\DBDescargas.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'DBDescargas_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER01\MSSQL\DATA\DBDescargas_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [DBDescargas] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [DBDescargas].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [DBDescargas] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [DBDescargas] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [DBDescargas] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [DBDescargas] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [DBDescargas] SET ARITHABORT OFF 
GO
ALTER DATABASE [DBDescargas] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [DBDescargas] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [DBDescargas] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [DBDescargas] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [DBDescargas] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [DBDescargas] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [DBDescargas] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [DBDescargas] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [DBDescargas] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [DBDescargas] SET  DISABLE_BROKER 
GO
ALTER DATABASE [DBDescargas] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [DBDescargas] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [DBDescargas] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [DBDescargas] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [DBDescargas] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [DBDescargas] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [DBDescargas] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [DBDescargas] SET RECOVERY FULL 
GO
ALTER DATABASE [DBDescargas] SET  MULTI_USER 
GO
ALTER DATABASE [DBDescargas] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [DBDescargas] SET DB_CHAINING OFF 
GO
ALTER DATABASE [DBDescargas] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [DBDescargas] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [DBDescargas] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'DBDescargas', N'ON'
GO
ALTER DATABASE [DBDescargas] SET QUERY_STORE = OFF
GO
USE [DBDescargas]
GO
/****** Object:  Table [dbo].[bitacora]    Script Date: 4/23/2019 10:24:01 PM ******/
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
/****** Object:  Table [dbo].[categoria_libro]    Script Date: 4/23/2019 10:24:02 PM ******/
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
/****** Object:  Table [dbo].[compra]    Script Date: 4/23/2019 10:24:02 PM ******/
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
/****** Object:  Table [dbo].[consecutivo]    Script Date: 4/23/2019 10:24:02 PM ******/
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
/****** Object:  Table [dbo].[error]    Script Date: 4/23/2019 10:24:02 PM ******/
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
/****** Object:  Table [dbo].[genero_musica]    Script Date: 4/23/2019 10:24:02 PM ******/
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
/****** Object:  Table [dbo].[genero_pelicula]    Script Date: 4/23/2019 10:24:03 PM ******/
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
/****** Object:  Table [dbo].[libro]    Script Date: 4/23/2019 10:24:03 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[libro](
	[id] [int] NOT NULL,
	[nombre] [varchar](50) NOT NULL,
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
/****** Object:  Table [dbo].[musica]    Script Date: 4/23/2019 10:24:03 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[musica](
	[id] [int] NOT NULL,
	[nombre] [varchar](30) NOT NULL,
	[usuario] [int] NULL,
	[genero] [int] NULL,
	[tipo_interpretacion] [varchar](30) NULL,
	[idioma] [varchar](50) NULL,
	[pais] [varchar](50) NULL,
	[disquera] [varchar](50) NULL,
	[disco] [varchar](50) NULL,
	[year] [int] NULL,
	[url_descarga] [varchar](50) NULL,
	[url_previsualizacion] [varchar](50) NULL,
 CONSTRAINT [PK_MUSICA] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[parametro]    Script Date: 4/23/2019 10:24:03 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[parametro](
	[preLib] [varchar](300) NOT NULL,
	[almLib] [varchar](300) NOT NULL,
	[prePel] [varchar](300) NOT NULL,
	[almPel] [varchar](300) NOT NULL,
	[preMus] [varchar](300) NOT NULL,
	[almMus] [varchar](300) NOT NULL,
 CONSTRAINT [PK_parametro] PRIMARY KEY CLUSTERED 
(
	[preLib] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[pelicula]    Script Date: 4/23/2019 10:24:03 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[pelicula](
	[id] [int] NOT NULL,
	[nombre] [varchar](50) NOT NULL,
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
/****** Object:  Table [dbo].[rol]    Script Date: 4/23/2019 10:24:03 PM ******/
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
/****** Object:  Table [dbo].[usuario]    Script Date: 4/23/2019 10:24:03 PM ******/
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
USE [master]
GO
ALTER DATABASE [DBDescargas] SET  READ_WRITE 
GO
