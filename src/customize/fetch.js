import { useEffect, useState } from "react";
import axios from "axios";
import moment from 'moment';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    //componentDidMount
    useEffect(() => {
        setTimeout(async () => {
            try {
                async function fetchData() {
                    let res = await axios.get(url)
                    let data = res && res.data ? res.data : [];
                    if (data && data.length > 0) {
                        data.map(item => {
                            item.Date = moment(item.Date).format('DD/MM/YYYY')
                            return item
                        })
                        data = data.reverse()
                    }
                    setData(data)
                    setLoading(false)
                }
                fetchData()
                // setLoading(false)
            } catch (error) {
                console.error(error.message);
            }

        }, 3000)

    }, [url])

    return {
        data, loading
    }

}

export default useFetch