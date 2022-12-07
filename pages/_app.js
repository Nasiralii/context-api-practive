import Navbar from '../components/Navbar'
import '../styles/globals.css'
import NoteState from "./context/notes/NoteState"
function MyApp({ Component, pageProps }) {
  return (
   <NoteState>
    <Navbar/>
    <Component {...pageProps} />
    </NoteState>
  )
}

export default MyApp
