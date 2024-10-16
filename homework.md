- Create a repository
- Initialize the repository
- node_modules, package.json, package-lock.json
- Install express
- Create a server
- Listen to port 3000
- Write request handlers for /test, /hello
- Install nodemon and update scripts inside package.json
- What are dependencies
- What is the use of "-g" while npm install
- Difference between caret and tilde (^ vs ~)

- initialize git
- .gitignore
- Create a remote repo on github
- Push all code to remote origin
- Play with routes and route extensions ex. /hello, /, hello/2
- Order of the routes matter a lot
- Install Postman app and make a workspace/collection > test API call
- Write logic to handle GET, POST, PATCH, DELETE API Calls and test them on Postman
- Explore routing and use of ?, +, (), \* in the routes
- Use of regex in outes /a/ , /.\*fly$/
- Reading the query params in the routes
- Reading the dynamic routes

- Multiple Route Handlers - Play with the code
- next()
- next function and errors along with res.send()
- app.use("/route", rH, [rH2, rH3], rH4, rh5)
- What is Middleware
- How express JS basically handles requests behid the scenes
- Defference between app.use and app.all in nodeJs
- Write a dummy auth middleware for admin
- Write a dummy auth middleware for all user routes, except /user/login
- Error Handling using app.use("/", (err, req, res, next) => {})

- Create a free cluster on MongoDB official website (Mongo Atlas)
- Install mongoose library
- Connect your application to the Database "Connection-url"/devTinder
- Call the connectDB function and connect to database before starting application on 3000
- Create a userSchema & user Model
- Create POST /signup API to add data to database
- Push some documents using API calls from postman
- Error Handling using try, catch

- Difference between JS object and JSON object
- Add the express.json middleware to your app
- Make your signup API dynamic to recive data from the end user
- User.findOne with duplicate email ids, which object returned
- API- Get user by email
- API- Feed API - GET/feed - get all the users from the database
- API - Get user by ID
- Create a delete user API
- Difference between PATCH and PUT
- API - Update a user
- Explore the Mongoose Documention for Model methods
- What are options in a Model.findOneAndUpdate method, explore more about it
- API - Update the user with email ID

-> Bug Fix: (E11000 duplicate key error collection: testDb.users index: firstname_1 dup key: { firstname: "Test" })
Solution: Add this line "db.users.dropIndex( "firstName_1" )" in Mongoose shell of MongoDB Compass

-> Bug Fix: If MongoDB compass shows IP address problem then go to MongoDB Atlas and add current IP address

- Explore schematype options from the documention
- Add required, unique, lowercase, min, minLength, trim
- Add default
- Create a custom validate function for gender
- Improve the DB schema - Put all appropiate validations on each field in Schema
- Add timestamps to the userSchema
- Add API level validation on Patch request & Signup post API
- DATA Sanitization - Add API validation for each field
- Install validator
- Explore validator library function and Use validator functions of password, email, photoURL
- Never trust req.body

- Validate data in Signup API
- Install bcrypt package
- Create passwordHash using bcrypt.hash & save the user is encripted password
- Mrunala@1234
- Create login API
- Compare passwords and throw errors if email or password is invalid

- install cookie-parse
- Just send a dummy cookie to user
- Create GET / profile API and check if you get the cookie back
- Install jsonwebtoken
- In login API, after email and password validation, create a JWT token and send it to user in cookie
- Read the cookies inside you profile API and find the logged in user
- userAuth Middleware
- Add the userAuth middle ware in profile API and a new sendConnectionRequest API
- Set the expiry of JWT token and cookies to 7 days
- Create userSchema method to getJWT()
- Create UserSchema method to comparepassword(passwordInputByUser)

- Exolore tinder APIs
- Create a list of all API you can think of in Dev Tinder
- Group multiple routes under respective routers
- Read documentation for express.Router
- Create routes folder for managing auth, profile, request routers
- Create authRouter, profileRouter, requestRouter
- Import these routers in app.js
- Create POST /logout API
- Create PATCH /profile/edit
- Create PATCH /profile/password API => forgot password API
- Make you validate all data in every POST, PATCH apis

- Create connection Request schema
- Send Connection Request API
- Proper validation of Data
- Think about all corner cases
- $or query $and query in mongoose
- schema.pre("save") function
- Read more about indexes in MongoDB
- Why do we need index in DB?
- What is the advantages and disadvantages of creating indexes?
- Read the article about compound indexes from mongodb documents
- Always think about corner cases

- Write code with proper validations for POST /request/review/:status/:requestId
- Thought process - POST vs GET
- Read about ref and populate https://mongoosejs.com/docs/populate.html
- Create GET /user/requests/received with all the checks
- Create GET /user/connections

- Logic for GET /feed API
- Explore the $nin, $and, $nd and other query operators
- Pagination
