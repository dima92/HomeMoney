﻿using System.Collections.Generic;
using Authorization.Core.Models;
using Authorization.Core.Repository;
using System.Web.Http;
using System.Web.Http.Cors;

namespace Authorization.Core.Controllers
{
    // CORS
    [EnableCors(origins: "http://localhost:50565", headers: "*", methods: "*", SupportsCredentials = true)]
    // [Authorize]
    [RoutePrefix("api/categoty")]
    public class CategoryController : ApiController
    {
        private readonly CategoryBll _categoryBll = new CategoryBll();
        // GET api/values
        [Route("getAllCategotys")]
        [HttpGet]
        public IHttpActionResult GetAllCategotys(bool status)
        {
            List<Category> result = _categoryBll.GetAllCategotys(status);
            return Ok(result);
        }

        [Route("addCategory")]
        [HttpPost]
        public IHttpActionResult AddCategory(CategoryDto data)
        {
            _categoryBll.AddCategory(data);
            return Ok(true);
        }

        [Route("getAllIncomeExpenses")]
        [HttpGet]
        public IHttpActionResult GetAllIncomeExpenses(bool? status)
        {
            List<IncomeExpenses> result = _categoryBll.GetAllIncomeExpenses(status);
            return Ok(result);
        }
    }
}
