import './style.css'
import { createRoot } from 'react-dom/client'
import './style.css'

const root = createRoot(document.querySelector('#root'))

const toto = true
const color = 'green'

root.render(
    <>
        <h1 style={ { color: color, backgroundColor: 'pink' } } >Hello</h1>
        <p className='cute-paragraph'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, maiores, iure quae quos aliquid similique rem mollitia repellendus excepturi non eveniet vero deserunt? Eaque, laboriosam. Ipsam nesciunt laudantium sapiente sint.</p>
    </>
)