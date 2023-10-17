import { useEffect, useState } from "react";
import axios from "axios";

function DataApi(searchId) {
    const [dataLivros, setDataLivros] = useState([])

    async function listBook() {

        const apiUrl = searchId ?
        `https://fakerestapi.azurewebsites.net/api/v1/Books/${searchId}`
        :
        `https://fakerestapi.azurewebsites.net/api/v1/Books/1`

        try {
            const { data } = await axios.get(apiUrl)

            if (searchId) {
                let dataId = []
                dataId.push(data)

                setDataLivros(dataId)
            } else {
                setDataLivros(data)

            }

        } catch (err) {
            alert("Houve algum erro na requisição da API")
            console.log(err)
        }
    }

    useEffect(() => {
        listBook()
    }, [])

    return dataLivros;

}

export default DataApi