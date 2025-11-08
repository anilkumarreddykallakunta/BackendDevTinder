# DevTinder Apis

## login,signup,logout
-post /signUp
-post/ login
-post /logout

## profileRouter
-patch /profile/edit 
-get /profile/view
-patch /profile/password

## connectionRequestRouter
-post /request/send/interested/:userId
-post/request / send/ignore/:userId

-post/request/review/accepted/:requestId
-post / request / review/rejected/:requestId


status : ignore, interested, accepted , rejected.

## userRouter
-GET /user/requests
-GET /user/connections
-GET /user/feed - Gets you the profiles of other users om platforms

status : ignore, interested, accepted , rejected.
