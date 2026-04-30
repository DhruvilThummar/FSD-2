//  Q.1 from json object fetch the value as asked 

const a =
{
    'Datastrucher':
        [
            {
                'Name': 'tree',
                'course': 'Intro',
                'content': ['1', 'B', 'C']
            },
            {
                'Name': 'tree1',
                'course': 'Intro',
                'content': ["1", "B", "C", "d"]
            }
        ],
    "xyz":
    {
        'Name': 'Graphics',
        'Topic': ["BFS", "CDF", "Sort"]
    }
}

console.log("Name: " + a.Datastrucher[1].Name)
console.log("Course: " + a.Datastrucher[1].course)
console.log("Content: " + a.Datastrucher[1].content)

console.log(a.xyz)
console.log(a.xyz.Name)
console.log(a.xyz.Topic)