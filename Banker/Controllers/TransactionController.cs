using System.Web.Http;

namespace Banker.Controllers
{
    public class TransactionController : ApiController
    {
        public string Post([FromBody]string value)
        {
            return $"{value}";
        }
    }
}