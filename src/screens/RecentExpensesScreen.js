import { ExpensesOutput } from "@src/components/ExpenseWidgets";
import { ExpensesContext } from "@src/context/expenses-context";
import LoadingOverlay from "@src/UI/LoadingOverlay";
import { getDateMinusDays } from "@src/utils/date";
import { fetchExpenses } from "@src/utils/http";
import { useContext, useEffect, useState } from "react";
import { StyleSheet } from "react-native";

const RecentExpensesScreen = () => {
  const [isFetching, setIsFetching] = useState(true);
  const expensesCtx = useContext(ExpensesContext);

  useEffect(() => {
    async function getExpenses() {
      const expenses = await fetchExpenses();
      setIsFetching(false);
      expensesCtx.setExpenses(expenses);
    }
    getExpenses();
  }, []);

  if (isFetching) {
    return <LoadingOverlay />;
  }

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
