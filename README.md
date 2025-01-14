# @sequencemedia/process

Assigns `debug` logging methods to Node `process` event handlers for signals and exit states

## Install

```shell
npm i -P @sequencemedia/process
```

## Use

Import _once_ per application start

```javascript
import '@sequencemedia/process'
```

Enable `DEBUG` at application start

```shell
DEBUG=@sequencemedia/process node .
```
