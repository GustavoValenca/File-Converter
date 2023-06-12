const fs = require("fs");
const util = require("util");

class Writer {
    constructor(){
        this.writer = util.promisify(fs.writeFile);
    }

    async Write(filepath, data){
        try {
            await this.writer(filepath, data);
            return true;
        }
        catch(erro) {
            return false;
        }
    }
}

module.exports = Writer;