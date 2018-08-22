using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Banker.Db;
using Banker.Models;
using MongoDB.Bson;
using MongoDB.Driver;

namespace bacnk_web.Models
{
    public class TransactionDB : DB<Transaction>
    {
        public TransactionDB(IMongoDatabase db) : base("Transaction", db)
        {
        }

        public async Task CreateTransaction(
            string name,
            int amount
        )
        {
            var newTrans = new Transaction()
            {
                TransactionName = name,
                Amount = amount,
            };
            await Insert(newTrans);
        }

        public async Task<Transaction> GetTransaction(string id)
        {
            return await GetOne(new BsonDocument("_id", ObjectId.Parse(id)));
        }

        public async Task<List<Transaction>> GetCustomers()
        {
            return await GetAll(new BsonDocument());
        }

    }
}