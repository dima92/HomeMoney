namespace Authorization.Core.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addSumma : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.IncomeExpenses", "Summa", c => c.Double(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.IncomeExpenses", "Summa");
        }
    }
}
