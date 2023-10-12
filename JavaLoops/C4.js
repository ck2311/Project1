/*for loop we know that the itteration in advance*/
for (var i = 0; i < 10; i++) {
    console.log(i)
}
/*while loop we dont know the itteration in advance*/
var i = 0
while (i < 10) {
    console.log(i)
    i++
}
/*do while we know itteration for one time*/
var i = 10
do {
    console.log(i)
    i += 1
}
while (i < 10)
do {
    console.log("do while")
}
while (true)