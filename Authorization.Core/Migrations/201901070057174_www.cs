namespace Authorization.Core.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class www : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.IncomeExpenses", "ApplicationUser_Id1", "dbo.AspNetUsers");
            DropIndex("dbo.IncomeExpenses", new[] { "ApplicationUser_Id1" });
            AddColumn("dbo.IncomeExpenses", "ApplicationUser_Id2", c => c.String(maxLength: 128));
            AlterColumn("dbo.IncomeExpenses", "ApplicationUser_Id1", c => c.String());
            CreateIndex("dbo.IncomeExpenses", "ApplicationUser_Id2");
            AddForeignKey("dbo.IncomeExpenses", "ApplicationUser_Id2", "dbo.AspNetUsers", "Id");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.IncomeExpenses", "ApplicationUser_Id2", "dbo.AspNetUsers");
            DropIndex("dbo.IncomeExpenses", new[] { "ApplicationUser_Id2" });
            AlterColumn("dbo.IncomeExpenses", "ApplicationUser_Id1", c => c.String(maxLength: 128));
            DropColumn("dbo.IncomeExpenses", "ApplicationUser_Id2");
            CreateIndex("dbo.IncomeExpenses", "ApplicationUser_Id1");
            AddForeignKey("dbo.IncomeExpenses", "ApplicationUser_Id1", "dbo.AspNetUsers", "Id");
        }
    }
}
