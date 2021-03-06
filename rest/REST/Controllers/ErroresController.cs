﻿using ConectarDatos;
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

    public class ErroresController : ApiController
    {

        private DBDescargasEntities dbContext = new DBDescargasEntities();

        [HttpGet]
        //TODA LA LISTA
        public IEnumerable<error> Get()
        {
            using (DBDescargasEntities dbdescargarentities = new DBDescargasEntities())
            {
                return dbdescargarentities.errors.ToList();
            }
        }

        [HttpPost]
        //POST ERROR
        public IHttpActionResult AgregaErrpr([FromBody]error err)
        {
            if (ModelState.IsValid)
            {
                dbContext.errors.Add(err);
                dbContext.SaveChanges();
                return Ok(err);
            }
            else
            {
                return BadRequest();
            }
        }

    }
}
