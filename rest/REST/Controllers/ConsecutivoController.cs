using ConectarDatos;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace REST.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ConsecutivoController : ApiController
    {
        private DBDescargasEntities dbContext = new DBDescargasEntities();

        [HttpGet]
        //TODA LA LISTA
        public IEnumerable<consecutivo> Get()
        {
            using (DBDescargasEntities dbdescargarentities = new DBDescargasEntities())
            {
                return dbdescargarentities.consecutivoes.ToList();
            }
        }

        [HttpGet]
        //SOLO UN CONSECUTIVO
        public consecutivo Get(int id)
        {
            using (DBDescargasEntities dbdescargarentities = new DBDescargasEntities())
            {
                return dbdescargarentities.consecutivoes.FirstOrDefault(e => e.id == id);
            }
        }


        [HttpPost]
        //CREAR CONSECUTIVO
        public IHttpActionResult AgregaConsecutivo([FromBody]consecutivo con)
        {
            if (ModelState.IsValid)
            {
                dbContext.consecutivoes.Add(con);
                dbContext.SaveChanges();
                return Ok(con);
            }
            else
            {
                return BadRequest();
            }
        }


        [HttpPut]
        //MODIFICAR CONSECUTIVOS
        public IHttpActionResult ActualizarConsecutivos(int id, [FromBody]consecutivo con)
        {
            if (ModelState.IsValid)
            {
                var consecutivoExiste = dbContext.consecutivoes.Count(c => c.id == id) > 0;

                if (consecutivoExiste)
                {
                    dbContext.Entry(con).State = EntityState.Modified;
                    dbContext.SaveChanges();

                    return Ok();
                }
                else
                {
                    return NotFound();
                }

            }
            else
            {
                return BadRequest();
            }
        }

    }
}
