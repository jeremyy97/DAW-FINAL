﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace ConectarDatos
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class DBDescargasEntities : DbContext
    {
        public DBDescargasEntities()
            : base("name=DBDescargasEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<bitacora> bitacoras { get; set; }
        public virtual DbSet<categoria_libro> categoria_libro { get; set; }
        public virtual DbSet<compra> compras { get; set; }
        public virtual DbSet<consecutivo> consecutivoes { get; set; }
        public virtual DbSet<error> errors { get; set; }
        public virtual DbSet<genero_musica> genero_musica { get; set; }
        public virtual DbSet<genero_pelicula> genero_pelicula { get; set; }
        public virtual DbSet<libro> libroes { get; set; }
        public virtual DbSet<musica> musicas { get; set; }
        public virtual DbSet<parametro> parametroes { get; set; }
        public virtual DbSet<pelicula> peliculas { get; set; }
        public virtual DbSet<rol> rols { get; set; }
        public virtual DbSet<usuario> usuarios { get; set; }
    }
}