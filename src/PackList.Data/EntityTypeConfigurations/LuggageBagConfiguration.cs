using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PackList.Data.Models;

namespace PackList.Data.EntityTypeConfigurations
{
	public class LuggageBagConfiguration : EntityTypeConfiguration<LuggageBag>
	{
		public override void Map(EntityTypeBuilder<LuggageBag> builder)
		{
			builder.HasKey(lb => new { lb.LuggageId, lb.BagId });

			builder.HasOne(lb => lb.Luggage)
				.WithMany(l => l.LuggageBags)
				.HasForeignKey(lb => lb.LuggageId);

			builder.HasOne(lb => lb.Bag)
				.WithMany(b => b.LuggageBags)
				.HasForeignKey(lb => lb.BagId);
		}
	}
}
