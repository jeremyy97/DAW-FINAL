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
    
    public partial class musica
    {
        public string id { get; set; }
        public string nombre { get; set; }
        public Nullable<int> usuario { get; set; }
        public Nullable<int> genero { get; set; }
        public string tipo_interpretacion { get; set; }
        public string idioma { get; set; }
        public string pais { get; set; }
        public string disquera { get; set; }
        public string disco { get; set; }
        public Nullable<int> year { get; set; }
        public string url_descarga { get; set; }
        public string url_previsualizacion { get; set; }
    }
}
