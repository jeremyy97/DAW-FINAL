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
    public class BitacoraController : ApiController
    {
        private DBDescargasEntities dbContext = new DBDescargasEntities();

        [HttpGet]
        //TODA LA LISTA
        public IEnumerable<bitacora> Get()
        {
            using (DBDescargasEntities dbdescargarentities = new DBDescargasEntities())
            {
                return dbdescargarentities.bitacoras.ToList();
            }
        }

        [HttpPost]
        //INSERTAR UN REGISTRO EN BITACORA

        public IHttpActionResult AgregaPelicula([FromBody]bitacora bit)
        {
            if (ModelState.IsValid)
            {
                dbContext.bitacoras.Add(bit);
                dbContext.SaveChanges();
                return Ok(bit);
            }
            else
            {
                return BadRequest();
            }
        }


    }
}
