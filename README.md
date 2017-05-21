This is a web interface for the Samsung Smart TV. It is built on
top of https://www.npmjs.com/package/samsung-remote and
https://www.npmjs.com/package/express.

Use as
```
  curl -X get http://hostname/command
```
where the command is one of the following
```
  KEY_VOLUP
  KEY_VOLDOWN
```
etc.
