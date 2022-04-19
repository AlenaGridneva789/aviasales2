import { FILTER_TICKETS, CHECKED, GET_ID, ERROR, GET_TICKETS, GET_MORE } from './action'

export const getId = () => (dispatch) => {
  fetch('https://aviasales-test-api.kata.academy/search').then((response) => {
    if (response.status >= 200 && response.status < 300) {
      response.json().then((data) => dispatch({ type: GET_ID, payload: data.searchId }))
    } else {
      dispatch({ type: ERROR, payload: true })
    }
  })
}

export const getTickets = (id) => (dispatch) => {
  fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${id}`)
    .then((response) => {
      if (!response.ok) {
        dispatch(getTickets(id))
        throw new Error(`Код ошибки ${response.status}`)
      }
      return response.json()
    })
    .then((data) => {
      dispatch({ type: GET_TICKETS, payload: data })
      if (!data.stop) {
        dispatch(getTickets(id))
      }
    })
}

export const onChecked = (name) => ({
  type: CHECKED,
  payload: name,
})
export const onClickMore = () => ({
  type: GET_MORE,
  payload: 5,
})
export const filterTickets = (value) => ({
  type: FILTER_TICKETS,
  payload: value,
})
