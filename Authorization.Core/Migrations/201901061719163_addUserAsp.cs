namespace Authorization.Core.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addUserAsp : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.IncomeExpenses", "ApplicationUser_Id", "dbo.AspNetUsers");
            DropIndex("dbo.IncomeExpenses", new[] { "ApplicationUser_Id" });
            AddColumn("dbo.IncomeExpenses", "ApplicationUser_Id1", c => c.String(maxLength: 128));
            AlterColumn("dbo.IncomeExpenses", "ApplicationUser_Id", c => c.String());
            CreateIndex("dbo.IncomeExpenses", "ApplicationUser_Id1");
            AddForeignKey("dbo.IncomeExpenses", "ApplicationUser_Id1", "dbo.AspNetUsers", "Id");
            DropColumn("dbo.IncomeExpenses", "ApplicationUserId");
        }
        
        public override void Down()
        {
            AddColumn("dbo.IncomeExpenses", "ApplicationUserId", c => c.Int(nullable: false));
            DropForeignKey("dbo.IncomeExpenses", "ApplicationUser_Id1", "dbo.AspNetUsers");
            DropIndex("dbo.IncomeExpenses", new[] { "ApplicationUser_Id1" });
            AlterColumn("dbo.IncomeExpenses", "ApplicationUser_Id", c => c.String(maxLength: 128));
            DropColumn("dbo.IncomeExpenses", "ApplicationUser_Id1");
            CreateIndex("dbo.IncomeExpenses", "ApplicationUser_Id");
            AddForeignKey("dbo.IncomeExpenses", "ApplicationUser_Id", "dbo.AspNetUsers", "Id");
        }
    }
}
