class Table {
    constructor(array){
        this.header = array[0]
        array.shift()  // Remove header row

        this.rows = array;
    }

    // Campos virtuais
    get RowCount(){
        return this.rows.length;
    }

    get ColumnCount(){
        return this.header.length;
    }
}

module.exports = Table;