import moment from 'moment';

export default [{
  id: '1',
  description: 'rent',
  note: '',
  amount: 1,
  createdAt: 0
}, {
  id: '2',
  description: 'rent1',
  note: '',
  amount: 10,
  createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
  id: '3',
  description: 'food',
  note: '',
  amount: 100,
  createdAt: moment(0).add(4, 'days').valueOf()
}]