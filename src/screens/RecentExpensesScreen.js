import { ExpensesOutput } from "@src/components/ExpenseWidgets";
import { ExpensesContext } from "@src/context/expenses-context";
import { getDateMinusDays } from "@src/utils/date";
import { fetchExpenses } from "@src/utils/http";
import { useContext, useEffect } from "react";
import { StyleSheet } from "react-native";

const RecentExpensesScreen = () => {
  const expensesCtx = useContext(ExpensesContext);

  useEffect(() => {
    async function getExpenses() {
      const expenses = await fetchExpenses();
      expensesCtx.setExpenses(expenses);
    }
    getExpenses();
  }, []);

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date >= date7DaysAgo && expense.date <= today;
  });

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod={"Last 7 Days"}
      fallBackText={"No Expenses Registered In the Last 7 Days."}
    />
  );
};

export default RecentExpensesScreen;

const styles = StyleSheet.create({});
