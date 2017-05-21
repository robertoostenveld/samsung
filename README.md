This is a web interface for my Samsung Smart TV. It is built on
top of [samsung-remote](https://www.npmjs.com/package/samsung-remote)
and [express](https://www.npmjs.com/package/express). The interface can be
used with a web browser, but also from the command line and using
the [IFTTT](http://ifttt.com) Maker channel.

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
