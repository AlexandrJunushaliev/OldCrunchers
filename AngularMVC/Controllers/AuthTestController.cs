using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace AngularMVC.Controllers
{
    public class RefreshTokenResult
    {
        public string token;
    }
    
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
        public string AuthToken;
        public string RefreshToken;
    }
    [ApiController]
    [Route("[controller]")]
    public class AuthTestController : ControllerBase
    {
        [HttpGet]
        public string Get()
        {
            var authToken = "someAuthToken";
            var refreshToken = "someRefreshToken";
            var user = new User {Email = "Email", PhoneNumber = "88005553535",DeliveryAddresses = new string[]{},BirthDate = DateTime.Now,Orders = new UsersOrder[]{new UsersOrder()}};
            var res = new Response(){AuthToken = authToken,RefreshToken = refreshToken,User = user};
            return JsonConvert.SerializeObject(res);

        }

        [Route("refreshToken")]
        [HttpGet]
        public string RefreshAuthToken()
        {
            Thread.Sleep(7000);
            var token = Request.Headers["refreshToken"].FirstOrDefault();
            if (token != null)
            {
                return JsonConvert.SerializeObject(new {token = "newToken"});
            }

            return JsonConvert.SerializeObject(new {noToken="no token"});
        }
    }
}