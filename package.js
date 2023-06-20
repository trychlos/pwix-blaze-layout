Package.describe({
    summary: 'Layout Manager for Blaze (works well with FlowRouter)',
    version: '2.3.3-rc',
    git: 'https://github.com/trychlos/pwix-blaze-layout',
    name: "pwix:blaze-layout"
});

Package.onUse( function( api ){
    configure( api );
    api.export([
        'BlazeLayout'
    ]);
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
    api.versionsFrom( ['1.0', '3.0-beta.0'] );
    api.use( 'blaze@2.0.3 || 3.0.0-alpha300.17' );
    api.use( 'templating' );
    api.use( 'reactive-dict' );
    api.use( 'underscore' );
    // from https://github.com/meteor/blaze/blob/master/packages/blaze/package.js#L9
    api.use( 'jquery@1.11.9 || 3.0.0', { weak: true }); // should be a weak dep, by having multiple "DOM backends"
    api.use( 'tracker' );

    api.addFiles( 'lib/client/namespace.js', 'client' );
    api.addFiles( 'lib/client/layout.js', 'client' );
}
