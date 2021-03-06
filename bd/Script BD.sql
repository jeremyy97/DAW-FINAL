USE [master]
GO
/****** Object:  Database [EDescargas2]    Script Date: 24/04/2019 18:37:00 ******/
CREATE DATABASE [EDescargas2]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'EDescargas2', FILENAME = N'D:\Programs\Microsoft SQL Server\MSSQL14.JOSUE_SRV\MSSQL\DATA\EDescargas2.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'EDescargas2_log', FILENAME = N'D:\Programs\Microsoft SQL Server\MSSQL14.JOSUE_SRV\MSSQL\DATA\EDescargas2_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [EDescargas2] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [EDescargas2].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [EDescargas2] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [EDescargas2] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [EDescargas2] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [EDescargas2] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [EDescargas2] SET ARITHABORT OFF 
GO
ALTER DATABASE [EDescargas2] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [EDescargas2] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [EDescargas2] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [EDescargas2] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [EDescargas2] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [EDescargas2] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [EDescargas2] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [EDescargas2] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [EDescargas2] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [EDescargas2] SET  ENABLE_BROKER 
GO
ALTER DATABASE [EDescargas2] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [EDescargas2] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [EDescargas2] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [EDescargas2] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [EDescargas2] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [EDescargas2] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [EDescargas2] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [EDescargas2] SET RECOVERY FULL 
GO
ALTER DATABASE [EDescargas2] SET  MULTI_USER 
GO
ALTER DATABASE [EDescargas2] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [EDescargas2] SET DB_CHAINING OFF 
GO
ALTER DATABASE [EDescargas2] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [EDescargas2] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [EDescargas2] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'EDescargas2', N'ON'
GO
ALTER DATABASE [EDescargas2] SET QUERY_STORE = OFF
GO
USE [EDescargas2]
GO
/****** Object:  Table [dbo].[bitacora]    Script Date: 24/04/2019 18:37:01 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[bitacora](
	[id] [int] NOT NULL,
	[producto] [varbinary](1) NOT NULL,
	[fecha] [varbinary](1) NOT NULL,
	[descripcion] [varbinary](300) NOT NULL,
	[usuario] [int] NOT NULL,
 CONSTRAINT [PK_BITACORA] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[categoria_libro]    Script Date: 24/04/2019 18:37:01 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[categoria_libro](
	[id] [int] NOT NULL,
	[nombre] [varbinary](30) NOT NULL,
	[descripcion] [varbinary](100) NOT NULL,
 CONSTRAINT [PK_CATLIBRO] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[compra]    Script Date: 24/04/2019 18:37:01 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[compra](
	[id] [int] NOT NULL,
	[fecha] [varbinary](1) NOT NULL,
	[usuario] [int] NOT NULL,
	[producto] [varbinary](100) NOT NULL,
	[cantidad] [varbinary](1) NOT NULL,
	[precio] [varbinary](1) NOT NULL,
 CONSTRAINT [PK_COMPRA] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[consecutivo]    Script Date: 24/04/2019 18:37:01 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[consecutivo](
	[id] [int] NOT NULL,
	[descripcion] [varbinary](300) NOT NULL,
	[consecutivo] [varbinary](30) NOT NULL,
	[prefijo] [varbinary](30) NULL,
	[rango_inicial] [varbinary](1) NOT NULL,
	[rango_final] [varbinary](1) NULL,
	[usuario] [int] NOT NULL,
 CONSTRAINT [PK_CONSECUTIVO] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[error]    Script Date: 24/04/2019 18:37:01 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[error](
	[id] [int] NOT NULL,
	[fecha] [varbinary](1) NOT NULL,
	[descripcion] [varbinary](300) NOT NULL,
	[usuario] [int] NOT NULL,
 CONSTRAINT [PK_ERROR] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[genero_musica]    Script Date: 24/04/2019 18:37:01 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[genero_musica](
	[id] [int] NOT NULL,
	[nombre] [varbinary](30) NOT NULL,
	[descripcion] [varbinary](100) NOT NULL,
 CONSTRAINT [PK_GENMUSICA] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[genero_pelicula]    Script Date: 24/04/2019 18:37:01 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[genero_pelicula](
	[id] [int] NOT NULL,
	[nombre] [varbinary](30) NOT NULL,
	[descripcion] [varbinary](100) NOT NULL,
 CONSTRAINT [PK_GENPELICULA] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[libro]    Script Date: 24/04/2019 18:37:01 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[libro](
	[id] [varbinary](1) NOT NULL,
	[nombre] [varbinary](30) NOT NULL,
	[categoria] [int] NOT NULL,
	[usuario] [int] NULL,
	[year] [varbinary](1) NOT NULL,
	[idioma] [varbinary](30) NOT NULL,
	[actores] [varbinary](200) NOT NULL,
	[editorial] [varbinary](50) NOT NULL,
	[url_descarga] [varbinary](300) NOT NULL,
	[url_previsualizacion] [varbinary](300) NOT NULL,
 CONSTRAINT [PK_LIBRO] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[musica]    Script Date: 24/04/2019 18:37:01 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[musica](
	[id] [varbinary](1) NOT NULL,
	[nombre] [varbinary](30) NOT NULL,
	[usuario] [int] NULL,
	[genero] [int] NOT NULL,
	[duration] [varbinary](30) NOT NULL,
	[autor] [varbinary](50) NOT NULL,
 CONSTRAINT [PK_MUSICA] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[parametro]    Script Date: 24/04/2019 18:37:01 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[parametro](
	[id] [varbinary](1) NOT NULL,
	[previsualizacion] [varbinary](300) NOT NULL,
	[almacenamiento] [varbinary](300) NOT NULL,
	[tipo] [varbinary](1) NOT NULL,
	[usuario] [int] NOT NULL,
 CONSTRAINT [PK_PARAMETRO] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[pelicula]    Script Date: 24/04/2019 18:37:01 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[pelicula](
	[id] [varbinary](1) NOT NULL,
	[nombre] [varbinary](30) NOT NULL,
	[genero] [int] NOT NULL,
	[year] [varbinary](1) NOT NULL,
	[idioma] [varbinary](30) NOT NULL,
	[usuario] [int] NULL,
	[actores] [varbinary](200) NOT NULL,
	[url_descarga] [varbinary](300) NOT NULL,
	[url_previsualizacion] [varbinary](300) NOT NULL,
 CONSTRAINT [PK_PELICULA] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[rol]    Script Date: 24/04/2019 18:37:01 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[rol](
	[id] [int] NOT NULL,
	[nombre] [varbinary](50) NOT NULL,
	[descripcion] [varbinary](100) NOT NULL,
 CONSTRAINT [PK_ROL] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[usuario]    Script Date: 24/04/2019 18:37:01 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[usuario](
	[id] [int] NOT NULL,
	[usuario] [varbinary](30) NOT NULL,
	[contrasenna] [varbinary](30) NOT NULL,
	[nombre] [varbinary](30) NOT NULL,
	[primer_apellido] [varbinary](30) NOT NULL,
	[segundo_apellido] [varbinary](30) NOT NULL,
	[pregunta_seguridad] [varbinary](50) NOT NULL,
	[rol] [int] NOT NULL,
 CONSTRAINT [PK_USUARIO] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
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
/****** Object:  StoredProcedure [dbo].[Delete_Consecutivo]    Script Date: 24/04/2019 18:37:01 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE   PROCEDURE [dbo].[Delete_Consecutivo]
    @id int
AS
BEGIN
	
	SET NOCOUNT ON;

   DELETE dbo.consecutivo
   WHERE id = @id

   RETURN @@IDENTITY;
END
GO
/****** Object:  StoredProcedure [dbo].[Delete_Libro]    Script Date: 24/04/2019 18:37:01 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE   PROCEDURE [dbo].[Delete_Libro]
	@id varbinary
AS
BEGIN
	
	SET NOCOUNT ON;

   DELETE dbo.libro
   WHERE id = @id

   RETURN @@IDENTITY;
END
GO
/****** Object:  StoredProcedure [dbo].[Delete_Musica]    Script Date: 24/04/2019 18:37:01 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
	CREATE   PROCEDURE [dbo].[Delete_Musica]
    @id varbinary
AS
BEGIN
	
   SET NOCOUNT ON;

   DELETE  dbo.musica
   WHERE id = @id

   RETURN @@IDENTITY;
END
GO
/****** Object:  StoredProcedure [dbo].[Delete_Parametro]    Script Date: 24/04/2019 18:37:01 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



CREATE   PROCEDURE [dbo].[Delete_Parametro]
    @id varbinary
	AS
BEGIN
	
   SET NOCOUNT ON;

   DELETE dbo.parametro
   WHERE id = @id

   RETURN @@IDENTITY;
END
GO
/****** Object:  StoredProcedure [dbo].[Delete_Pelicula]    Script Date: 24/04/2019 18:37:01 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE   PROCEDURE [dbo].[Delete_Pelicula]
    @id varbinary
AS
BEGIN
	
   SET NOCOUNT ON;

   DELETE dbo.pelicula
   WHERE id = @id

   RETURN @@IDENTITY;
END
GO
/****** Object:  StoredProcedure [dbo].[Delete_Usuario]    Script Date: 24/04/2019 18:37:01 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

	CREATE   PROCEDURE [dbo].[Delete_Usuario]
@id int
AS
BEGIN
	
	SET NOCOUNT ON;

   DELETE dbo.usuario
   WHERE id = @id

   RETURN @@IDENTITY;
END
GO
/****** Object:  StoredProcedure [dbo].[Insert_Consecutivo]    Script Date: 24/04/2019 18:37:01 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
---------------------------------------
	CREATE   PROCEDURE [dbo].[Insert_Consecutivo]
    @id int,
	@descripcion varbinary(300),
	@consecutivo varbinary(30),
	@prefijo varbinary(30),
	@rango_inicial varbinary,
	@rango_final varbinary,
	@usuario int
AS
BEGIN
	
	SET NOCOUNT ON;

   INSERT INTO dbo.Consecutivo( id ,  descripcion , consecutivo , prefijo , rango_inicial ,rango_final ,usuario )
   VALUES ( @id , EncryptByPassPhrase('ClaveUsuarios',@descripcion) ,EncryptByPassPhrase('ClaveUsuarios',@consecutivo) ,EncryptByPassPhrase('ClaveUsuarios',@prefijo) ,EncryptByPassPhrase('ClaveUsuarios',@rango_inicial) , EncryptByPassPhrase('ClaveUsuarios',@rango_final) , @usuario )

   RETURN @@IDENTITY;
END
GO
/****** Object:  StoredProcedure [dbo].[Insert_Libro]    Script Date: 24/04/2019 18:37:01 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE   PROCEDURE [dbo].[Insert_Libro]
	@id varbinary,
	@nombre varbinary(30),
	@categoria int,
	@usuario int,
	@year varbinary,
	@idioma varbinary(30),
	@actores varbinary(200),
	@editorial varbinary(50),
	@url_descarga varbinary(300),
	@url_previsualizacion varbinary(300)
AS
BEGIN
	
	SET NOCOUNT ON;

   INSERT INTO dbo.libro(id, nombre, categoria, usuario, year, idioma, actores, editorial, url_descarga, url_previsualizacion)
   VALUES (	@id,EncryptByPassPhrase('ClaveUsuarios',@nombre),@categoria,@usuario,EncryptByPassPhrase('ClaveUsuarios',@year),EncryptByPassPhrase('ClaveUsuarios',@idioma),EncryptByPassPhrase('ClaveUsuarios',@actores),EncryptByPassPhrase('ClaveUsuarios',@editorial),EncryptByPassPhrase('ClaveUsuarios',@url_descarga),EncryptByPassPhrase('ClaveUsuarios',@url_previsualizacion))

   RETURN @@IDENTITY;
END
GO
/****** Object:  StoredProcedure [dbo].[Insert_Musica]    Script Date: 24/04/2019 18:37:01 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE   PROCEDURE [dbo].[Insert_Musica]
    @id varbinary,
	@nombre varbinary(30),
	@usuario int,
	@genero int,
	@duration varbinary(30),
	@autor varbinary(50)
AS
BEGIN
	
	SET NOCOUNT ON;

   INSERT INTO dbo.musica(id, nombre, usuario, genero, duration, autor)
   VALUES (@id, EncryptByPassPhrase('ClaveUsuarios',@nombre), @usuario , @genero , EncryptByPassPhrase('ClaveUsuarios',@duration) , EncryptByPassPhrase('ClaveUsuarios',@autor))

   RETURN @@IDENTITY;
END
GO
/****** Object:  StoredProcedure [dbo].[Insert_Parametro]    Script Date: 24/04/2019 18:37:01 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE   PROCEDURE [dbo].[Insert_Parametro]
    @id varbinary,
	@previsualizacion varbinary(300),
	@almacenamiento varbinary(300),
	@tipo varbinary,
	@usuario int
AS
BEGIN
	
	SET NOCOUNT ON;

   INSERT INTO dbo.parametro( id, previsualizacion, almacenamiento, tipo, usuario )
   VALUES (  @id, EncryptByPassPhrase('ClaveUsuarios',@previsualizacion),EncryptByPassPhrase('ClaveUsuarios',@almacenamiento),EncryptByPassPhrase('ClaveUsuarios',@tipo),@usuario)

   RETURN @@IDENTITY;
END
GO
/****** Object:  StoredProcedure [dbo].[Insert_Pelicula]    Script Date: 24/04/2019 18:37:01 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

---------------------------------------------------
	CREATE   PROCEDURE [dbo].[Insert_Pelicula]
    @id int,
	@nombre varbinary(30),
	@genero int,
	@year varbinary,
	@idioma varbinary(30),
	@usuario int,
	@actores varbinary(200),
	@url_descarga varbinary(300),
	@url_previsualizacion varbinary(300)
AS
BEGIN
	
	SET NOCOUNT ON;

   INSERT INTO dbo.pelicula( id , nombre, genero, year, idioma, usuario , actores, url_descarga, url_previsualizacion)
   VALUES (@id , EncryptByPassPhrase('ClaveUsuarios',@nombre), @genero,EncryptByPassPhrase('ClaveUsuarios',@year) , EncryptByPassPhrase('ClaveUsuarios',@idioma), @usuario , EncryptByPassPhrase('ClaveUsuarios',@actores), EncryptByPassPhrase('ClaveUsuarios',@url_descarga), EncryptByPassPhrase('ClaveUsuarios',@url_previsualizacion))

   RETURN @@IDENTITY;
END
GO
/****** Object:  StoredProcedure [dbo].[Insert_Usuario]    Script Date: 24/04/2019 18:37:01 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE   PROCEDURE [dbo].[Insert_Usuario]
@id int,
@usuario varbinary(30),
@contrasenna varbinary(30),
@nombre varbinary(30),
@primer_apellido varbinary(30),
@segundo_apellido varbinary(30),
@pregunta_seguridad varbinary(50),
@rol int
AS
BEGIN
	
	SET NOCOUNT ON;

   INSERT INTO dbo.usuario(id, usuario,contrasenna, nombre, primer_apellido, segundo_apellido, pregunta_seguridad , rol )
   VALUES (@id,EncryptByPassPhrase('ClaveUsuarios',@usuario),EncryptByPassPhrase('ClaveUsuarios',@contrasenna),EncryptByPassPhrase('ClaveUsuarios',@nombre),EncryptByPassPhrase('ClaveUsuarios',@primer_apellido),EncryptByPassPhrase('ClaveUsuarios',@segundo_apellido),EncryptByPassPhrase('ClaveUsuarios',@pregunta_seguridad),@rol)

   RETURN @@IDENTITY;
END
GO
/****** Object:  StoredProcedure [dbo].[Update_Consecutivo]    Script Date: 24/04/2019 18:37:01 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
	CREATE   PROCEDURE [dbo].[Update_Consecutivo]
    @id int,
	@descripcion varbinary(300),
	@consecutivo varbinary(30),
	@prefijo varbinary(30),
	@rango_inicial varbinary,
	@rango_final varbinary,
	@usuario int
AS
BEGIN
	
	SET NOCOUNT ON;

UPDATE dbo.consecutivo
SET  descripcion = @descripcion , consecutivo = @consecutivo , prefijo = @prefijo , rango_inicial = @rango_inicial , rango_final = @rango_final , usuario = @usuario
WHERE id = @id
END
GO
/****** Object:  StoredProcedure [dbo].[Update_Libro]    Script Date: 24/04/2019 18:37:01 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
	CREATE   PROCEDURE [dbo].[Update_Libro]
	@id varbinary,
	@nombre varbinary(30),
	@categoria int,
	@usuario int,
	@year varbinary,
	@idioma varbinary(30),
	@actores varbinary(200),
	@editorial varbinary(50),
	@url_descarga varbinary(300),
	@url_previsualizacion varbinary(300)
AS
BEGIN
	
	SET NOCOUNT ON;

UPDATE dbo.libro
SET  nombre = @nombre, categoria = @categoria, usuario = @usuario, year = @year, idioma = @idioma, actores = @actores, editorial = @editorial, url_descarga = @url_descarga, url_previsualizacion = @url_previsualizacion
WHERE id = @id
END
GO
/****** Object:  StoredProcedure [dbo].[Update_Musica]    Script Date: 24/04/2019 18:37:01 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
	CREATE   PROCEDURE [dbo].[Update_Musica]
    @id varbinary,
	@nombre varbinary(30),
	@usuario int,
	@genero int,
	@duration varbinary(30),
	@autor varbinary(50)
AS
BEGIN
	
SET NOCOUNT ON;

UPDATE dbo.musica
SET  nombre = @nombre , usuario = @usuario , genero = @genero ,duration =  @duration , autor = @autor
WHERE id = @id
END

GO
/****** Object:  StoredProcedure [dbo].[Update_Parametro]    Script Date: 24/04/2019 18:37:01 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE   PROCEDURE [dbo].[Update_Parametro]
    @id varbinary,
	@previsualizacion varbinary(300),
	@almacenamiento varbinary(300),
	@tipo varbinary,
	@usuario int
AS
BEGIN
	
	SET NOCOUNT ON;

	UPDATE dbo.parametro
SET  previsualizacion = @previsualizacion, almacenamiento = @almacenamiento, tipo = @tipo, usuario = @usuario
WHERE id = @id
END

GO
/****** Object:  StoredProcedure [dbo].[Update_Pelicula]    Script Date: 24/04/2019 18:37:01 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE   PROCEDURE [dbo].[Update_Pelicula]
    @id varbinary,
	@nombre varbinary(30),
	@genero int,
	@year varbinary,
	@idioma varbinary(30),
	@usuario int,
	@actores varbinary(200),
	@url_descarga varbinary(300),
	@url_previsualizacion varbinary(300)
AS
BEGIN
	
	SET NOCOUNT ON;

	UPDATE dbo.pelicula
SET  nombre = @nombre, genero = @genero, year = @year, idioma = @idioma, usuario = @usuario , actores =  @actores, url_descarga =  @url_descarga, url_previsualizacion =  @url_previsualizacion
WHERE id = @id
END

GO
/****** Object:  StoredProcedure [dbo].[Update_Usuario]    Script Date: 24/04/2019 18:37:01 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE   PROCEDURE [dbo].[Update_Usuario]
@id int,
@usuario varbinary(30),
@contrasenna varbinary(30),
@nombre varbinary(30),
@primer_apellido varbinary(30),
@pregunta_seguridad varbinary(50),
@rol int
AS
BEGIN
	
	SET NOCOUNT ON;

UPDATE dbo.usuario
SET  usuario = @usuario, contrasenna = @contrasenna, nombre = @nombre, primer_apellido = @primer_apellido, pregunta_seguridad = @pregunta_seguridad, rol = @rol
WHERE id = @id
END
GO
USE [master]
GO
ALTER DATABASE [EDescargas2] SET  READ_WRITE 
GO
