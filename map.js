function Map(cols, rows) {
  this.size = size
  this.grid = {rows: rows, cols: cols}
  this.cellWidth = 0
  this.cellHeigth = 0

  this.draw = function() {

    for (var i = 0; i < this.grid.rows; i++) {
      for (var j = 0; j < this.grid.cols; j++) {
        push()
        noFill()
        noStroke()
        rect(j*this.cellWidth, i*this.cellHeight, this.cellWidth, this.cellHeight)
        pop()
      }
    }

    return this
  }
  this.gridInit = function() {
    this.cellWidth = width/this.grid.cols // 50 is the map offset set in sketch
    this.cellHeight = height/this.grid.rows

    return this
  }

}
