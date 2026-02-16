const myarr = [34, 'hello', true, null, undefined]

console.log(myarr)

console.log(myarr.length)

const movies = [ 'Toxic', 'ARM', 'Spiderman', 'RedOne', 'RaOne', 'MeanGirls']
//Indexing
console.log( movies[4] );

console.log( movies.indexOf('MeanGirls') ); 

console.log( movies[-3] );

console.log( movies.at(-2) );

movies[1] = 'Vivaah'

console.log(movies);

//adding and removing elements
movies.push('Dangal');

movies.unshift('3 Idiots');

console.log(movies);

movies.pop()
movies.shift()
console.log(movies);