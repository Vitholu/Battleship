function Shipyard(...ships) {
  let ship = {
    name: arguments[0],
    health: arguments[1],
    location: arguments[2],
    hit(...hitDamage) {
      return this.health -= arguments[0]
    }
  }
  if(arguments[3] !== NaN) {
    ship.hit(arguments[3])
  }
  return ship
}











module.exports = {Shipyard}