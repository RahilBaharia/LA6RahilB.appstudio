let members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]



Button1.onclick=function(){
  let name = Input1.value
  members.push(name)
  console.log(members)
  alert(`${name} you have a membership`)
}

Button2.onclick=function(){
    let name = Input1.value
    members.push(name)
    lableOutput.value = (`${name} you do not have a membership`)
}
