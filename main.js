//function tanpa parameter
function tampilkan(){
    alert("Halo")
}

//tampilkan()


function munculkanAngkaDua(){
    return 2
}

var tampung = munculkanAngkaDua();
//alert(tampung)


function tambahdua(angka){
    return angka + 2
}

var tampung = tambahdua(2);
//alert(tampung)

function tampilkanangka (angka1, angka2){
    return angka1+angka2
}
//alert(tampilkanangka(5,2))

function tampilkanangka(angka=1) {
    return angka
}
//alert(tampilkanangka(5))
//alert(tampilkanangka)

var fungsi = function (angka1, angka2) {
    return angka1+angka2
}
//alert(fungsi(2,4))

var animals =["Lion","Tiger","Puma"]
//semuaarray
//alert(animals)

//memanggil array ke-
//alert(animals[2])

//menambahkan array
animals.push("Dragon")
//alert(animals[3])

animals.pop()
animals.slice(0,2)

var animalArray=["ayam","badak"];
animalArray.push("cacing");
//alert(animalArray);
//menambhakan data

animalArray.pop();
//alert(animalArray);
//menghapus

animalArray.unshift("dog")
console.log(animalArray)
//alert(animalArray)
//menambhakandibagiandpn

animalArray.shift();
//alert(animalArray)
//menghapus bagian depan

var a=[0,1,2,3]
a.push(4)
//alert(a)
a.pop()
//alert(a)
//mengurangi
a.unshift(3)
//alert(a)
//menambahkan dibagian dpn
var a=[3,0,1,2]
a.shift();
//alert(a)
//menambahkandidepan
var a = [3,8,9,2]
a.sort()
//alert(a)
//mengurutkan
var ac = ['Tomo','Budo','Ahmad']
ac.sort()
//alert(ac)


var supermanObj = {
    id: "1a2b3c",
    name: "Superman",
    age: 200,
    favorites: [
      "coding",
      "reading",
      {
        sports: ["parkour", "hill climbing"]
      }
    ],
    address: {
      street: "Planet Krypton",
      zipCode: 54213
    }
  };
  
  console.log(supermanObj.name); 
  console.log(supermanObj.age); 
  console.log(supermanObj.favorites[0]); 
  console.log(supermanObj.favorites[2].sports); 
  console.log(supermanObj.favorites[2].sports[0]); 
  console.log(supermanObj.address);
  console.log(supermanObj.address.zipCode);




























