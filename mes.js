let mes = {
    subject: ['I','You','He','She','They','It','The God'],
    mverb: ['can','could','should','will','shall','must','may','','','','','','',''],
    verb: ['do','fuck','love','go through','help'],
    object: ['pizza','her','book','you']
}
let bin = [];

const mess_maker = () => {
    for (key in mes) {
        let a;
        a = mes[key][Math.floor(Math.random()*(mes[key].length))]
        if (a != ''){
            bin.push(a)
        }
    }
    console.log(bin.length)
    if (bin.length === 3) {
        switch(bin[1]) {
            case mes.verb[0]:
                bin[1]='did';
                break;
            case mes.verb[1]:
                bin[1]+='ed';
                break;
            case mes.verb[2]:
                bin[1]+='d';
                break;
            case mes.verb[3]:
                bin[1]='went through';
                break;
            case mes.verb[4]:
                bin[1]+='ed';
                break;
        }
    }
    return bin;
}

console.log(mess_maker().join(' '))
