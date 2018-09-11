using RentalCarsAPI.Models.Domain;
using RentalCarsAPI.Models.Request;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace RentalCarsAPI.Services
{
    public class RentalCarsService
    {
        string connectionString = ConfigurationManager.ConnectionString["RentalCars"].ConnectionString;

        SqlConnection GetConnection()
        {
            var con = new SqlConnection(ConfigurationManager.ConnectionString["RentalCars"].ConnectionString);
            con.Open();

            return con;
        }

        public int RentalCarCreate(RentalCarCreateRequest request)
        {
            using (var con = GetConnection())
            {
                var cmd = con.CreateCommand();

                cmd.CommandText = "RentalCars_Insert";
                cmd.CommandType = CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@Make", request.Make);
                cmd.Parameters.AddWithValue("@Model", request.Model);
                cmd.Parameters.AddWithValue("@Year", request.Year);
                cmd.Parameters.AddWithValue("@CarType", request.CarType);
                cmd.Parameters.AddWithValue("@VIN", request.VIN);
                cmd.Parameters.AddWithValue("@Color", request.Color);

                cmd.ExecuteNonQuery();

                return (int)cmd.Parameters("@Id").Value;
            }
        }

        public List<RentalCar> GetAllRentalCars()
        {
            using (var con = GetConnection())
            {
                var cmd = con.CreateCommand();

                cmd.CommandText = "RentalCars_SelectAll";
                cmd.CommandType = CommandType.StoredProcedure;

                using (var reader = cmd.ExecuteReader())
                {
                    List<RentalCar> rentalCars = new List<RentalCar>();

                    while (reader.Read())
                    {
                        RentalCar car = new RentalCar();

                        car.CarType = (int)reader["CarType"];

                        object makeValue = reader["Make"];
                        if (makeValue != DBNull.Value)
                        {
                            car.Make = (string)makeValue;
                        }

                        object modelValue = reader["Model"];
                        if (modelValue != DBNull.Value)
                        {
                            car.Model = (string)modelValue;
                        }

                        object yearValue = reader["Year"];
                        if (yearValue != DBNull.Value)
                        {
                            car.Year = (int)yearValue;
                        }

                        object vinValue = reader["VIN"];
                        if (vinValue != DBNull.Value)
                        {
                            car.VIN = (string)vinValue;
                        }

                        object colorValue = 

                        rentalCars.Add(car);
                    }

                    return rentalCars;
                }


            }
        }

    }
}