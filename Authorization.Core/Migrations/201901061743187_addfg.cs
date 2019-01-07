namespace Authorization.Core.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addfg : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.IncomeExpenses", "Description", c => c.String());
            AlterColumn("dbo.IncomeExpenses", "DateDelete", c => c.DateTime());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.IncomeExpenses", "DateDelete", c => c.DateTime(nullable: false));
            DropColumn("dbo.IncomeExpenses", "Description");
        }
    }
}
