var rover = {
    direction: "N",
      x: 0,
      y: 0,
      travelLog: []
    };
  //Possibles inputs for direction: "N", "S", "W" and "E"
  
  var command = "f";
  /*command can be only a letter of the list mentioned: f -> calls function moveForward(); b-> calls function moveBackward(); r -> calls function turnRight()
  and l -> calls function turnLeft() */
  
  var board = [ 
  [' ',' ','O','O','','','','','',''],
  ['O','O','O','','','','','','',''],
  ['O','','','','','','','','',''],
  ['','R','','','','','','','',''],
  ['','R','','','','','','','',''],
  ['','','','','','','','','',''],
  ['','','','','','','','','',''],
  ['','','','','','','','','',''],
  ['','','','','','','','','',''],
  ['','','','','','','','','',''],
  ]
  //board represents the grid in which our rover will move. O means any obstacle and R1, R2, R3,...Rn are the other rovers
      
  //The following two functions turn the rover to the left (l) or to the right (r)
  function turnLeft(rover){
    switch(rover.direction){
        case "N":
        rover.direction = "W";
        console.log(`New direction is ${rover.direction}`);
        break;
        case "W":
        rover.direction = "S";
        console.log(`New direction is ${rover.direction}`);
        break;
        case "S":
        rover.direction = "E";
        console.log(`New direction is ${rover.direction}`);
        break;
        case "E":
        rover.direction = "N";
        console.log(`New direction is ${rover.direction}`);
        break;
    }
  }
  
  function turnRight(rover){
      switch(rover.direction){
        case "N":
        rover.direction = "E";
        console.log(`New direction is ${rover.direction}`);
        break;
        case "E":
        rover.direction = "S";
        console.log(`New direction is ${rover.direction}`);
        break;
        case "S":
        rover.direction = "W";
        console.log(`New direction is ${rover.direction}`);
        break;
        case "W":
        rover.direction = "N";
        console.log(`New direction is ${rover.direction}`);
        break;
    }
  }
  
  //The following two functions move the rover forward or backward
  function moveForward(rover){
        rover.travelLog[rover.travelLog[length-2]] = rover.x;
        rover.travelLog[rover.travelLog[length-1]] = rover.y;
        switch(rover.direction){
        case "N":
        rover.y -= 1;
        break;
        case "E":
        rover.x -= 1;
        break;
        case "S":
        rover.y += 1;
        break;
        case "W":
        rover.x += 1;
        break;
    }
    rover.travelLog.push(rover.x);
    rover.travelLog.push(rover.y);
    if (board[rover.x, rover.y] === 'O'){
      console.log(`There is an obstacle in that position. You should choose another move.`);
    }else if (board[rover.x, rover.y] === 'R'){
      console.log(`There is another rover in the grid. You should choose another move.`);
    }else{
      if(rover.x>0 && rover.y>0){
      console.log(`Previous positions were x: ${rover.travelLog[length-2]} and y: ${rover.travelLog[length-1]}`);
      console.log(`New position is x: ${rover.x}, y: ${rover.y}`);
      }else{
      console.log(`You cannot walk outside the grid. Your position is ${rover.x} and ${rover.y}. Please correct the direction.`);
      }
    }
  }
  
  function moveBackward(rover){
    rover.travelLog[rover.travelLog[length-2]] = rover.x;
    rover.travelLog[rover.travelLog[length-1]] = rover.y;
        switch(rover.direction){
        case "N":
        rover.y += 1;
        break;
        case "E":
        rover.x += 1;
        break;
        case "S":
        rover.y -= 1;
        break;
        case "W":
        rover.x -= 1;
        break;
    }
      rover.travelLog.push(rover.x);
      rover.travelLog.push(rover.y);
      if (board[rover.x, rover.y] === 'O'){
      console.log(`There is an obstacle in that position. You should choose another move.`);
        }else if (board[rover.x, rover.y] === 'R'){
        console.log(`There is another rover in the grid. You should choose another move.`);
        }else{
        if(rover.x>0 && rover.y>0){
        console.log(`Previous positions were x: ${rover.travelLog[length-2]} and y: ${rover.travelLog[length-1]}`);
        console.log(`New position is x: ${rover.x}, y: ${rover.y}`);
        }else{
        console.log(`You cannot walk outside the grid. Your position is ${rover.x} and ${rover.y}. Please correct the direction.`);
      }
    }
  }
  function chooseCommands(command){
    for (var i=0; i< command.length; i++){
     //The next if validates the command entered by user
     if(command[i] ==="f" || command[i] ==="b"|| command[i] === "l" || command[i] === "r"){
      switch(command[i]){
      case "f":
      moveForward(rover);
      break;
      case "r":
      turnRight(rover);
      break;
      case "l":
      turnLeft(rover);
      break;
      case "b":
      moveBackward(rover);
      break;
    }
    console.log(`Rover has passed by the positions: ${rover.travelLog}`);
    }else{
    console.log("Enter a valid command 'f', 'r', 'l' or 'b'");
    }
  }
  }
  chooseCommands(command);
  