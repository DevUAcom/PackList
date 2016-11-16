using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PackList.Data.Models;

namespace PackList.Data.EntityTypeConfigurations
{
	public class LuggageConfiguration : EntityTypeConfiguration<Luggage>
	{
		public override void Map(EntityTypeBuilder<Luggage> builder)
		{
			builder.Property(i => i.Name)
				.IsRequired()
				.HasMaxLength(200);

		}
	}
}
