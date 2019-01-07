using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Authorization.Core.Models
{
    public class CategoryDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Summa { get; set; }
        public bool ProfitType { get; set; }
        public int SelectCategoryId { get; set; }
        public string Email { get; set; }
    }
}