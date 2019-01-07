using Authorization.Core.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;

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

        public void AddCategory(CategoryDto data)
        {
            if (data.Name == null)
            {
                AddCategoryId(data);
            }
            else
            {
                Category newCategory = new Category
                {
                    Description = data.Name,
                    ProfitType = data.ProfitType
                };
                _db.Category.Add(newCategory);
                _db.Entry(newCategory).State = EntityState.Added;
                _db.SaveChanges();
                data.SelectCategoryId = newCategory.Id;
                AddCategoryId(data);

            }
        }

        public void AddCategoryId(CategoryDto data)
        {
            var userId = _db.Users.FirstOrDefault(f => f.Email == data.Email)?.Id;
            IncomeExpenses incomeExpenses = new IncomeExpenses
            {
                CategoryId = data.SelectCategoryId,
                Description = data.Description,
                Summa = (double)data.Summa,
                DateСreate = DateTime.Now,
                ApplicationUser_Id1 = userId

            };

            _db.IncomeExpensese.Add(incomeExpenses);
            _db.SaveChanges();
        }

        public List<IncomeExpenses> GetAllIncomeExpenses(bool? status, string startDate, string endDate)
        {
            var startDat = Convert.ToDateTime(startDate);
            var endDat = Convert.ToDateTime(endDate);
            var result = _db.IncomeExpensese.Where(w => w.Category.ProfitType != status
            && w.DateСreate >= startDat  && w.DateСreate <= endDat ).ToList();
            foreach (var expensese in result)
            {
                expensese.ApplicationUser = _db.Users.Find(expensese.ApplicationUser_Id1);
            }
            return result;
        }
    }
}