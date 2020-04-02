"use strict"

let money = +prompt("Ваш бюджет на месяц?", "");
    time  = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: true
};

for ( let i = 0; i < 2; i++ ) {
  let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
      b = prompt("Во сколько обойдется?", "");

  appData.expenses[a] = b;
};

appData.moneyPerDay = (appData.budget / 30).toFixed(); // вернет строку!

alert( "Ежедневный бюджет составит: " + appData.moneyPerDay + " грн." );