import IconButton from "@src/UI/IconButton";
import { useContext, useLayoutEffect } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { GlobalStyles } from "@src/utils/styles";
import CustomButton from "@src/UI/CustomButton";
import { ExpensesContext } from "@src/context/expenses-context";
import ExpenseForm from "@src/components/ManageExpense/ExpenseForm";
const ManageExpensesScreen = ({ route, navigation }) => {
  const expensesCtx = useContext(ExpensesContext);

  const editedExpenseId = route.params?.expenseId;

  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  function deleteExpenseHandler() {
    navigation.goBack();
    expensesCtx.deleteExpense(editedExpenseId);
  }

  function cancelHandler() {
    navigation.goBack();
  }

  function confirmHandler() {
    if (isEditing) {
      expensesCtx.updateExpense(editedExpenseId, {
        description: "This has been updated",
        amount: 19.99,
        date: new Date(2022, 9, 8),
      });
    } else {
      expensesCtx.addExpense({
        description: "Added New Expense",
        amount: 19.99,
        date: new Date(2022, 9, 9),
      });
    }
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <ExpenseForm />
      <View style={styles.buttonsContainer}>
        <CustomButton
          customStyle={styles.button}
          mode={"flat"}
          onPress={cancelHandler}
        >
          Cancel
        </CustomButton>
        <CustomButton customStyle={styles.button} onPress={confirmHandler}>
          {isEditing ? "Update" : "Add"}
        </CustomButton>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            iconName={"trash"}
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpensesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
