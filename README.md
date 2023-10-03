>>Angular js create and run<<
npm install -g yo grunt-cli bower generator-angular generator-karma
yo angular app_name
bower install & npm install
npm install grunt-karma karma karma-phantomjs-launcher karma-jasmine jasmine-core phantomjs-prebuilt --save-dev
npm install --save grunt-google-cdn2
npm uninstall --save-dev grunt-google-cdn
grunt serve

bower install angular-route#X.Y.Z
	- X.Y.Z is the AngularJS version you are running.
	- Add angular-route in bower.json and add <script src="bower_components/angular-route/angular-route.js"></script> in index.html
