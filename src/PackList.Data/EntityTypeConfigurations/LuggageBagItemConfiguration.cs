using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PackList.Data.Models;

namespace PackList.Data.EntityTypeConfigurations
{
	public class LuggageBagItemConfiguration : EntityTypeConfiguration<LuggageBagItem>
	{
		public override void Map(EntityTypeBuilder<LuggageBagItem> builder)
		{
			builder.HasKey(lbi => new { lbi.LuggageId, lbi.BagId, lbi.ItemId });

			builder.HasOne(lbi => lbi.Luggage)
				.WithMany(l => l.LuggageBagItems)
				.HasForeignKey(lbi => lbi.LuggageId);

			builder.HasOne(lbi => lbi.Bag)
				.WithMany(b => b.LuggageBagItems)
				.HasForeignKey(lbi => lbi.BagId);

			builder.HasOne(lbi => lbi.Item)
				.WithMany(i => i.LuggageBagItems)
				.HasForeignKey(lbi => lbi.ItemId);
		}
	}
}
