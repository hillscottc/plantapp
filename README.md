# plantapp

See this running on Heroku at <a href="https://plantapp.herokuapp.com/">https://plantapp.herokuapp.com/</a>

## Project structure
- An [Express] app is the backend, serving the data api.
- The database is [PostgreSQL] with a [pg-promise] interface. The plant data comes as a `.csv` file from [the USDA Plants Database]. 
- A [create-react-app] is the web frontend. [node-foreman] is used to run them together. (As suggested in [this post]). Augmented with bootstrap and react-router.
## Install
```sh
$ git clone https://github.com/hillscottc/plantapp
$ cd plantapp
$ npm install
```
- Note: The client project is independent of the server project. So a `postinstall` script is added to run `npm install` on the client dir as well. In `package.json`, you see:
    ```
      "scripts": {
        "postinstall": "cd client && npm install"
    ```

## Run
```sh
$ npm start
```
This launches the Server and Client with foreman.

The services can also be run individually. For example to run just the server:
```
$ npm start:server
```
Or, with foreman:
```sh
$ nf start server=1
```


#### Using `node-foreman`
[node-foreman] provides several benefits. In this project, it is used primarily for two things:
 
1. Configure our client (React) service and server (Express) processes. This is done in the `Procfile`:
    ```
    web: npm run start:client
    server: npm run start:server
    ```

2. Configure environment variables read by at launch. This is done with a `.env` file:
    ```javascript
    {
      "node": {
        "env": "development"
      },
      "mongo": {
        "url": "mongodb://localhost/plantsdb"
      },
      "server": {
        "port": 3001
      }
    }
    ```
    Then these variables can be accessed from javascript like: `process.env.MONGO_URL`.
 
[Express]: https://expressjs.com/   
[create-react-app]: https://github.com/facebookincubator/create-react-app 
[this post]: https://www.fullstackreact.com/articles/using-create-react-app-with-a-server/
[node-foreman]: http://strongloop.github.io/node-foreman/
[the USDA Plants Database]: https://plants.usda.gov/dl_all.html
[PostgreSQL]: https://www.postgresql.org/
[pg-promise]: https://github.com/vitaly-t/pg-promise
