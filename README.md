# plantapp - React + MobX

Uses plant data from the [US Dept of Agricutlure Plants DB](https://plants.usda.gov/dl_all.html)

## How it was built

Created a new plantapp repo in Github. As a starting template for a React app, I like [webpack-express-boilerplate](https://github.com/christianalfoni/webpack-express-boilerplate). 
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

Update and install dependencies. I like [ncu](https://www.npmjs.com/package/npm-check-updates)
```
$ ncu -u
$ npm install
```




