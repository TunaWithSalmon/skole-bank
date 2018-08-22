using System.Web.Http;

namespace Banker.Controllers
{
    public class TransactionController : ApiController
    {
        
        public string Get(int id)
        {
            return "value";
        }

        public string Post([FromBody]string value)
        {
            return $"{value}";
        }

        public void Put(int id, [FromBody]string value)
        {
        }

        public void Delete(int id)
        {
        }
    }
}