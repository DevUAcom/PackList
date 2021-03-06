﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using PackList.Data.EntityTypeConfigurations;
using PackList.Data.Models;

namespace PackList.Data
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            // Customize the ASP.NET Identity model and override the defaults if needed.
            // For example, you can rename the ASP.NET Identity table names and more.
            // Add your customizations after calling base.OnModelCreating(builder);

            // Item
			builder.AddConfiguration(new ItemConfiguration());

            // Category
			builder.AddConfiguration(new CategoryConfiguration());

			// Luggage
			builder.AddConfiguration(new LuggageConfiguration());

			// LuggageBag
			builder.AddConfiguration(new LuggageBagConfiguration());

			// LuggageBagItem
			builder.AddConfiguration(new LuggageBagItemConfiguration());
		}

		public DbSet<Item> Items { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Luggage> Luggage { get; set; }
		public DbSet<Bag> Bags { get; set; }
	}
}
