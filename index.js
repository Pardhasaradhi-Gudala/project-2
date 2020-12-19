var readlineSync = require("readline-sync");

var chalk = require("chalk");

var named = readlineSync.question("what is your name: ");

console.log(chalk.bgYellow("Hello " + named))

var score = 0
{
function play(question, answer)
{
var about = readlineSync.question(question);

  if (about === answer)
  {
  console.log(chalk.bgMagentaBright("answer some questions about him then"));
  console.log("-----------")
  }
  else
  {
    console.log(chalk.bgMagentaBright("anyway try to answer some questions"));
    console.log("-----------")
  }

}
play("Do you know pardhu ","yes")
}

{
  function play(question1, answer1)
{
var about = readlineSync.question(question1);

  if (about === answer1)
  {
  console.log(chalk.green("right"));
  score = score + 1;
  console.log("current score: ", score);
  console.log("-----------")
  }
  else
  {
    console.log(chalk.red("wrong"));
    score = score +0;
    console.log("current score: ", score);
    console.log("-----------")
  }

}

play("where does he live ", "anakapalli")
play("what is his favourite sport ", "cricket")
play("what is his birthday month ","november")
play("what bike does he own pulsar ns or apache rr 310 ", "pulsar ns")
play("which college he graduated in ", "anits")
}

console.log(chalk.bgMagentaBright("your total score: ", score))

if (score >= 4)
  {
  console.log(chalk.bgMagentaBright("you have reached level two"));
  console.log("-----------")

  {
  function play(question2, answer2)
{
var about = readlineSync.question(question2);

  if (about === answer2)
  {
  console.log(chalk.green("right"));
  score = score + 1;
  console.log("current score: ", score);
  console.log("-----------")
  }
  else
  {
    console.log(chalk.red("wrong"));
    score = score +0;
    console.log("current score: ", score);
    console.log("-----------")
  }

}

play("what's his favourite food ", "biryani")
play("who's his favourite cricketer ", "virat kohli")
play("what course did he study in engineering ","mechanical")
play("what bike he like naked or sport ", "naked")
play("Did he met with an accident ever ", "yes")
}

console.log(chalk.bgMagentaBright("your total score: ", score))
  }
  else
  {
    console.log(chalk.bgMagentaBright("sorry, you can't reach level two"));
    console.log("-----------")
  }

