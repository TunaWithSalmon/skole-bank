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
            float amount,
            string accountid
        )
        {
            var newTrans = new Transaction()
            {
                TransactionName = name,
                Amount = amount,
                AccountId = ObjectId.Parse(accountid),
                Created = DateTime.Now,
                Modified = DateTime.Now
            };
            await Insert(newTrans);
        }

        public async Task<List<Transaction>> GetTransactions(string id)
        {
            return await GetAll(new BsonDocument("AccountId", ObjectId.Parse(id)));
        }

    }
}