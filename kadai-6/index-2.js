const str1 = "abc"
const str2 = "'abc'"
const str3 = '"abc"'
const str4 = '{"a": undefined}'
const str5 = '{"a": 123}'
const str6 = '{a: 123}'

try {
    console.log(JSON.parse(str1))    
} catch (error) {
    console.log(error)
    // str1(abc) is not JSON.
}

try {
    console.log(JSON.parse(str2))    
} catch (error) {
    console.log(error)
    // str2('abc') is not JSON.
}

try {
    JSON.parse(str3)
} catch (error) {
    console.error(error)
    // str3("abc") is right JSON.
}

try {
    console.log(JSON.parse(str4))    
} catch (error) {
    console.log(error)
    // str4({"a": undefined}) is not JSON. undefined is NaN.
}

try {
    console.log(JSON.parse(str5))    
} catch (error) {
    console.log(error)
    // str5({"a": 123}) is right JSON.
}

try {
    console.log(JSON.parse(str6))    
} catch (error) {
    console.log(error)
    // str6({a: 123}) is not JSON. "a" is not a object.
}