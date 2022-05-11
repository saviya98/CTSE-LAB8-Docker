const express = require( "express" );
const app = express();
const port = 8081; // default port to listen

// define a route handler for the default home page
app.get( "/", ( req:any, res:any ) => {
    res.send( "Hello SAVI from Docker!" );
} );

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );