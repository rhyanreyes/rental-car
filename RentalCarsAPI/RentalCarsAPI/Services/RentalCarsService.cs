using RentalCarsAPI.Models.Domain;
using RentalCarsAPI.Models.Request;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace RentalCarsAPI.Services
{
    public class RentalCarsService
    {
        string connectionString = ConfigurationManager.ConnectionStrings["RentalCars"].ConnectionString;

        SqlConnection GetConnection()
        {
            var con = new SqlConnection(ConfigurationManager.ConnectionStrings["RentalCars"].ConnectionString);
            con.Open();

            return con;
        }

        public int CreateRentalCar(RentalCarCreateRequest request)
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

                return (int)cmd.Parameters["@Id"].Value;
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

                        car.Make = (string)reader["Make"];
                        car.Model = (string)reader["Model"];
                        car.Year = (int)reader["Year"];
                        car.CarType = (int)reader["CarType"];
                        car.DateCreated = (DateTime)reader["DateCreated"];

                        object vinValue = reader["VIN"];
                        if (vinValue != DBNull.Value)
                        {
                            car.VIN = (string)vinValue;
                        }

                        object colorValue = reader["Color"];
                        if (colorValue != DBNull.Value)
                        {
                            car.Color = (string)colorValue;
                        }

                        object dateModifiedValue = reader["DateModified"];
                        if (dateModifiedValue != DBNull.Value)
                        {
                            car.DateModified = (DateTime)dateModifiedValue;
                        }

                        rentalCars.Add(car);
                    }

                    return rentalCars;
                }
            }
        }

        public RentalCar GetRentalCarById(int id)
        {
            using (var con = GetConnection())
            {
                var cmd = con.CreateCommand();

                cmd.CommandText = "RentalCars_SelectById";
                cmd.CommandType = CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@Id", id);

                using (var reader = cmd.ExecuteReader())
                {
                    if (!reader.Read())
                    {
                        return null;
                    }

                    RentalCar car = new RentalCar();

                    car.Make = (string)reader["Make"];
                    car.Model = (string)reader["Model"];
                    car.Year = (int)reader["Year"];
                    car.CarType = (int)reader["CarType"];
                    car.DateCreated = (DateTime)reader["DateCreated"];

                    object vinValue = reader["VIN"];
                    if (vinValue != DBNull.Value)
                    {
                        car.VIN = (string)vinValue;
                    }

                    object colorValue = reader["Color"];
                    if (colorValue != DBNull.Value)
                    {
                        car.Color = (string)colorValue;
                    }

                    object dateModifiedValue = reader["DateModified"];
                    if (dateModifiedValue != DBNull.Value)
                    {
                        car.DateModified = (DateTime)dateModifiedValue;
                    }

                    return car;
                }
            }
        }

        public void UpdateRentalCar(RentalCarUpdateRequest request)
        {
            using (var con = GetConnection())
            {
                var cmd = con.CreateCommand();

                cmd.CommandText = "RentalCars_Update";
                cmd.CommandType = CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@Id", request.Id);
                cmd.Parameters.AddWithValue("@Make", request.Make);
                cmd.Parameters.AddWithValue("@Model", request.Model);
                cmd.Parameters.AddWithValue("@Year", request.Year);
                cmd.Parameters.AddWithValue("@Color", request.Color);
                cmd.Parameters.AddWithValue("@CarType", request.CarType);
                cmd.Parameters.AddWithValue("@VIN", request.VIN);

                cmd.ExecuteNonQuery();
            }
        }

        public void DeleteRentalCar(int id)
        {
            using (var con = GetConnection())
            {
                var cmd = con.CreateCommand();

                cmd.CommandText = "RentalCars_Delete";
                cmd.CommandType = CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@Id", id);

                cmd.ExecuteNonQuery();
            }
        }


    }
}