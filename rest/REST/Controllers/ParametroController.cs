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

    public class ParametroController : ApiController
    {

        private DBDescargasEntities dbContext = new DBDescargasEntities();

        [HttpGet]
        //TODA LA LISTA
        public IEnumerable<parametro> Get()
        {
            using (DBDescargasEntities dbdescargarentities = new DBDescargasEntities())
            {
                return dbdescargarentities.parametroes.ToList();
            }
        }


       
        [HttpPost]
        //POST ERROR
        public IHttpActionResult AgregaParametro([FromBody]parametro par)
        {
            if (ModelState.IsValid)
            {
                dbContext.parametroes.Add(par);
                dbContext.SaveChanges();
                return Ok(par);
            }
            else
            {
                return BadRequest();
            }
        }

        [HttpPut]
        //Modificacion Parametro

        public IHttpActionResult ActualizarParametro(string id, [FromBody]parametro par)
        {
            if (ModelState.IsValid)
            {
                var ParametroExiste = dbContext.parametroes.Count(c => c.preLib.Equals(id)) > 0;

                if (ParametroExiste)
                {
                    dbContext.Entry(par).State = EntityState.Modified;
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


        [HttpDelete]
        //Eliminar Pelicula

        public IHttpActionResult EliminarParametro(string id)
        {
            var par = dbContext.parametroes.Find(id);

            if (par != null)
            {
                dbContext.parametroes.Remove(par);
                dbContext.SaveChanges();

                return Ok(par);
            }
            else
            {
                return NotFound();
            }
        }


    }
}
