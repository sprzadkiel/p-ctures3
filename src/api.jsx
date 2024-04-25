import axios from 'axios'

const  searchImage = async(term) => {
    const url = 'https://api.unsplash.com/search/photos/?client_idw5RR8_xpwjdcBSZ9cmoNLUpVj220kKdAZ3LNR5Weyv8'

    const response = await axios.get(url, {
        params: {
            query: term
        }
    })
    console.log(term)
    console.log(response)

    return response.data.results
}

export default searchImage




