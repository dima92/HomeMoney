namespace Authorization.Core.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class uer : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.IncomeExpenses",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        CategoryId = c.Int(nullable: false),
                        DateСreate = c.DateTime(nullable: false),
                        DateDelete = c.DateTime(nullable: false),
                        ApplicationUserId = c.Int(nullable: false),
                        ApplicationUser_Id = c.String(maxLength: 128),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.AspNetUsers", t => t.ApplicationUser_Id)
                .ForeignKey("dbo.Categories", t => t.CategoryId, cascadeDelete: true)
                .Index(t => t.CategoryId)
                .Index(t => t.ApplicationUser_Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.IncomeExpenses", "CategoryId", "dbo.Categories");
            DropForeignKey("dbo.IncomeExpenses", "ApplicationUser_Id", "dbo.AspNetUsers");
            DropIndex("dbo.IncomeExpenses", new[] { "ApplicationUser_Id" });
            DropIndex("dbo.IncomeExpenses", new[] { "CategoryId" });
            DropTable("dbo.IncomeExpenses");
        }
    }
}
