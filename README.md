# plantapp - React + MobX

Uses plant data from the [US Dept of Agricutlure Plants DB][plants-data]

[MongoDB][mongo] and [mongoose][mongoose]

## How it was built

Created a new plantapp repo in Github. As a starting template for a React app, I like [webpack-express-boilerplate][boilerplate]. 
Clone it into  plantapp/, remove the old git history, init, and push to the new repo.


```
$ git clone https://github.com/christianalfoni/webpack-express-boilerplate.git plantapp
$ cd plantapp
$ rm -rf .git
$ git init
$ git add .
$ git commit -am 'init from webpack-express-boilerplate'
$ git remote add origin git@github.com:hillscottc/plantapp.git
$ git push -u origin master
$ git co -b dev
$ git push -u origin dev

```

Update and install dependencies. I like [ncu][ncu]
```
$ ncu -u
$ npm install
```

### Import the plants.csv into mongo
```
$ mongoimport -d plantsdb -c plants --type csv --file data/plants.csv --headerline
2016-08-15T15:04:04.109-0700	connected to: localhost
2016-08-15T15:04:05.582-0700	imported 90986 documents
```



[plants-data]: https://plants.usda.gov/dl_all.html
[boilerplate]: https://github.com/christianalfoni/webpack-express-boilerplate
[mongoose]: http://mongoosejs.com
[mongo]: https://www.mongodb.com
[ncu]: https://www.npmjs.com/package/npm-check-updates