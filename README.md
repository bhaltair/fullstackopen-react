
- part1 react basic
  - props deconstruction
  - Changes in state cause rerendering
  - event handler muse be a funciton
    - use high order function return event handler
  - state
    - The status cannot be modified directly
    - handing arrays
      - do not use array.push
      - use [].concat() (not modified original array)
    - debugger
      - console.log()
      - debugger breakpoint
      - [React developer tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
    - Rules of Hooks
      - do not use Hooks Conditional 
      - use Hooks in top scope(it based in linked list)
      ```js
        const App = (props) => {
          // these are ok
          const [age, setAge] = useState(0)
          const [name, setName] = useState('Juha Tauriainen')

          if ( age > 10 ) {
            // this does not work!
            const [foobar, setFoobar] = useState(null)
          }

          for ( let i = 0; i < age; i++ ) {
            // also this is not good
            const [rightWay, setRightWay] = useState(false)
          }

          const notGood = () => {
            // and this is also illegal
            const [x, setX] = useState(-1000)
          }

          return (
            //...
          )
        }
      ```
    - Do Not Define Components Within Components

- part 2 communicate with the server
  - Anti-pattern: array indexes as keys
  - Sending Data to the Server
  - Extracting communication with the backend into a separate module
- part 3 use node.js & express.js write server code
  - node.js & express
    - nodemon
    - Semantic versioning
    - REST
      - Visual Studio Code REST client
      - Postman
    - deploy
      - Heroku
      - serving static files
      - CORS
    - Receiving data  
      - json-parser
  - save your data to MongoDB
    - Debugging Node applications
    - Schema
      - mongoose
    - [mongodb Atlas](https://www.mongodb.com/cloud/Atlas)
    - middleware
    - eslint
- part 4 test express app
  - project structure
    - utils
    - controllers
  - test
    - cross-env
    - supertest 
    - jest
    - expect
    - error-handing
      - try-catch
        - express-async-errors
    - async-await
    - parallel
      - await Promise.all()
      - for-of
  - user
  - auth
    - [token](https://scotch.io/tutorials/the-ins-and-outs-of-token-based-authentication#toc-how-token-based-works)
    - jsonwebtoken
      ```js
      const bcrypt = require('bcrypt')
      const loginRouter = require('express').Router()
      const User = require('../models/user')

      loginRouter.post('/', async (request, response) => {
        const body = request.body

        const user = await User.findOne({ username: body.username })
        const passwordCorrect = user === null
          ? false
          : await bcrypt.compare(body.password, user.passwordHash)

        if (!(user && passwordCorrect)) {
          return response.status(401).json({
            error: 'invalid username or password'
          })
        }

        const userForToken = {
          username: user.username,
          id: user._id,
        }

        const token = jwt.sign(userForToken, process.env.SECRET)

        response
          .status(200)
          .send({ token, username: user.username, name: user.name })
      })

      module.exports = loginRouter
      ```
- part 5 test react app
- part 6 use redux state management
- part 7 react-router / costom hook / style
- part 8 GrahphQL
- part 9 TypeScript

## reference

- [fullstackopen](https://fullstackopen.com/)
- [A re-introduction to JavaScript (JS tutorial)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript)
- [react official docs](https://reactjs.org/docs/hello-world.html)
- [functional Programming in JavaScript](https://www.youtube.com/playlist?list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84)
- [You-Dont-Know-JS](https://github.com/getify/You-Dont-Know-JS/tree/1st-ed)