const shortid = require('shortid');
const ObjectClass = require('./object');
const Constants = require('../shared/constants');

class Food extends ObjectClass {
  constructor(x, y, dir) {
    super(shortid(), x, y, dir, Constants.FOOD_SPEED);
  }

  // Returns true if the bullet should be destroyed
  update(dt) {
    super.update(dt);
    return this.x < 0 || this.x > Constants.MAP_SIZE || this.y < 0 || this.y > Constants.MAP_SIZE;
  }
}

module.exports = Food;
