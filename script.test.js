const {Shipyard } = require('./script.js')

test("Shipyard creates ship objects", () => {
  ship = {
    name: "Freedom",
    health: 2,
    location: undefined,
    hit: undefined,
  }
  expect(Shipyard("Freedom", 2, undefined, undefined)).toMatchObject(ship)
}) 

test("Hit, decreases health property", () => {
  expect(Shipyard("Freedom", 2, undefined, 1)).toStrictEqual(expect.objectContaining({health: 1}))
})