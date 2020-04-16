let startBtn = document.getElementById('start'),
    budgetValue = document.querySelector('.budget-value'),
    dayBudgetValue = document.querySelector('.daybudget-value'),
    levelValue = document.querySelector('.level-value'),
    expensesValue = document.querySelector('.expenses-value'),
    optionalExpensesValue = document.querySelector('.optionalexpenses-value'),
    incomeValue = document.querySelector('.income-value'),
    monthsavingsValue = document.querySelector('.monthsavings-value'),
    yearsavingsValue = document.querySelector('.yearsavings-value'),
    expensesItems = document.querySelectorAll('.expenses-item'),
    optionalExpensesItems = document.querySelectorAll('.optionalexpenses-item'),
    expensesBtn = document.querySelector('.expenses-item-btn'),
    optionalExpensesBtn = document.querySelector('.optionalexpenses-btn'),
    countBudgetBtn = document.querySelector('.count-budget-btn'),
    chooseIncome = document.querySelector('.choose-income'),
    savings = document.querySelector('#savings'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money, time;

expensesBtn.disabled = true;
expensesBtn.style.opacity = '0.5';
optionalExpensesBtn.disabled = true;
optionalExpensesBtn.style.opacity = '0.5';
countBudgetBtn.disabled = true;
countBudgetBtn.style.opacity = '0.5';

startBtn.addEventListener('click', function() {
  time  = prompt("Введите дату в формате YYYY-MM-DD", "");
  money = +prompt("Ваш бюджет на месяц?", "");
  
  while(isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?", "");
  }

  appData.budget = money;
  appData.timeData = time;
  budgetValue.textContent = money.toFixed();
  yearValue.value = new Date(Date.parse(time)).getFullYear();
  monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
  dayValue.value = new Date(Date.parse(time)).getDate();

  expensesBtn.disabled = false;
  expensesBtn.style.opacity = '1';
  optionalExpensesBtn.disabled = false;
  optionalExpensesBtn.style.opacity = '1';
  countBudgetBtn.disabled = false;
  countBudgetBtn.style.opacity = '1';
});

expensesBtn.addEventListener('click', function() {
  let summ = 0;

  for ( let i = 0; i < expensesItems.length; i++ ) {
    let a = expensesItems[i].value,
        b = expensesItems[++i].value;
  
    if ( (typeof(a)) === "string" && (typeof(a)) != null 
      && (typeof(b)) != null && a != "" && b != "" && a.length < 50 ) {
      console.log('done');
      appData.expenses[a] = b;
      summ += +b;
      expensesValue.textContent = summ;
    } else {
      console.log('bad result');
      i--;
    };
  };
});

optionalExpensesBtn.addEventListener('click', function() {
  for (let i = 0; i < optionalExpensesItems.length; i++) {
    let optExpenses = optionalExpensesItems[i].value;
    appData.optionalExpenses[i] = optExpenses;
    optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
  }
});

countBudgetBtn.addEventListener('click', function() {
  if(appData.budget != undefined) {
    let expenses = +expensesValue.textContent;
    if(expenses) {
      appData.moneyPerDay = ((appData.budget - expenses) / 30).toFixed();
    } else {
      appData.moneyPerDay = (appData.budget / 30).toFixed();
    }
    
    dayBudgetValue.textContent = appData.moneyPerDay;
  
    if ( appData.moneyPerDay <= 100 ) {
      levelValue.textContent = "Минимальный уровень дохода";
    } else if ( appData.moneyPerDay > 100 && appData.moneyPerDay < 2000 ) {
      levelValue.textContent = "Средний уровень дохода";
    } else if ( appData.moneyPerDay >= 2000 ) {
      levelValue.textContent = "Высокий уровень дохода";
    } else {
      levelValue.textContent = "Произошла ошибка!";
    };
  } else {
    dayBudgetValue.textContent = "Произошла ошибка!";
  }
});

chooseIncome.addEventListener('input', function() {
  let items = chooseIncome.value;
  appData.income = items.split(', ');
  incomeValue.textContent = appData.income;
});

savings.addEventListener('click', function() {
  if(appData.savings == true) {
    appData.savings = false;
  } else {
    appData.savings = true;
  }
});

chooseSum.addEventListener('input', function() {
  if(appData.savings == true) {
    let summ = +chooseSum.value,
        persent = +choosePercent.value;
    
    appData.monthIncome = (summ*persent/100/12);
    appData.yearIncome = (summ*persent/100);

    monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});

choosePercent.addEventListener('input', function() {
  if(appData.savings == true) {
    let summ = +chooseSum.value,
        persent = +choosePercent.value;
    
    appData.monthIncome = (summ*persent/100/12);
    appData.yearIncome = (summ*persent/100);

    monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});

let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
  savings: false,
};