import { CHECKED, GET_ID, GET_TICKETS, GET_MORE, FILTER_TICKETS } from '../action/action'

const initialState = {
  tickets: {
    data: [],
  },
  id: '',
  ticketsCount: 5,
  activeFilter: 'cheap',
  checkboxes: [
    { label: 'Все', name: 'all', checked: true },
    { label: 'Без пересадок', name: 'no', checked: true, value: 0 },
    { label: '1 пересадка', name: 'one', checked: true, value: 1 },
    { label: '2 пересадки', name: 'two', checked: true, value: 2 },
    { label: '3 пересадки', name: 'three', checked: true, value: 3 },
  ],
  listButtons: [
    { name: 'cheap', label: 'САМЫЙ ДЕШЕВЫЙ' },
    { name: 'fast', label: 'САМЫЙ БЫСТРЫЙ' },
    { name: 'optimal', label: 'ОПТИМАЛЬНЫЙ' },
  ],
}
export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECKED: {
      if (action.payload === 'all') {
        return {
          ...state,
          checkboxes: state.checkboxes.map((element) => ({ ...element, checked: !state.checkboxes[0].checked })),
        }
      }
      const newState = {
        ...state,
        checkboxes: state.checkboxes.map((element) =>
          action.payload === element.name ? { ...element, checked: !element.checked } : element
        ),
      }
      newState.checkboxes[0].checked = newState.checkboxes.slice(1).every((element) => element.checked)
      return newState
    }
    case GET_ID:
      return {
        ...state,
        id: action.payload,
      }
    case GET_TICKETS:
      return {
        ...state,
        tickets: {
          ...state.tickets,
          stop: action.payload.stop,
          data: [...state.tickets.data, ...action.payload.tickets],
        },
      }
    case GET_MORE:
      return {
        ...state,
        ticketsCount: state.ticketsCount + 5,
      }
    case FILTER_TICKETS:
      return {
        ...state,
        activeFilter: action.payload,
      }

    default:
      return state
  }
}
