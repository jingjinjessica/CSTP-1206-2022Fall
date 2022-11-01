function sum()  
{
    var a;
    var b; //declaration
    a = 10;
    if (true)
    {
        var b = 11;
        let c = 10; //died within the block
        const d=20; //died within the block
    }
    console.log(a); //10
    console.log(b); //11
    console.log(c);//error referential error
    console.log(d);//error referential error

}
sum();

// function random()
// {
//     let a =5;
//     if (true)
//     {
//         console.log(a);
//     }
// }
// random();

