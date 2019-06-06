"use strict"

let money = prompt("Ваш бюджет на месяц?", "1000"),
	time  = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");

let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false
};

let expenseItem1 = prompt("Введите обязательную статью расходов в этом месяце", "Квартплата"),
	amount1 = prompt("Во сколько обойдется?", "200"),
	expenseItem2 = prompt("Введите обязательную статью расходов в этом месяце", "Квартплата"),
	amount2 = prompt("Во сколько обойдется?", "200");

appData.expenses.expenseItem1 = amount1;
appData.expenses.expenseItem2 = amount2;

alert( appData.budget/30 );