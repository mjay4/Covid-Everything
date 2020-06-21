var parser = (data, type) => {
    let htmlHolder = ""
    for (i = 0; i < data.length; i++) {
        if (type == "display" || data[i].country.toLowerCase().includes(type.toLowerCase())) {
            htmlHolder += `<tr class="table-primary">
            <td scope="row">${i}</td>
            <td>${data[i].country}</td>
            <td>${data[i].cases}</td>
            <td>${data[i].deaths}</td>
            <td>${data[i].recovered}</td>
            <td>${data[i].active}</td>
            <td>${data[i].todayCases}</td>
            
            </tr>`
        }
    }
    return htmlHolder
}

var dispCountry = async () => {
    let apiData = await fetch("https://coronavirus-19-api.herokuapp.com/countries")
    let data = await apiData.json()
    let htmlElements = parser(data, "display")
    document.getElementById("FillTable").innerHTML = htmlElements
}

var searchCountry = async () => {
    console.log("ds")
    let searchValue = document.getElementById("search").value
    let apiData = await fetch("https://coronavirus-19-api.herokuapp.com/countries")
    let data = await apiData.json()
    let found = parser(data, searchValue)
    document.getElementById("FillTable").innerHTML = found
}