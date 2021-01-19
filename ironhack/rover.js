console.log('Mars Rover');

let rover = {
    direction: 'N', 
    x: 0, 
    y: 0, 
    travelLog: []
};

let size = {
  x: 10,
  y: 10
};

let grid = [];

function createGrid(grid, size) {
  console.log('Grid created')
  for (let i = 0; i < size.x; i++) {
    grid[i] = [];
    for (let j = 0; j < size.y; j++) { grid[i][j] = ' ' }
  }
}

createGrid(grid, size);

console.log('Welcome, commmands: \n turnLeft(rover)\n turnRight(rover)\n moveForward(rover)\n moveBackward(rover)\n goForward(rover)\n restart\n');

function turnLeft(rover) {
    switch (rover.direction) {
        case 'N':
          rover.direction = 'W';
          break;
        case 'S':
          rover.direction = 'E';
          break;
        case 'E':
          rover.direction = 'N';
          break;
        case 'W':
          rover.direction = 'S';
          break;
  }
  console.log('turnLeft was called! Now facing: ' + rover.direction);
}
  
function turnRight(rover) {
    switch (rover.direction) {
        case 'N':
          rover.direction = 'E';
          break;
        case 'S':
          rover.direction = 'W';
          break;
        case 'E':
          rover.direction = 'S';
          break;
        case 'W':
          rover.direction = 'N';
          break;
  }
  console.log('turnRight was called! Now facing: ' + rover.direction);
}
  
function moveForward(rover){
    let pastX = rover.x;
    let pastY = rover.y;

    if(rover.x >= 0 && rover.y >= 0){
        switch (rover.direction) {
            case 'N':
            rover.y--;
            break;
            case 'S':
            rover.y++;
            break;
            case 'E':
            rover.x++;
            break;
            case 'W':
            rover.x--;
            break;
        }
    } else {
        console.log('Invalid position. Please restart.');
        rover
    }

    rover.travelLog.push([pastX, pastY]);
    console.log('moveForward was called! Current pos: [' + rover.x + ',' + rover.y + ']');
}

function moveBackward(rover){
  let pastX = rover.x;
  let pastY = rover.y;

  if(rover.x >= 0 && rover.y >= 0){
    switch (rover.direction) {
        case 'N':
        rover.y++;
        break;
        case 'S':
        rover.y--;
        break;
        case 'E':
        rover.x--;
        break;
        case 'W':
        rover.x++;
        break;
    }
 } else {
     console.log('Invalid position. Please restart.');
 }
    rover.travelLog.push([pastX, pastY]);
    console.log('moveBackward was called! Current pos: [' + rover.x + ',' + rover.y + ']');
  
}

function goForward(list) {

  for (let i = 0; i < list.length; i++) {
    switch (list[i]) {
      case 'f':
        moveForward(rover);
        break;
      case 'b':
        moveBackward(rover);
        break;
      case 'r':
        turnRight(rover);
        break;
      case 'l':
        turnLeft(rover);
        break;
      default:
        console.log('Invalid command detected. Please try again or restart.');
        break;
    }
  }

  let log = '';
  rover.travelLog.forEach(function(pos) {
    log += '[' + pos[0] + ',' + pos[1] + '] ';
  });
  console.log('Rover\'s travel log: ' + log);
  console.log('Final position of the Rover: [' + rover.x + ',' + rover.y + ']');
}

function restart(rover){
    rover.y = 0;
    rover.x = 0;
    rover.travelLog = [];
    console.log('Restarted');
}