## DevTinder APIs

# authRouter:

- Post / signup
- Post / login
- Post / logout

# profileRouter:

- GET / profile/view
- PATCH / profile/edit
- PATCH / profile/password // Forgot password API

# ConnectionRequestRouter:

- POST /request/send/:status/:userId
- POST /request/review/:status/:requestId

# userRouter:

- GET /user/requests/received
- GET /user/connections
- GET /user/feed - Gets you the profiles of other users on platform

Status Ignored, Interested, Accepted, Rejected
