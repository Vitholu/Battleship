const {Shipyard } = require('./script.js')

test("Hit, decreases health property", () => {
  expect(Shipyard("Freedom", 2, undefined, 1)).toStrictEqual(expect.objectContaining({health: 1}))
})

test("If health is 0, ship is sunk", () => {
  expect(Shipyard("Freedom",2, undefined, 2)).toBe(true)
})