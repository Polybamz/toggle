//  document.querySelector('#year').cheched.onload


document.querySelector('#month').addEventListener('click',()=>{
  document.querySelector('.card1h1').innerHTML = '$24.99'
  document.querySelector('.card3h1').innerHTML = '$39.99'
  document.querySelector('.card2h1').innerHTML = '$19.99'
  document.querySelector('#bButton').style.backgroundColor = 'white'
  document.querySelector('#bButton').style.color = 'hsl(236, 63%, 70%)'
  document.querySelector('#cc').style.backgroundColor = 'hsl(236, 63%, 70%)'
  document.querySelector('#cc').style.color = 'white'
  document.querySelector('#cd').style.backgroundColor = 'hsl(236, 63%, 70%)'
  document.querySelector('#cd').style.color = 'white'
})
document.querySelector('#year').addEventListener('click',()=>{
  document.querySelector('.card1h1').innerHTML = '$249.99'
  document.querySelector('.card3h1').innerHTML = '$399.99'
  document.querySelector('.card2h1').innerHTML = '$199.99'
  document.querySelector('#bButton').style.backgroundColor = 'hsl(236, 63%, 70%)'
  document.querySelector('#bButton').style.color = 'white'
  document.querySelector('#cc').style.backgroundColor = 'white'
  document.querySelector('#cc').style.color = 'hsl(233, 13%, 29%)'
  document.querySelector('#cd').style.backgroundColor = 'white'
  document.querySelector('#cd').style.color = 'hsl(233, 13%, 29%)'

})   
  


