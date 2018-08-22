using System.Collections.Generic;
using System.Threading.Tasks;
using bacnk_web.Db;
using MongoDB.Bson;
using MongoDB.Driver;

namespace bacnk_web.Models
{
    public class AccountDB : DB<Account>
    {
        public AccountDB(IMongoDatabase db) : base("Account", db)
        { 
        }

        public async Task<List<Account>> GetAccounts()
        {
            return await GetAll(new BsonDocument());
        }
    }
}