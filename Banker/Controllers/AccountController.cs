using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web.Http;
using bacnk_web.Models;
using Banker.Db;
using Banker.Models;
using Newtonsoft.Json;

namespace Banker.Controllers
{
    public class AccountController : ApiController
    { 
        public async Task<Account> GetAccount(string id)
        {
            var accountDB = new AccountDB(DbConnection.Singleton.Database);
            return await accountDB.GetAccount(id);
        }

        public async Task<List<Account>> GetAccounts(string id)
        {
            var accountDB = new AccountDB(DbConnection.Singleton.Database);
            return await accountDB.GetAccounts(id);
        }

        public async Task<string> PostAccount([FromBody]Account accountJson, string id)
        {

            var accountDB = new AccountDB(DbConnection.Singleton.Database);
            await accountDB.CreateAccount(accountJson.AccountType, id);
            return "Success";
        }

        public async Task<string> DeleteAccount([FromBody]Account accountJson, string id)
        {

            var accountDB = new AccountDB(DbConnection.Singleton.Database);
            await accountDB.DeleteAccount(id);
            return "Success";
        }
    }
}
