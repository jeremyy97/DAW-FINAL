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
    public class MusicaController : ApiController
    {
        private DBDescargasEntities dbContext = new DBDescargasEntities();

        [HttpGet]
        //TODA LA LISTA
        public IEnumerable<musica> Get()
        {
            using (DBDescargasEntities dbdescargarentities = new DBDescargasEntities())
            {
                return dbdescargarentities.musicas.ToList();
            }
        }

        [HttpGet]
        //SOLO UNA PELICULA
        public musica Get(int id)
        {
            using (DBDescargasEntities dbdescargarentities = new DBDescargasEntities())
            {
                return dbdescargarentities.musicas.FirstOrDefault(e => e.id == id);
            }
        }


        [HttpPost]
        //CREAR MUSICA
        public IHttpActionResult AgregaMusica([FromBody]musica mus)
        {
            if (ModelState.IsValid)
            {
                dbContext.musicas.Add(mus);
                dbContext.SaveChanges();
                return Ok(mus);
            }
            else
            {
                return BadRequest();
            }
        }


        [HttpPut]
        //Modificacion Musica
        public IHttpActionResult ActualizarMusica(int id, [FromBody]musica mus)
        {
            if (ModelState.IsValid)
            {
                var MusicaExiste = dbContext.musicas.Count(c => c.id == id) > 0;

                if (MusicaExiste)
                {
                    dbContext.Entry(mus).State = EntityState.Modified;
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
        //Eliminar Musica
        public IHttpActionResult EliminarMusica(int id)
        {
            var mus = dbContext.musicas.Find(id);

            if (mus != null)
            {
                dbContext.musicas.Remove(mus);
                dbContext.SaveChanges();

                return Ok(mus);
            }
            else
            {
                return NotFound();
            }
        }
    }
}
