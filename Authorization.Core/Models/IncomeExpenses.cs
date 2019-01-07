using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace Authorization.Core.Models
{
    public class IncomeExpenses
    {
        public int Id { get; set; }
        public int CategoryId { get; set; }
        public string ApplicationUser_Id1 { get; set; }
        public string ApplicationUser_Id { get; set; }
        public DateTime DateСreate { get; set; }
        public DateTime? DateDelete { get; set; }
        public string Description { get; set; }
        public double Summa { get; set; }
        public virtual ApplicationUser ApplicationUser { get; set; }
        public virtual Category Category { get; set; }
    }
}