//------------------------------------------------------------------------------
// <auto-generated>
//     Este código se generó a partir de una plantilla.
//
//     Los cambios manuales en este archivo pueden causar un comportamiento inesperado de la aplicación.
//     Los cambios manuales en este archivo se sobrescribirán si se regenera el código.
// </auto-generated>
//------------------------------------------------------------------------------

namespace ConectarDatos
{
    using System;
    using System.Collections.Generic;
    
    public partial class pelicula
    {
        public int id { get; set; }
        public string nombre { get; set; }
        public int genero { get; set; }
        public int year { get; set; }
        public string idioma { get; set; }
        public Nullable<int> usuario { get; set; }
        public string actores { get; set; }
        public string url_descarga { get; set; }
        public string url_previsualizacion { get; set; }
    
        public virtual genero_pelicula genero_pelicula { get; set; }
        public virtual usuario usuario1 { get; set; }
    }
}
