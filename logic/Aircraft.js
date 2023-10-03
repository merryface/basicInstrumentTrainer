export class Aircraft {
  constructor(
    callsign = "A-BCDE",
    speed = 105,
    altitude = 3000,
    minAltitude = 2000,
    maxAltitude = 5000,
    heading = 360
    ) {
    this.speed = speed;
    this.altitude = altitude;
    this.minAltitude = minAltitude;
    this.maxAltitude = maxAltitude;
    this.heading = heading;
    this.callsign = callsign;
  }

  setCallsign(newCallsign) {
    this.callsign = newCallsign.toUpperCase();
  }

  setSpeed(newSpeed) {
    this.speed = newSpeed;
  }

  setAltitude(newAltitude) {
    this.altitude = newAltitude;
  }

  setMinAltitude(newMinAltitude) {
    this.minAltitude = newMinAltitude;
  }

  setMaxAltitude(newMaxAltitude) {
    this.maxAltitude = newMaxAltitude;
  }

  setHeading(newHeading) {
    this.heading = newHeading;
  }
}
