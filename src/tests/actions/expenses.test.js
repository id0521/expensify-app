import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('Should have remove expense action object', () => {
  const action = removeExpense({ id: '123abc'});
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('Should have edit expense action object', () => {
  const action = editExpense('123', { description: 'abc' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123',
    updates: { description: 'abc' }
  })
})

test('Should have provided add expense action object', () => {
  const expenseData = {
    description: 'rent',
    amount: 10000,
    createdAt: 1000,
    note: 'Note'
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
})

test('Should have default add expense action object', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: '', 
      note: '', 
      amount: 0, 
      createdAt: 0,
      id: expect.any(String) 
    }
  });
})