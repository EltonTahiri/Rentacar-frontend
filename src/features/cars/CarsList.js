import { useGetCarsQuery } from './carsApiSlice'
import Car from './Car'

const CarsList = () => {

    const {
        data: cars,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetCarsQuery(undefined, {
        pollingInterval: 15000,
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true
    })

    let content

    if (isLoading) content = <p>Loading...</p>

    if (isError) {
        content = <p className="errmsg">{error?.data?.message}</p>
    }

    if (isSuccess) {
        const { ids } = cars

        const tableContent = ids?.length
             ? ids.map(carId => <Car key={carId} carId={carId} />)
             : null

        content = (
            <table className='table'>
                <thead className='table__thead'>
                    <tr>
                        <th scope='col' className='table__th
                        user__username' >Name</th>
                        <th scope='col' className='table__th
                        user__username' >Manufacturer</th>
                        <th scope='col' className='table__th
                        user__username'>Engine</th>
                        <th scope='col' className='table__th
                        user__username'>Consumption</th>
                        <th scope='col' className='table__th
                        user__username'>Seats</th>
                        <th scope='col' className='table__th
                        user__username'>LicensePlate</th>
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