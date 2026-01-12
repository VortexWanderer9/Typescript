function wrapThis<T>(item: T): T[]{
    return [item]
}

wrapThis("Program")
wrapThis(223)
wrapThis(true)

function gen<A, B>(a: A,b:B): [A,B]{
    return [a, b]
}

gen('this', true)
gen('make', 23)
