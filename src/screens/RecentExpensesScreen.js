import { StyleSheet, Text, View } from "react-native";
import { ExpensesOutput } from "@src/components/ExpenseWidgets";

const RecentExpensesScreen = () => {
  return <ExpensesOutput expensesPeriod={"Last 7 Days"} />;
};

export default RecentExpensesScreen;

const styles = StyleSheet.create({});
