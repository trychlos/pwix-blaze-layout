Package.describe({
    summary: 'Layout Manager for Blaze (works well with FlowRouter)',
    version: '2.3.4-rc',
    git: 'https://github.com/trychlos/pwix-blaze-layout',
    name: "pwix:blaze-layout"
});

Package.onUse( function( api ){
    configure( api );
    api.export([
        'BlazeLayout'
    ]);
    api.mainModule( 'src/client/js/index.js', 'client' );
});

Package.onTest( function( api ){
    configure( api );
    api.use( 'tinytest' );
    api.addFiles( 'tests/client/init.templates.html', 'client' );
    api.addFiles( 'tests/client/init.templates.js', 'client' );
    api.addFiles( 'tests/client/unit.js', 'client' );
    api.addFiles( 'tests/client/integration.js', 'client' );
});

function configure( api ){
    const _use = function(){
        api.use( ...arguments );
        api.imply( ...arguments );
    };
    api.versionsFrom( ['1.0', '3.0-rc.0'] );
    _use( 'blaze@2.0.3 || 3.0.0-alpha300.0' );
    _use( 'templating' );
    _use( 'reactive-dict' );
    _use( 'underscore' );
    // from https://github.com/meteor/blaze/blob/master/packages/blaze/package.js#L9
    api.use( 'jquery@1.11.9 || 3.0.0', { weak: true }); // should be a weak dep, by having multiple "DOM backends"
    _use( 'tracker' );
}

// NPM dependencies are checked in /src/server/js/check_npms.js
// See also https://guide.meteor.com/writing-atmosphere-packages.html#peer-npm-dependencies
