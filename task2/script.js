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

  if ( (typeof(a)) === "string" && (typeof(a)) != null 
    && (typeof(b)) != null && a != "" && b != "" && a.length < 50 ) {
    console.log('done');
    appData.expenses[a] = b;
  } else {
    console.log('bad result');
    i--;
  };
};

appData.moneyPerDay = (appData.budget / 30).toFixed(); // вернет строку!

alert( "Ежедневный бюджет составит: " + appData.moneyPerDay + " грн." );


if ( appData.moneyPerDay < 100 ) {
  console.log( "Минимальный уровень дохода" );
} else if ( appData.moneyPerDay > 100 && appData.moneyPerDay < 2000 ) {
  console.log( "Средний уровень дохода" );
} else if ( appData.moneyPerDay > 2000 ) {
  console.log( "Высокий уровень дохода" );
} else {
  console.log( "Произошла ошибка!" );
};
