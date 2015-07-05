( function() {
	var toolinfo = require( './toolinfo.json' );
	var schema = require( './toolinfo.schema.json' );
	var Validator = require( 'jsonschema' ).Validator;
	var v = new Validator( {
		throwError: true
	} );
	var result = v.validate( toolinfo, schema );
	return result;
}() );
