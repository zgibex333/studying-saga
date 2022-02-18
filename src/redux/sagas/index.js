import {takeEvery, put, call, fork} from "redux-saga/effects"

async function swapiGet(pattern) {
    const request = await fetch(`https://swapi.dev/api/${pattern}`)
    return await request.json()

}

export function* loadPeople () {
    const people = yield call(swapiGet, 'people')
    console.log('people', people)
    yield put({type: "SET_PEOPLE", payload: people.results})
}
export function* loadPlanets () {
    const planets = yield call(swapiGet, 'planets')
    console.log('planets', planets)
    yield put({type: "SET_PLANETS", payload: planets.results})
}

export function* workerSaga() {
   yield fork(loadPeople)
   yield fork(loadPlanets)
}

export function* watchClickSaga() {
    yield takeEvery('LOAD_DATA', workerSaga)
}


export default function* rootSaga() {
    yield watchClickSaga()
}

