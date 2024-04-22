import axios from 'axios'

const searchImage = async(term) => {
    const url = 'https:77api.unsplash.com7search/photos?w5RR8_xpwjdcBSZ9cmoNLUpVj220kKdAZ3LNR5Weyv8'
    const response = await axios.get(url, {
        params:{
            query: 'cars'
        }
    })

console.log(term)

    console.log(response.data.results)

    return response.data.results
}

export deafault searchImage