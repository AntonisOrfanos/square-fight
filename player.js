function Player(pos, color) {
  this.pos = createVector(pos.x, pos.y)
  this.color = color
  this.size = 20
  this.speed = 2
  this.damage = 5
  this.maxHealth = this.health = 100
  this.target = null
  this.isDead = false
}


Player.prototype.draw = function() {
  if (this.isDead) return
  push()
  fill(this.color)
  rect(this.pos.x - this.size/2, this.pos.y - this.size/2, this.size, this.size)
  pop()
  this.drawHealth()
}

Player.prototype.drawHealth = function() {
  var _x = this.pos.x - this.size/2
  var _y = this.pos.y - this.size
  var _width = this.size*(this.health/this.maxHealth)
  var _height = 3
  push()
  fill('yellowgreen')
  rect(_x, _y, _width, _height)
  pop()
}

Player.prototype.setTarget = function(target) {
  this.target = target
}

Player.prototype.move = function(waypoi) {
  this.pos.add(this.speed, this.speed)
}
Player.prototype.dealDamage = function(enemy) {
  enemy.takeDamage(this.damage)
}
Player.prototype.takeDamage = function(dmg) {
  this.health-=dmg
  if (this.health <= 0) this.isDead = true
}
