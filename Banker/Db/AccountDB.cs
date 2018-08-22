using System.Collections.Generic;
using System.Threading.Tasks;
using Banker.Db;
using Banker.Models;
using MongoDB.Bson;
using MongoDB.Driver;

namespace bacnk_web.Models
{
    public class AccountDB : DB<Account>
    {
        public AccountDB(IMongoDatabase db) : base("Account", db)
        { 
        }

        public async Task<Account> GetAccount(string id)
        {
            return await GetOne(new BsonDocument("_id", ObjectId.Parse(id)));
        }

        public async Task<List<Account>> GetAccounts(string id)
        {
            return await GetAll(new BsonDocument("CustomerId", ObjectId.Parse(id)));
        }
    }
}