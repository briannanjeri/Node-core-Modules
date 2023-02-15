const url=require('url')

const myUrl=new URL('http://mywebsite.com:5000/hello.html?id=100&status=active');
//serialized url
console.log(myUrl.href)
//host root domain
console.log(myUrl.host)
//hostname
console.log(myUrl.hostname)
// pathname
console.log(myUrl.pathname)
//serialized query
console.log(myUrl.search)
//params object
console.log(myUrl.searchParams)
//add params
myUrl.searchParams.append('abc', 123)
console.log(myUrl.searchParams)
//loop through params
myUrl.searchParams.forEach((value, name)=>console.log(`${name}:${value}`))