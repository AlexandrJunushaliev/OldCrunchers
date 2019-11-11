using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace AngularMVC.Controllers
{
    public class User
    {
        public string Email;
        public string PhoneNumber;
        public string[] DeliveryAddresses;
        public DateTime BirthDate;
        public UsersOrder[] Orders;
    }

    public class UsersOrder
    {
        public string OrderDetails;
    }

    public class Response
    {
        public User User;
        public string Token;
    }
    [ApiController]
    [Route("[controller]")]
    public class AuthTestController : ControllerBase
    {
        [HttpGet]
        public string Get()
        {
            var token = "someToken";
            var user = new User {Email = "Email", PhoneNumber = "88005553535",DeliveryAddresses = new string[]{},BirthDate = DateTime.Now,Orders = new UsersOrder[]{new UsersOrder()}};
            var res = new Response(){Token = token,User = user};
            return JsonConvert.SerializeObject(res);

        }
    }
}