import { StyleSheet, Text, View } from "react-native";
import { ExpensesOutput } from "@src/components/ExpenseWidgets";
import { useContext } from "react";
import { ExpensesContext } from "@src/context/expenses-context";

const AllExpensesScreen = () => {
  const expensesCtx = useContext(ExpensesContext);
  return (
    <ExpensesOutput
      expenses={expensesCtx.expenses}
      expensesPeriod={"Total"}
      fallBackText={"No Registered Expenses Found."}
    />
  );
};

export default AllExpensesScreen;

const styles = StyleSheet.create({});
