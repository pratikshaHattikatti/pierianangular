function hi(){
    return 'Hello'
}

let gt = function (){
    console.log(this)
}

gt()

let gtN = () => console.log(this) //function assigned to variable
gtN()

function phone(cb) {
    cb()
}

phone(() => { // function passed as parameter
    console.log(`Callback Function`)
})

function mobile() { // one function returns the function

    function dial() {

    }

    dial()

    return () => {
        console.log(`Returning As Function`)
    }
}
console.log(''+mobile())
let fn = mobile()
fn()

mobile()()