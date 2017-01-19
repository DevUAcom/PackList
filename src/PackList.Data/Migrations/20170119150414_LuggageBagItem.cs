using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Metadata;

namespace PackList.Data.Migrations
{
    public partial class LuggageBagItem : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_AspNetUserRoles_UserId",
                table: "AspNetUserRoles");

            migrationBuilder.DropIndex(
                name: "RoleNameIndex",
                table: "AspNetRoles");

            migrationBuilder.CreateTable(
                name: "Bags",
                columns: table => new
                {
                    BagId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Bags", x => x.BagId);
                });

            migrationBuilder.CreateTable(
                name: "LuggageBag",
                columns: table => new
                {
                    LuggageId = table.Column<int>(nullable: false),
                    BagId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LuggageBag", x => new { x.LuggageId, x.BagId });
                    table.ForeignKey(
                        name: "FK_LuggageBag_Bags_BagId",
                        column: x => x.BagId,
                        principalTable: "Bags",
                        principalColumn: "BagId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_LuggageBag_Luggage_LuggageId",
                        column: x => x.LuggageId,
                        principalTable: "Luggage",
                        principalColumn: "LuggageId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "LuggageBagItem",
                columns: table => new
                {
                    LuggageId = table.Column<int>(nullable: false),
                    BagId = table.Column<int>(nullable: false),
                    ItemId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LuggageBagItem", x => new { x.LuggageId, x.BagId, x.ItemId });
                    table.ForeignKey(
                        name: "FK_LuggageBagItem_Bags_BagId",
                        column: x => x.BagId,
                        principalTable: "Bags",
                        principalColumn: "BagId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_LuggageBagItem_Items_ItemId",
                        column: x => x.ItemId,
                        principalTable: "Items",
                        principalColumn: "ItemId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_LuggageBagItem_Luggage_LuggageId",
                        column: x => x.LuggageId,
                        principalTable: "Luggage",
                        principalColumn: "LuggageId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "RoleNameIndex",
                table: "AspNetRoles",
                column: "NormalizedName",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_LuggageBag_BagId",
                table: "LuggageBag",
                column: "BagId");

            migrationBuilder.CreateIndex(
                name: "IX_LuggageBagItem_BagId",
                table: "LuggageBagItem",
                column: "BagId");

            migrationBuilder.CreateIndex(
                name: "IX_LuggageBagItem_ItemId",
                table: "LuggageBagItem",
                column: "ItemId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "LuggageBag");

            migrationBuilder.DropTable(
                name: "LuggageBagItem");

            migrationBuilder.DropTable(
                name: "Bags");

            migrationBuilder.DropIndex(
                name: "RoleNameIndex",
                table: "AspNetRoles");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserRoles_UserId",
                table: "AspNetUserRoles",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "RoleNameIndex",
                table: "AspNetRoles",
                column: "NormalizedName");
        }
    }
}
