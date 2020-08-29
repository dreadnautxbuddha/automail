automail
========

An e-mail scheduler made with OCLIF and NodeMailer

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/automail.svg)](https://npmjs.org/package/automail)
[![CircleCI](https://circleci.com/gh/dreadnautxbuddha/automail/tree/master.svg?style=shield)](https://circleci.com/gh/dreadnautxbuddha/automail/tree/master)
[![Downloads/week](https://img.shields.io/npm/dw/automail.svg)](https://npmjs.org/package/automail)
[![License](https://img.shields.io/npm/l/automail.svg)](https://github.com/dreadnautxbuddha/automail/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g automail
$ automail COMMAND
running command...
$ automail (-v|--version|version)
automail/0.0.0 linux-x64 node-v14.5.0
$ automail --help [COMMAND]
USAGE
  $ automail COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`automail hello [FILE]`](#automail-hello-file)
* [`automail help [COMMAND]`](#automail-help-command)

## `automail hello [FILE]`

describe the command here

```
USAGE
  $ automail hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ automail hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/dreadnautxbuddha/automail/blob/v0.0.0/src/commands/hello.ts)_

## `automail help [COMMAND]`

display help for automail

```
USAGE
  $ automail help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.0/src/commands/help.ts)_
<!-- commandsstop -->
