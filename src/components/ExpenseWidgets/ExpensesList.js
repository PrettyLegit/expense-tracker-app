import ExpenseItem from "@src/components/ExpenseWidgets/ExpenseItem";
import { FlatList, StyleSheet, Text, View } from "react-native";

function renderExpenseItem(itemData) {
  return <ExpenseItem {...itemData.item} />;
}
const ExpensesList = ({ expenses }) => {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ExpensesList;

const styles = StyleSheet.create({});
