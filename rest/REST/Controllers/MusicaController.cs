using ConectarDatos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace REST.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class MusicaController : ApiController
    {
        [HttpGet]
        //TODA LA LISTA
        public IEnumerable<musica> Get()
        {
            using (DBDescargasEntities dbdescargarentities = new DBDescargasEntities())
            {
                return dbdescargarentities.musicas.ToList();
            }
        }   
    }
}
