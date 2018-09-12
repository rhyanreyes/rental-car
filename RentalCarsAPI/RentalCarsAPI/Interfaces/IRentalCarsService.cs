using System.Collections.Generic;
using RentalCarsAPI.Models.Domain;
using RentalCarsAPI.Models.Request;

namespace RentalCarsAPI.Services
{
    public interface IRentalCarsService
    {
        int CreateCarType(RentalCarTypeCreateRequest request);
        int CreateRentalCar(RentalCarCreateRequest request);
        void DeleteCarType(int id);
        void DeleteRentalCar(int id);
        List<CarType> GetCarTypes();
        List<RentalCar> GetRentalCars();
        RentalCar GetRentalCarById(int id);
        void UpdateCarType(RentalCarTypeUpdateRequest request);
        void UpdateRentalCar(RentalCarUpdateRequest request);
    }
}