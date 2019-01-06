using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Authorization.Core.Models
{
    public class Category
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public bool? ProfitType { get; set; } // тип прибыли true - приход , false - расход

    }
}