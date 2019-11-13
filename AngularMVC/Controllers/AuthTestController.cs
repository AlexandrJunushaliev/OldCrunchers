using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
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

    public class LoginResponse
    {
        public User User;
        public string AuthToken;
        public string RefreshToken;
    }

    public class LoginRequest
    {
        public string Email;
        public string Password;
    }
    [ApiController]
    [Route("[controller]")]
    public class AuthTestController : ControllerBase
    {
        [HttpPost]
        public async Task<string> Post()
        {
            using (var reader = new StreamReader(Request.Body, Encoding.UTF8))
            {  
                var body = await reader.ReadToEndAsync();
                var bodyJson = JsonConvert.DeserializeObject<LoginRequest>(body);
                var authToken = "someAuthToken";
                var refreshToken = "someRefreshToken";
                var user = new User {Email = bodyJson.Email , PhoneNumber = "88005553535",DeliveryAddresses = new string[]{},BirthDate = DateTime.Now,Orders = new UsersOrder[]{new UsersOrder()}};
                var res = new LoginResponse(){AuthToken = authToken,RefreshToken = refreshToken,User = user};
                return JsonConvert.SerializeObject(res);
            }
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