function Shipyard(...ships) {
  let ship = {
    name: arguments[0],
    health: arguments[1],
    location: arguments[2],
    hit(...hitDamage) {
      return this.health -= arguments[0]
    },
    isSunk() {
      return true
    }
  }
  if(arguments[3] !== NaN) {
    ship.hit(arguments[3])
  }
  if(ship.health === 0) {
    return ship.isSunk()
  }
  return ship
}











module.exports = {Shipyard}