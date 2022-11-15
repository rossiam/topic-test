topic-test
==========

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

This is an example of an oclif project with a topic that does not have a command with the same name
to be used as an example for a question in github.

The topic `topic-and-command` does have a command with the same name associated with it but the
topic `topic-only` does not.

# Table of Contents

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Commands
<!-- commands -->
* [`topic-test help [COMMAND]`](#topic-test-help-command)
* [`topic-test plugins`](#topic-test-plugins)
* [`topic-test plugins:install PLUGIN...`](#topic-test-pluginsinstall-plugin)
* [`topic-test plugins:inspect PLUGIN...`](#topic-test-pluginsinspect-plugin)
* [`topic-test plugins:install PLUGIN...`](#topic-test-pluginsinstall-plugin-1)
* [`topic-test plugins:link PLUGIN`](#topic-test-pluginslink-plugin)
* [`topic-test plugins:uninstall PLUGIN...`](#topic-test-pluginsuninstall-plugin)
* [`topic-test plugins:uninstall PLUGIN...`](#topic-test-pluginsuninstall-plugin-1)
* [`topic-test plugins:uninstall PLUGIN...`](#topic-test-pluginsuninstall-plugin-2)
* [`topic-test plugins update`](#topic-test-plugins-update)
* [`topic-test topic-and-command [FILE]`](#topic-test-topic-and-command-file)
* [`topic-test topic-and-command command1 [FILE]`](#topic-test-topic-and-command-command1-file)
* [`topic-test topic-and-command command2 [FILE]`](#topic-test-topic-and-command-command2-file)
* [`topic-test topic-only command3 [FILE]`](#topic-test-topic-only-command3-file)
* [`topic-test topic-only command4 [FILE]`](#topic-test-topic-only-command4-file)

## `topic-test help [COMMAND]`

Display help for topic-test.

```
USAGE
  $ topic-test help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for topic-test.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.18/src/commands/help.ts)_

## `topic-test plugins`

List installed plugins.

```
USAGE
  $ topic-test plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ topic-test plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.6/src/commands/plugins/index.ts)_

## `topic-test plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ topic-test plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ topic-test plugins add

EXAMPLES
  $ topic-test plugins:install myplugin

  $ topic-test plugins:install https://github.com/someuser/someplugin

  $ topic-test plugins:install someuser/someplugin
```

## `topic-test plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ topic-test plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ topic-test plugins:inspect myplugin
```

## `topic-test plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ topic-test plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ topic-test plugins add

EXAMPLES
  $ topic-test plugins:install myplugin

  $ topic-test plugins:install https://github.com/someuser/someplugin

  $ topic-test plugins:install someuser/someplugin
```

## `topic-test plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ topic-test plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ topic-test plugins:link myplugin
```

## `topic-test plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ topic-test plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ topic-test plugins unlink
  $ topic-test plugins remove
```

## `topic-test plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ topic-test plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ topic-test plugins unlink
  $ topic-test plugins remove
```

## `topic-test plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ topic-test plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ topic-test plugins unlink
  $ topic-test plugins remove
```

## `topic-test plugins update`

Update installed plugins.

```
USAGE
  $ topic-test plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

## `topic-test topic-and-command [FILE]`

command that is also a topic

```
USAGE
  $ topic-test topic-and-command [FILE] [-n <value>] [-f]

FLAGS
  -f, --force
  -n, --name=<value>  name to print

DESCRIPTION
  command that is also a topic

EXAMPLES
  $ topic-test topic-and-command
```

_See code: [dist/commands/topic-and-command.ts](https://github.com/rossiam/topic-test/blob/v0.0.0/dist/commands/topic-and-command.ts)_

## `topic-test topic-and-command command1 [FILE]`

subcommand 1 of topic-and-command

```
USAGE
  $ topic-test topic-and-command command1 [FILE] [-n <value>] [-f]

FLAGS
  -f, --force
  -n, --name=<value>  name to print

DESCRIPTION
  subcommand 1 of topic-and-command

EXAMPLES
  $ topic-test topic-and-command command1
```

## `topic-test topic-and-command command2 [FILE]`

subcommand 2 of topic-and-command

```
USAGE
  $ topic-test topic-and-command command2 [FILE] [-n <value>] [-f]

FLAGS
  -f, --force
  -n, --name=<value>  name to print

DESCRIPTION
  subcommand 2 of topic-and-command

EXAMPLES
  $ topic-test topic-and-command command2
```

## `topic-test topic-only command3 [FILE]`

subcommand 3 of topic-only

```
USAGE
  $ topic-test topic-only command3 [FILE] [-n <value>] [-f]

FLAGS
  -f, --force
  -n, --name=<value>  name to print

DESCRIPTION
  subcommand 3 of topic-only

EXAMPLES
  $ topic-test topic-only command3
```

## `topic-test topic-only command4 [FILE]`

subcommand 4 of topic-only

```
USAGE
  $ topic-test topic-only command4 [FILE] [-n <value>] [-f]

FLAGS
  -f, --force
  -n, --name=<value>  name to print

DESCRIPTION
  subcommand 4 of topic-only

EXAMPLES
  $ topic-test topic-only command4
```
<!-- commandsstop -->
