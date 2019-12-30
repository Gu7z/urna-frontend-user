import axios from 'axios'
import '../App.css';

const Operations = {
    getPeople: async () => {
        var result;
        await axios.get('http://localhost:3001').then(
            data => result = data.data
        )
        return result
    },
    postVote: async (obj) => {
        var result;
        await axios.post('http://localhost:3001/vote', obj).then(
            data => result = data.data
        )
        return result
    }
}

export default Operations;
