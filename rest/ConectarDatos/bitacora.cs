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
    
    public partial class bitacora
    {
        public int id { get; set; }
        public int producto { get; set; }
        public System.DateTime fecha { get; set; }
        public string descripcion { get; set; }
        public int usuario { get; set; }
    
        public virtual usuario usuario1 { get; set; }
    }
}