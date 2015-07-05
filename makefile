all: toolinfo

toolinfo: toolinfo-test

toolinfo-test:
	npm install jsonschema
	node test.js
