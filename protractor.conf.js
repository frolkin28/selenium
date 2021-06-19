const { async } = require("q");

exports.config = {
    capabilities: {
        browserName: 'chrome',
        shardTestFiles: true
    },
    // allScriptsTimeout: 10000,
    baseUrl: 'https://angularjs.org',
    
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    specs: [
        './tests/features/*.feature' 
    ],
    restartBrowserBetweenTests: true,
    cucumberOpts: {
        require: [
            './tests/specs/*.js',
        ],
        tags: [],    
    },
};