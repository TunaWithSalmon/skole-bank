using System.Collections.Generic;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Driver;

namespace Bank_skole.db
{
    public abstract class DB<TModel>
    {
        private readonly IMongoCollection<TModel> _collection;
        
        protected DB(string collectionName, IMongoDatabase db)
        {
            _collection = db.GetCollection<TModel>(collectionName);
        }

        protected async Task Insert(TModel model)
        {
            await _collection.InsertOneAsync(model);
        }

        protected async Task<List<TModel>> GetAll(BsonDocument query)
        {
            return await _collection.Find(query).ToListAsync();
        }

        protected async Task<TModel> GetOne(BsonDocument query)
        {
            return await _collection.Find(query).FirstAsync();
        }
    }
}