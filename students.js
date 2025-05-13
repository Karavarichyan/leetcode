const students = [
  { name: 'galo', age: '22' },

  { name: 'ali', age: '25' },

  { name: 'alo', age: '25' },

  { name: 'blo', age: '30' },

  { name: 'mno', age: '30' },
]
 const grupStudent =(item)=> {
  const grups={}
  item.forEach(element => {
    if (!grups[element.age]){
      grups[element.age]= [element]
    }else{
      grups[element.age].push(element)
    }

  });
  return grups
 }
 console.log(grupStudent(students));
