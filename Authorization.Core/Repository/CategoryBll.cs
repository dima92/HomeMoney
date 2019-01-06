using Authorization.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Authorization.Core.Repository
{
    public class CategoryBll
    {
        private readonly ApplicationDbContext _db = new ApplicationDbContext();

        public List<Category> GetAllCategotys(bool status)
        {
            var result = _db.Category.Where(w => w.ProfitType == status).ToList();
            return result;
        }
    }
}