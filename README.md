to create a blank "jest" test enviroment for vanilla Javascript


1. - create project folder
2. - 'CD' into folder
3. - run from shell [   npm init -y   ] the -y just accepts defaults with no prompt
4. - run from shell [   npm i -D jest ] this installs "jest" and sets as Dependancy.
5. - open file [ package.json ] change the "script / test" line to read "test":"jest --watchAll"

now you are ready.

6. run from shell [ npm test ] to start jest 






Later to Upload to GITHUB:
create project repository on github and get the URL

From Shell and inside project folder:

git init
git add .
git commit -m "master"
git remote add origin {{here you paste the URL of the project from github}}
git remove -v
git push origin master



Done!

