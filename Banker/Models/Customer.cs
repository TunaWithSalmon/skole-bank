using System;

namespace Banker.Models
{
    [Serializable]
    public class Customer
    {
        public MongoDB.Bson.ObjectId _id;
        public string FirstName;
        public string LastName;
        public string Cpr; 
        public DateTime Created;
        public DateTime Modified;
    }
}