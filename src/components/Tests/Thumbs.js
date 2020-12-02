// import './Thumbs.css';
import {useState} from 'react';

function Thumbs() {
    const [up, upCount] = useState(0);
    const [down, downCount] = useState(0);
    return (
        <div>
            <h1>Thumbs Up / Down</h1>
                <h2>Up: {up}</h2>
                <button onClick={() => upCount(previousUp => previousUp +1)}>👍</button>
                <h2>Down: {down}</h2>
                <button onClick={() => downCount(previousDown => previousDown +1)}>👎</button>
        </div>
    );
}

export default Thumbs;