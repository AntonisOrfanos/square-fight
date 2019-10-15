var units = []
var selectionStart = null

function setup() {
  var mapSize = { cols: 30, rows: 30}
  var cellEdge = 10
  var mapOffset = 50

  createCanvas(mapSize.cols*cellEdge, mapSize.rows*cellEdge)

  var map = new Map(mapSize.cols, mapSize.rows)
  map.gridInit().draw()

  units.push(new Unit({x:100, y:100}))
  units.push(new Unit({x:50, y:50}))
}

function draw() {
  background(200)
  if (selectionStart != null) {
    push()
    noFill()
    stroke("green")
    rect(selectionStart.x, selectionStart.y, mouseX - selectionStart.x, mouseY - selectionStart.y)
    pop()
  }
  for (var i = 0; i < units.length; i++) {
    units[i].draw()
  }
}

function mousePressed() {
  if (mouseButton == LEFT)
   selectionStart = {x: mouseX, y:mouseY}
}

function mouseReleased() {
  if (mouseButton == LEFT) {
    selectUnits(selectionStart, {x:mouseX, y:mouseY})
    selectionStart = null
  }
}

function selectUnits(start, end) {
  normalizeSquare(start, end)
  for (var i = 0; i < units.length; i++) {
    if (units[i].pos.x > start.x && units[i].pos.x < end.x && units[i].pos.y > start.y && units[i].pos.y < end.y) {
      units[i].isSelected = true
    }
    else {
      units[i].isSelected = false
    }
    // console.log("unit ",i,units[i].isSelected);
  }
}
function normalizeSquare(start, end) {
  var temp = 0
  if (start.x > end.x) {
    temp = start.x
    start.x = end.x
    end.x = temp
  }
  if (start.y > end.y) {
    temp = start.y
    start.y = end.y
    end.y = temp
  }
}
