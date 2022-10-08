import { StyleSheet, Text, View } from "react-native";
import { ExpensesOutput } from "@src/components/ExpenseWidgets";

const AllExpensesScreen = () => {
  return <ExpensesOutput expensesPeriod={"Total"} />;
};

export default AllExpensesScreen;

const styles = StyleSheet.create({});
