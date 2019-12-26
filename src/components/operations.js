import axios from 'axios'
import '../App.css';

const Operations = {
    getPeople: async () => {
        var result;
        await axios.get('http://192.168.1.4:3001').then(
            data => result = data.data
        )
        return result
    }
}

export default Operations;
