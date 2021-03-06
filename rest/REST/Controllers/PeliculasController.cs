﻿using ConectarDatos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Data.Entity;

namespace REST.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class PeliculasController : ApiController
    {

        private DBDescargasEntities dbContext = new DBDescargasEntities();

        [HttpGet]
        //TODA LA LISTA
        public IEnumerable<pelicula> Get()
        {
            using (DBDescargasEntities dbdescargarentities = new DBDescargasEntities())
            {
                return dbdescargarentities.peliculas.ToList();
            }
        }

        [HttpGet]
        //SOLO UNA PELICULA

        public pelicula Get(int id)
        {
            using (DBDescargasEntities dbdescargarentities = new DBDescargasEntities())
            {
                return dbdescargarentities.peliculas.FirstOrDefault(e => e.id.Equals(id));
            }
        }


        [HttpPost]
        //CREAR PELICULA

        public IHttpActionResult AgregaPelicula([FromBody]pelicula pel)
        {
            if (ModelState.IsValid)
            {
                dbContext.peliculas.Add(pel);
                dbContext.SaveChanges();
                return Ok(pel);
            }
            else
            {
                return BadRequest();
            }
        }


        [HttpPut]
        //Modificacion pelicula

        public IHttpActionResult ActualizarPelicula(string id, [FromBody]pelicula pel)
        {
            if (ModelState.IsValid)
            {
                var PeliculaExiste = dbContext.peliculas.Count(c => c.id.Equals(id)) > 0;

                if (PeliculaExiste)
                {
                    dbContext.Entry(pel).State = EntityState.Modified;
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

        public IHttpActionResult EliminarPelicula(string id)
        {
            var pel = dbContext.peliculas.Find(id);

            if (pel != null)
            {
                dbContext.peliculas.Remove(pel);
                dbContext.SaveChanges();

                return Ok(pel);
            }
            else
            {
                return NotFound();
            }
        }
    }
}
