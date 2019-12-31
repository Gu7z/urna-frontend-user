import axios from 'axios'
import '../App.css';

const endPoint = 'http://localhost:3001'

const Operations = {
    getPeople: async () => {
        var result;
        await axios.get(endPoint).then(
            data => result = data.data
        )
        return result
    },
    postVote: async (obj) => {
        var result;
        await axios.post(`${endPoint}/vote`, obj).then(
            data => result = data.data
        )
        return result
    }
}

export default Operations;
