import '../styles/Covid.scss'
import useFetch from '../customize/fetch'

const Covid = () => {

    const { data: dataCovid, loading } = useFetch('https://api.covid19api.com/country/vietnam?from=2021-10-01T00:00:00Z&to=2021-10-20T00:00:00Z')

    return (
        <>
            <h2>Covid 19 table tracking in Viet Nam </h2>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Confirmed</th>
                        <th>Active</th>
                        <th>Deaths</th>
                        <th>Recovered</th>
                    </tr>
                </thead>
                <tbody>
                    {loading === false && dataCovid && dataCovid.length > 0 &&
                        dataCovid.map(item => {
                            return (
                                <tr key={item.ID}>
                                    <td>{item.Date}</td>
                                    <td>{item.Confirmed}</td>
                                    <td>{item.Active}</td>
                                    <td>{item.Deaths}</td>
                                    <td>{item.Recovered}</td>
                                </tr>
                            )
                        })}

                    {loading === true &&
                        <tr>
                            <td className="loading" colSpan="5">Loading...</td>
                        </tr>
                    }

                </tbody>

            </table>
        </>
    )
}

export default Covid;