//------------------------------------------------------------------------------
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
    using System.Collections.Generic;
    
    public partial class libro
    {
        public int id { get; set; }
        public string nombre { get; set; }
        public int categoria { get; set; }
        public Nullable<int> usuario { get; set; }
        public int year { get; set; }
        public string idioma { get; set; }
        public string actores { get; set; }
        public string editorial { get; set; }
        public string url_descarga { get; set; }
        public string url_previsualizacion { get; set; }
    }
}
