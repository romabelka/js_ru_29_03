import { createStore, compose } from 'redux'
import reducer from '../reducer'
//import logger from '../middlewares/logger'
import api from '../middlewares/api'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import multi from 'redux-multi'
import { applyMiddleware } from 'redux'
import DevTools from '../containers/DevTools'

const enhancer = compose(
    applyMiddleware(multi, thunk, api, createLogger()),
    DevTools.instrument()
)

const store = createStore(reducer, {}, enhancer)

if (module.hot) {
    module.hot.accept('../reducer', () =>
        store.replaceReducer(require('../reducer').default)
    );
}
export default store