
const fetchApi = async () =>{
    const url = "https://api.github.com/repos/Coding-Interview-Club/problem-solutions/contents/"

    try {
        let response = await fetch(url)
        let data = await response.json()
        data.forEach(element => {
            let row = addRow(element.name, element.html_url)
            document.getElementsByTagName("tbody").item(0).appendChild(row)
        });

    } catch (err) {
        console.error(err)
    }
}

const addRow = (name, url) =>{
    let tr = document.createElement("tr")

    const td1 = addCell(name)
    const td2 = addCell(url)

    tr.appendChild(td1)
    tr.appendChild(td2)
    return tr
}

const addCell = (value) =>{
    let td = document.createElement("td")
    if(value.substr(0,5) === "https"){
        let link = document.createElement("a")
        link.setAttribute("href", value)
        link.setAttribute("rel", "_blank")
        link.innerHTML = "<button>Review</button>"
        td.appendChild(link)
    }
    else{
        td.innerHTML = value
    }

    return td
}
