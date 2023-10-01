export class Aircraft {
  constructor(speed = 105, altitude = 3000, heading = 360) {
    this.speed = speed;
    this.altitude = altitude;
    this.heading = heading;
  }

  // Methods to set speed, altitude, and heading
  setSpeed(newSpeed) {
    this.speed = newSpeed;
  }

  setAltitude(newAltitude) {
    this.altitude = newAltitude;
  }

  setHeading(newHeading) {
    this.heading = newHeading;
  }
}
