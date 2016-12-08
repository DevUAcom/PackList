using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace PackList.Data.Repositories
{
	public class GenericRepository<TEntity> where TEntity : class
	{
		private ApplicationDbContext context;
		private DbSet<TEntity> dbSet;
		public GenericRepository(ApplicationDbContext context)
		{
			this.context = context;
			dbSet = context.Set<TEntity>();
		}
		public IEnumerable<TEntity> GetAll()
		{
			return dbSet.AsNoTracking().ToList();
		}

		public IEnumerable<TEntity> GetBy(Expression<Func<TEntity, bool>> predicate)
		{
			return dbSet.AsNoTracking().Where(predicate).ToList();
		}

		public TEntity FindById<TKey>(TKey id)
		{
			var item = Expression.Parameter(typeof(TEntity), "entity");
			var prop = Expression.Property(item, typeof(TEntity).Name + "Id");
			var value = Expression.Constant(id);
			var equal = Expression.Equal(prop, value);
			var lambda = Expression.Lambda<Func<TEntity, bool>>(equal, item);

			return dbSet.AsNoTracking().SingleOrDefault(lambda);
		}

		public void Add(TEntity entity)
		{
			context.Add(entity);
			context.SaveChanges();
		}

		public void DeleteById<TKey>(TKey id)
		{
			var entity = dbSet.Find(id);
			if (entity != null)
			{
				dbSet.Remove(entity);
				context.SaveChanges();
			}
		}



	}
}
