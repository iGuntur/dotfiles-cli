# Dotfiles CLI

### Install

``` bash
$ npm install iGuntur/dotfiles-cli
```


### Usage

``` bash
$ dotfiles [options]
```

### CLI options

- init:    create "dotfiles.json" file in "current_directorie" working (pwd)
- install: create symlinks from ".dotfiles" PATH
- update:  update ".dotfiles" from git repositorie
- outdate: check a new version ".dotfiles" repositorie
- del:     remove or delete symlinks
- new: 
    folder/foo/bar.baz: create a new file with folder into ".dotfiles" PATH repo
    file: create a new file into ".dotfiles" PATH repo
