using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;
using bacnk_web.Models;
using Banker.Db;
using Banker.Models;

namespace Banker.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class CustomerController : ApiController
    {
        public async Task<Customer> GetCustomer(string id)
        {
            var customerDB = new CustomerDB(DbConnection.Singleton.Database);
            return await customerDB.GetCustomer(id);
        }

        public async Task<List<Customer>> GetCustomers()
        {
            var customerDB = new CustomerDB(DbConnection.Singleton.Database);
            return await customerDB.GetCustomers();
        }

        public async Task<string> PostCustomer([FromBody]Customer accountJson)
        {
        
            var customerDB = new CustomerDB(DbConnection.Singleton.Database);
            await customerDB.CreateCustomer(accountJson.FirstName, accountJson.LastName, accountJson.Cpr);
            return "Success";
        }

        public async Task<string> DeleteCustomer([FromBody]Account accountJson, string id)
        {

            var customerDB = new CustomerDB(DbConnection.Singleton.Database);
            await customerDB.DeleteCustomer(id);
            return "Success";
        }
    }
}