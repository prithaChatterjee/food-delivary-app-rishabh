import axios from "axios"
import { apicallbegin } from "../api"

const baseURL = process.env.REACT_APP_BASEURL

const api = ({dispatch}) => (next) => async (action) => {
  if (action.type !== apicallbegin.type) return next(action)
    const {url, method, data, onStart, onSuccess, onError} = action.payload
    if (onStart) dispatch({type: onStart})
    try {
        const result = await axios({baseURL, url, method, data})
        dispatch({type: onSuccess, payload: result.data})
    } catch (error) {
        dispatch({type: onError, payload: error.message})
    }
}

export default api