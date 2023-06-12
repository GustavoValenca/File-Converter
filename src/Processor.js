class Processor {
    static Process(data){
        let a = data.split("\n");
        let rows = [];

        a.forEach(row => {
            let array = row.split(",");
            rows.push(array);
        })

        return rows
    }
}

module.exports = Processor