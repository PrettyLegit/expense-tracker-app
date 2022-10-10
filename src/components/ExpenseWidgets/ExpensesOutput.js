import ExpensesList from "@src/components/ExpenseWidgets/ExpensesList";
import ExpenseSummary from "@src/components/ExpenseWidgets/ExpensesSummary";
import { GlobalStyles } from "@src/utils/styles";
import { StyleSheet, View, Text } from "react-native";

const ExpensesOutput = ({ expenses, expensesPeriod, fallBackText }) => {
  let content = <Text style={styles.fallBackText}>{fallBackText}</Text>;

  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />;
  }

  return (
    <View style={styles.container}>
      <ExpenseSummary expenses={expenses} timePeriod={expensesPeriod} />
      {content}
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
  fallBackText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginTop: 32,
  },
});
