const Validatior=require('fastest-validator')
const v=new Validatior()
const schema={
    number:{
    type:"string",
    min:11,
    max:11,
    pattern: /^09\d{9}$/,
    messages: {
        stringPattern: "شماره تلفن باید با 09 شروع شود و 11 رقم باشد",
        stringMin:"شماره تلفن باید 11 رقم باشد",
    }
}
}
const loginValidatior=v.compile(schema)
export default loginValidatior