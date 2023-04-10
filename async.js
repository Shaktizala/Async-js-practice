const datas = [
    {
        name: "shakti",
        profession : "Software Engineer"
    },
    {
        name: "chintan",
        profession: "Software Engineer"
    },
    {
        name: "nakshi",
        profession: "APS"
    }
]

// function getData() {
//     setTimeout(() => {
//         let output = ""
//         datas.forEach((data, index) => {
//            output += `<li>${data.name}</li>`
//         })
//         document.body.innerHTML = output
//     }, 1000)
// }


// function createData(newData) {
//     setTimeout(() => {
//         datas.push(newData)
//     }, 2000)
// }
// createData({ name: "nilam", profession: "Software Engineer" })
// getData()

// Pronblem
// here we'll not recieve updated/imserted value (i.e. nilam,SE) because getting time is less than creatin/updating time

// Approach - 1
// using callback - passing getData function to createData, and calling it once the data is inserted
// function getData() {
//     setTimeout(() => {
//         let output = ""
//         datas.forEach((data, index) => {
//            output += `<li>${data.name}</li>`
//         })
//         document.body.innerHTML = output
//     }, 1000)
// }


// function createData(newData, callback) {
//     setTimeout(() => {
//         datas.push(newData)
//         callback()
//     }, 2000)
// }
// createData({ name: "nilam", profession: "Software Engineer" }, getData)

// Approach - 2
// using Promise
// function getData() {
//     setTimeout(() => {
//         let output = ""
//         datas.forEach((data, index) => {
//            output += `<li>${data.name}</li>`
//         })
//         document.body.innerHTML = output
//     }, 1000)
// }


// function createData(newData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             datas.push(newData)
//             let error = false
//             if (!error) {
//                 resolve()
//             } else {
//                 reject("recieved error")
//             }
//         }, 2000)
//     })
    
    
// }
// createData({ name: "nilam", profession: "Software Engineer" })
// .then(getData)
// .catch(err => console.log(err))

// we are returning promise and if it's in resolve condition we call getData inside then and in case of error we are using catch

// Approach - 3
// Async and Await

function getData() {
    setTimeout(() => {
        let output = ""
        datas.forEach((data, index) => {
           output += `<li>${data.name}</li>`
        })
        document.body.innerHTML = output
    }, 1000)
}


function createData(newData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            datas.push(newData)
            let error = false
            if (!error) {
                resolve()
            } else {
                reject("recieved error")
            }
        }, 2000)
    })
}

async function start() {
    await createData({ name: "nilam", profession: "Software Engineer" })
    getData()
}
start()