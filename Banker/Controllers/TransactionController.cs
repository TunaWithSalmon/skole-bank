using bacnk_web.Models;
using Banker.Db;
using Banker.Models;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web.Http;

namespace Banker.Controllers
{
    public class TransactionController : ApiController
    {
        public async Task<List<Transaction>> GetTransactions(string id)
        {
            var transactionDB = new TransactionDB(DbConnection.Singleton.Database);
            return await transactionDB.GetTransactions(id);
        }

        public async Task<string> PostTransaction([FromBody]Transaction accountJson, string id)
        {

            var transactionDB = new TransactionDB(DbConnection.Singleton.Database);
            await transactionDB.CreateTransaction(accountJson.TransactionName, accountJson.Amount, id);
            return "Success";
        }
    }
}