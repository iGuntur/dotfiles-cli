import p from 'path';
import userHome from 'user-home';
import globArray from 'glob-array';

class Config {

    /**
     * Initialize config property
     *
     * @return {Object}
     */
    constructor() {
        this.homePath = userHome;
        this.dotfilesPath = '.dotfiles';
        this.excludesPath = ['.git', '*.md'];
    }

    /**
     * PWD
     *
     * @return {String}
     */
    pwd() {
        return p.join(this.homePath, this.dotfilesPath);
    }

    /**
     * Get excludes PATH
     *
     * @param  {Array} pattern
     * @return {Array}
     */
    excludes(pattern) {
        pattern = pattern || this.excludesPath;

        return globArray.sync(pattern, {
            cwd: this.pwd()
        });
    }
}
