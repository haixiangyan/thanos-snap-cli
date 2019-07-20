# thanos-snap-cli
Randomly delete half of files in current folder.

**Please make sure don't run `snap` under root directory!**

## Screenshot

[![asciicast](https://asciinema.org/a/g5RH9A8v9GIiVjl3XKn4l8zk5.svg)](https://asciinema.org/a/g5RH9A8v9GIiVjl3XKn4l8zk5)

## Install

```
$ brew install node

$ npm i -g thanos-snap-cli
```

## Usage

```
$ snap          # Create a /mock folder with some files

$ snap ./mock   # Snap the finger -> Delete half of the files in ./mock directory
```