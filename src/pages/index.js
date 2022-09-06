import React from "react"

export default function Home() {
  function loadXMLDoc() {
    var xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("demo").innerHTML = this.responseText
      }
    }
    xhttp.open("GET", "https://api.lightspeedapp.com/API/V3/Account.json", true)
    xhttp.setRequestHeader(
      "Authorization",
      "Bearer 7474d63a7ac150b1dd2c4bfa48f161492d5e0b53"
    )
    xhttp.send()
  }
  return (
    <div id="demo">
      <button type="button" onClick={() => loadXMLDoc()}>
        Change Content
      </button>
    </div>
  )
}
