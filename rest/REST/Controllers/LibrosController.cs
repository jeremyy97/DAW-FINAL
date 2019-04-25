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
    public class LibrosController : ApiController
    {

        private DBDescargasEntities dbContext = new DBDescargasEntities();

        [HttpGet]
        //TODA LA LISTA
        public IEnumerable<libro> Get()
        {
            using (DBDescargasEntities dbdescargarentities = new DBDescargasEntities())
            {
                return dbdescargarentities.libroes.ToList();
            }
        }

        [HttpGet]
        //SOLO UN LIBRO
        public libro Get(int id)
        {
            using (DBDescargasEntities dbdescargarentities = new DBDescargasEntities())
            {
                return dbdescargarentities.libroes.FirstOrDefault(e => e.id.Equals(id));
            }
        }


        [HttpPost]
        //CREAR LIBRO
        public IHttpActionResult AgregaLibro([FromBody]libro lib)
        {
            if (ModelState.IsValid)
            {
                dbContext.libroes.Add(lib);
                dbContext.SaveChanges();
                return Ok(lib);
            }
            else
            {
                return BadRequest();
            }
        }


        [HttpPut]
        //Modificacion Libros
        public IHttpActionResult ActualizarLibros(string id, [FromBody]libro lib)
        {
            if (ModelState.IsValid)
            {
                var LibroExiste = dbContext.libroes.Count(c => c.id.Equals(id)) > 0;

                if (LibroExiste)
                {
                    dbContext.Entry(lib).State = EntityState.Modified;
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
        //Eliminar Libro
        public IHttpActionResult EliminarLibro(string id)
        {
            var lib = dbContext.libroes.Find(id);

            if (lib != null)
            {
                dbContext.libroes.Remove(lib);
                dbContext.SaveChanges();

                return Ok(lib);
            }
            else
            {
                return NotFound();
            }
        }

    }
}
