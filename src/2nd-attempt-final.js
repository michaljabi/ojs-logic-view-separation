import { fruitService } from './2nd-attempt.js'
import inquirer from 'inquirer';

console.log(`
            _                __             
 |\\/|      |_ ._    o _|_   (_  |_|  _  ._  
 |  | \\/   |  | |_| |  |_   __) | | (_) |_) 
      /                                 |   
`)

const PROGRAM_OPTIONS = {
  SORT_BY_NAME: 'Sort list by Name',
  SORT_BY_PRICE: 'Sort list by Price',
  EXIT: 'Close program'
}

function printList(){
  fruitService.getFruitList().forEach(fruit => {
    console.log(fruit.name, `${fruit.price}zł`)
  })
}

async function programLoop() {
  printList();

  const goto = await inquirer
    .prompt([
      {
        type: 'list',
        name: 'value',
        message: 'What do you want to do?',
        choices: [
          PROGRAM_OPTIONS.SORT_BY_NAME,
          PROGRAM_OPTIONS.SORT_BY_PRICE,
          new inquirer.Separator(),
          PROGRAM_OPTIONS.EXIT,
        ],
      },
    ])
  console.log(new inquirer.Separator().line)
  switch(goto.value) {
    case PROGRAM_OPTIONS.SORT_BY_NAME:
      fruitService.sortByName();
      programLoop();
      break;
    case PROGRAM_OPTIONS.SORT_BY_PRICE:
      fruitService.sortByPrice();
      programLoop();
      break;
    case PROGRAM_OPTIONS.EXIT:
      process.exit(0);
  }
}

programLoop();
