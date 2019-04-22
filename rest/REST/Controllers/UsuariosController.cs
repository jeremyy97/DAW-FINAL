using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using ConectarDatos;

namespace REST.Controllers4     
{

   // [EnableCors(origins: "http://localhost", headers: "Origin, X-Requested-With, Content-Type, Accept", methods: "GET, POST, PUT, DELETE, OPTIONS")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class UsuariosController : ApiController
    {
        private DBDescargasEntities dbContext = new DBDescargasEntities();

        [HttpGet]
        //TODA LA LISTA
        public IEnumerable<usuario> Get()
        {
            using(DBDescargasEntities dbdescargarentities = new DBDescargasEntities())
            {
                return dbdescargarentities.usuarios.ToList();
            }
        }

        [HttpGet]
        //SOLO UN USUARIO

        public usuario Get(int id)
        {
            using (DBDescargasEntities dbdescargarentities = new DBDescargasEntities())
            {
                return dbdescargarentities.usuarios.FirstOrDefault(e => e.id == id);
            }
        }

        [HttpGet]
        //SOLO UN USUARIO

        public usuario Login(string username, string password)
        {
            using (DBDescargasEntities dbdescargarentities = new DBDescargasEntities())
            {
                return dbdescargarentities.usuarios.FirstOrDefault(e => e.usuario1 == username && e.contrasenna == password);
            }
        }


        [HttpPost]
        //CREAR USUARIO

        public IHttpActionResult AgregaUsuario([FromBody]usuario usu)
        {
            if (ModelState.IsValid)
            {
                dbContext.usuarios.Add(usu);
                dbContext.SaveChanges();
                return Ok(usu);
            }
            else
            {
                return BadRequest();
            }
        }

       
        [HttpPut]
        //Modificacion Usuario

        public IHttpActionResult ActualizarUsuario (int id, [FromBody]usuario usu)
        {
            if (ModelState.IsValid)
            {
                var UsuarioExiste = dbContext.usuarios.Count(c => c.id == id) > 0;

                if (UsuarioExiste)
                {
                    dbContext.Entry(usu).State = EntityState.Modified;
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
        //Eliminar Usuario

        public IHttpActionResult EliminarUsuario(int id)
        {
            var usu = dbContext.usuarios.Find(id);

            if (usu != null)
            {
                dbContext.usuarios.Remove(usu);
                dbContext.SaveChanges();

                return Ok(usu);
            }
            else
            {
                return NotFound();
            }
        }


    }
}
