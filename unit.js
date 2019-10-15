function Unit(pos) {
  this.pos = createVector(pos.x, pos.y)
  this.color = "maroon"
  this.size = 20
  this.speed = 2
  this.damage = 5
  this.maxHealth = this.health = 100
  this.target = null
  this.isDead = false
  this.isSelected = false
}


Unit.prototype.draw = function() {
  if (this.isDead) return
  push()
  fill(this.color)
  rect(this.pos.x - this.size/2, this.pos.y - this.size/2, this.size, this.size)
  pop()
  if (this.isSelected) this.drawHealth()
}

Unit.prototype.drawHealth = function() {
  var _x = this.pos.x - this.size/2
  var _y = this.pos.y - this.size
  var _width = this.size*(this.health/this.maxHealth)
  var _height = 3
  push()
  fill('yellowgreen')
  rect(_x, _y, _width, _height)
  pop()
}

Unit.prototype.setTarget = function(target) { this.target = target }

Unit.prototype.move = function(waypoint) { this.pos.add(waypoint) }

Unit.prototype.dealDamage = function(enemy) { enemy.takeDamage(this.damage) }

Unit.prototype.takeDamage = function(dmg) {
  this.health -= dmg
  if (this.health <= 0) this.isDead = true
}
