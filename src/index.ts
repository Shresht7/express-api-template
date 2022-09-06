//  Library
import app from './app'

//  -----------------------------------
const PORT = process.env.PORT || '3000'
//  -----------------------------------

//  Start Server
app.listen(PORT, () => {
    console.log(`Server running: http://localhost:${PORT}`)
})
