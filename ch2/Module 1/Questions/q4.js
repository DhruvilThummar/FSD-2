// write a json object wich contains array of 3 objects. each object contains two propertyes a name and age. now shot an array values by age in desending order. print name and age in turminal as perthe sorted age.

const student =
    [
        {
            name: "NAS",
            age: 25
        },
        {
            name: "AS",
            age: 22
        },
        {
            name: "S",
            age: 28
        }
    ];

const a = student.sort((a, b) => b.age - a.age)

for (x of a) {
    console.log("Name: " + x.name + " , " + "Age: " + x.age)
}