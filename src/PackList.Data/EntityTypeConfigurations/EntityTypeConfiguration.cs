﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

// https://github.com/aspnet/EntityFramework/issues/2805

namespace PackList.Data.EntityTypeConfigurations
{
	public abstract class EntityTypeConfiguration<TEntity>
			where TEntity : class
	{
		public abstract void Map(EntityTypeBuilder<TEntity> builder);
	}

	public static class ModelBuilderExtensions
	{
		public static void AddConfiguration<TEntity>(this ModelBuilder modelBuilder, EntityTypeConfiguration<TEntity> configuration)
			where TEntity : class
		{
			configuration.Map(modelBuilder.Entity<TEntity>());
		}
	}
}
