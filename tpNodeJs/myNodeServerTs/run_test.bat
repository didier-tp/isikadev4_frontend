REM lancement (via npm run test ou npm test)
REM de la partie 
REM  "scripts": {  "test": "./node_modules/.bin/mocha --reporter spec"  }
REM de package.json
set PORT=8282
npm test > mocha_report.txt 2> err.txt