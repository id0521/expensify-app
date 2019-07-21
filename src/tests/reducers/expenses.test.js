import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should have default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([])
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[0].id
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([ expenses[1], expenses[2] ])
});

test('should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '9'
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses)
});

test('should add an expense', () => {
  const expense = {
    description: 'lunch'
  }
  const action = {
    type: 'ADD_EXPENSE',
    expense
  }

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([ ...expenses, expense ])
});

test('should edit an expense', () => {
  const updates = {
    description: 'lunch'
  }
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates
  }

  const state = expensesReducer(expenses, action);
  expect(state[0]).toEqual({ ...expenses[0], ...updates })
});

test('should not edit an expense if id not found', () => {
  const updates = {
    description: 'lunch'
  }
  const action = {
    type: 'EDIT_EXPENSE',
    id: '9',
    updates
  }

  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses)
});