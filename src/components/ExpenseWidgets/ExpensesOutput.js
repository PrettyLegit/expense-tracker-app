import ExpensesList from "@src/components/ExpenseWidgets/ExpensesList";
import ExpenseSummary from "@src/components/ExpenseWidgets/ExpensesSummary";
import { GlobalStyles } from "@src/utils/styles";
import { StyleSheet, View } from "react-native";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "Shoes",
    amount: 59.99,
    date: new Date(2022, 10, 6),
  },
  {
    id: "e2",
    description: "Food",
    amount: 9.99,
    date: new Date(2022, 10, 5),
  },
  {
    id: "e3",
    description: "Kroger",
    amount: 129.99,
    date: new Date(2022, 10, 1),
  },
  {
    id: "e4",
    description: "Bookstore",
    amount: 159.99,
    date: new Date(2022, 8, 1),
  },
];
const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View style={styles.container}>
      <ExpenseSummary expenses={DUMMY_EXPENSES} timePeriod={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
