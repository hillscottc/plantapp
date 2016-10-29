# plantapp

See this running on Heroku at <a href="https://plantapp.herokuapp.com/">https://plantapp.herokuapp.com/</a>

## Project structure
- An [Express] app is the backend, serving the data api.
- The database is [PostgreSQL] modeled with [Bookshelf] ORM. The plant data comes as a `.csv` file from [the USDA Plants Database]. 
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
This launches the Server and Client with node-foreman.


## Test
Run the tests for the server api with `npm test`. This runs the tests at [server/api_routes.spec.js](server/api_routes.spec.js)


## Debug messages
Uses the [debug] logger module. To see this app's debugger messages, you might set an env var like `DEBUG=app:*`. So to see them while running, you would
```
DEBUG=plantapp:* npm start
```

[Express]: https://expressjs.com/   
[create-react-app]: https://github.com/facebookincubator/create-react-app 
[this post]: https://www.fullstackreact.com/articles/using-create-react-app-with-a-server/
[node-foreman]: http://strongloop.github.io/node-foreman/
[the USDA Plants Database]: https://plants.usda.gov/dl_all.html
[PostgreSQL]: https://www.postgresql.org/
[pg-promise]: https://github.com/vitaly-t/pg-promise
[debug]: https://github.com/visionmedia/debug
[Bookshelf]: http://bookshelfjs.org/
