{
    // conditiona type
    type Sheikh = {
        bike: string;
        car: string;
        ship: string;
        plane: string;
    }


    type CheckVehicle<T> = T extends keyof Sheikh ? true : false;

    type HasVehicle = CheckVehicle<"plane">;
}