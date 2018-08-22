using MongoDB.Driver;

namespace Banker.Db
{
    public class DbConnection
    {
        public IMongoDatabase Database;
        private static DbConnection _instance;
        
        public static DbConnection Singleton
        {
            get
            {
                if (_instance == null)
                {
                    _instance = new DbConnection();
                    return _instance;
                }
                else
                    return _instance;
            }
        }        
        
        public DbConnection()
        {
            Database = new MongoClient().GetDatabase("Bank");
        }
    }
}