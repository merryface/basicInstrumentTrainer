class Aircraft {
  constructor(speed = 70, altitude = 3000, heading = 360) {
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

  // Methods to get speed, altitude, and heading
  getSpeed() {
    return this.speed;
  }

  getAltitude() {
    return this.altitude;
  }

  getHeading() {
    return this.heading;
  }
}

module.exports = Aircraft;