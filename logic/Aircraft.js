export class Aircraft {
  constructor(callsign = "A-BCDE", speed = 105, altitude = 3000, heading = 360) {
    this.speed = speed;
    this.altitude = altitude;
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

  setHeading(newHeading) {
    this.heading = newHeading;
  }
}
