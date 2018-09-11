using RentalCarsAPI.Models.Domain;
using RentalCarsAPI.Models.Request;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace RentalCarsAPI.Services
{
    public class RentalCarsService
    {
        public List<RentalCar> rentalCars = new List<RentalCar>();



        public int RentalCarCreate(RentalCarCreateRequest rentalCarCreate)
        {
            SqlConnection GetConnection()
            {
                var con = new SqlConnection(ConfigurationManager.ConnectionString["RentalCars"].ConnectionString);
                con.Open();

                return con;
            }
        }
    }
}