import {
    createSelector,
    createEntityAdapter
} from '@reduxjs/toolkit'
import { apiSlice } from '../../app/api/apiSlice'

const carsAdapter = createEntityAdapter({})

const initialState = carsAdapter.getInitialState()

export const carsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getCars: builder.query({
            query: () => '/cars',
            validateStatus: (response, result) => {
                return response.status === 200 && !result.isError
            },
            keepUnusedDataFor: 5,
            transformResponse: responseData => {
                const loadedCars = responseData.map(car => {
                    car.id = car._id
                    return car
                });
                return carsAdapter.setAll(initialState, loadedCars)
            },
            providesTags: (result, error, arg) => {
                if (result?.ids) {
                    return [
                        { type: 'Car', id: 'List' },
                        ...result.ids.map(id => ({ type: 'Car', id }))
                    ]
                } else return [{ type: 'Car', id: 'List'}]
            }
        }),
    }),
})

export const {
    useGetCarsQuery,
} = carsApiSlice

// returns the query result object
export const selectCarsResult = carsApiSlice.endpoints.getCars.select()

// creates memoized selector
const selectCarsData = createSelector(
    selectCarsResult,
    carsResult => carsResult.data // normalized state object with ids & entities
)


//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
    selectAll: selectAllCars,
    selectById: selectCarById,
    selectIds: selectCarIds
    // Pass in a selector that return the cars slice of state
} = carsAdapter.getSelectors(state => selectCarsData(state) ?? initialState)