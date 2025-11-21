class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}
class Driver extends User {
    constructor(name, rating, vehicle) {
        super(name, rating);   
        this.vehicle = vehicle;
    }
}
class Trip {
    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }

    calculateFare() {
        if (this.distance === undefined || this.distance === null) {
            throw new Error("Distance is required to calculate fare.");
        }
        if (this.distance < 0) {
            throw new Error("Distance cannot be negative.");
        }

        const ratePerKm = 10;
        return this.distance * ratePerKm;
    }
}