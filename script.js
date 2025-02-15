function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}
// console.log(getComputerChoice());

function getHumanChoice() {
  const humanChoice = prompt('Enter your choice: rock, paper, or scissors');
  if (humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissors') {
    return humanChoice;
  } else {
    return 'Invalid choice';
  }
}

// console.log(humanChoice());
let humanscore = 0;
let computerscore = 0;

function playround() {
  const computerChoice = getComputerChoice();
  const HumanChoice = getHumanChoice().toLowerCase();
  if (HumanChoice === computerChoice) {
    return 'It is a tie';
  }
  if (HumanChoice === 'rock') {
    if (computerChoice === 'paper') {
      computerscore++;
      return 'Computer wins';
    } else {
      humanscore++;
      return 'Human wins';
    }
  }
  if (HumanChoice === 'paper') {
    if (computerChoice === 'scissors') {
      computerscore++;
      return 'Computer wins';
    } else {
      humanscore++;
      return 'Human wins';
    }
  }
  if (HumanChoice === 'scissors') {
    if (computerChoice === 'rock') {
      computerscore++;
      return 'Computer wins';
    } else {
      humanscore++;
      return 'Human wins';
    }
  }
}

const humanselection = getHumanChoice();
const computerselection = getComputerChoice();

playround(humanselection, computerselection);

function playGame() {
  for (let i = 0; i < 5; i++) {
    playround();
  }
  if (humanscore > computerscore) {
    console.log('Human wins');
  } else if (humanscore < computerscore) {
    console.log('Computer wins');
  } else {
    return 'It is a tie';
  }
}