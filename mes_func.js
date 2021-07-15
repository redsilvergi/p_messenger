var mes_var = require('./mes_var')

module.exports = {
    mess_maker() {
        for (key in mes_var.mes) {
            let a;
            a = mes_var.mes[key][Math.floor(Math.random()*(mes_var.mes[key].length))]
            if (a != ''){
                mes_var.bin.push(a)
            }
        }
        console.log(mes_var.bin.length)
        if (mes_var.bin.length === 3) {
            switch(mes_var.bin[1]) {
                case mes_var.mes.verb[0]:
                    mes_var.bin[1]='did';
                    break;
                case mes_var.mes.verb[1]:
                    mes_var.bin[1]+='ed';
                    break;
                case mes_var.mes.verb[2]:
                    mes_var.bin[1]+='d';
                    break;
                case mes_var.mes.verb[3]:
                    mes_var.bin[1]='went through';
                    break;
                case mes_var.mes.verb[4]:
                    mes_var.bin[1]+='ed';
                    break;
            }
        }
        return mes_var.bin;
    }
}
