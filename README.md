# Dotfiles CLI

### Clone

``` bash
$ git clone https://github.com/iGuntur/dotfiles-cli.git
$ cd dotfiles-cli
```

### Install Dependencies

``` bash
$ npm install
```

### Make link

``` bash
$ npm link
```

or

``` bash
$ sudo npm link
```

### Usage

``` bash
$ dotfiles [options]
```

### CLI options [PLAN]

- init:    create "dotfiles.json" file in "current_directorie" working (pwd)
- install: create symlinks from ".dotfiles" PATH
- update:  update ".dotfiles" from git repositorie
- outdate: check a new version ".dotfiles" repositorie
- del:     remove or delete symlinks
- new: 
    folder/foo/bar.baz: create a new file with folder into ".dotfiles" PATH repo
    file: create a new file into ".dotfiles" PATH repo
