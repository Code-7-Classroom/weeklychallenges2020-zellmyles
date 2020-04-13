// Information is stored in object by using properties(keys and values) and methods



class person{
    constructor(name){
        this.name = name
    }

    sayHi = () => {
        console.log(this.name)
    }

}

const me = new person('zell myles')
console.log(me.name)
me.sayHi();


