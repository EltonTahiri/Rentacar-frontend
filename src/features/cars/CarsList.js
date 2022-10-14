import { useGetCarsQuery } from './carsApiSlice'
import Car from './Car'

const CarsList = () => {

    const {
        data: cars,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetCarsQuery()

    let content

    if (isLoading) content = <p>Loading...</p>

    if (isError) {
        content = <p className="errmsg">{error?.data?.message}</p>
    }

    if (isSuccess) {
        const { ids } = cars

        const tableContent = ids?.length
             ? ids.map(carId => <Car key={carId} userId={carId} />)
             : null

        content = (
            <table className='table table--users'>
                <thead className='table__thead'>
                    <tr>
                        <th scope='col' >Manufacturer</th>
                        <th scope='col' >Engine</th>
                        <th scope='col' >Consumption</th>
                        <th scope='col' >Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {tableContent}
                </tbody>
            </table>
        )
    }
   return content
}

export default CarsList