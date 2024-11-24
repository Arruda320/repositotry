// codigo do dark mode, não esquecer de oganizar a pasta do JS conforme a construção do codigo
let trilho = document.getElementById('trilho')
let body = document.querySelector('body')
let input = document.querySelector('input')
let menu = document.querySelector('menu')
trilho.addEventListener('click', () =>{
  trilho.classList.toggle('dark')
  body.classList.toggle('dark')
  input.classList.toggle('dark')
  menu.classList.toggle('dark')
})

// rotação das cores
let dm = document.querySelector('#dm')
let md = document.querySelector('.md')
dm.addEventListener("click", () =>{
  dm.classList.toggle('rotate')
  dm.style.transition = '.5s'
})

// dm.addEventListener("click", )https://www.google.com/search?sca_esv=2b265522246b066d&sxsrf=ADLYWIJfidTmEkNMZqLUUVNJ9Ci9dOC-pQ:1731565734657&q=dispara+a%C3%A7%C3%A3o+com+o+click+js&tbm=vid&source=lnms&fbs=AEQNm0AuaLfhdrtx2b9ODfK0pnmiWLCaqfxnx4rDi3lOGYSzGtnkbAHlUVgArcxuUb5daFQrKBkWOjOpHZHoSIvGBtZUDATuNkDS_dYGCVwt-O4RadfQa5uzlyNpeVkmwGkusYn4ISwj7cyc9wQ2Fwl9NokE5n5EEy-HgwgLp7A_DP_2bJecRL1HTEx-jlQHZkHil__6a2O8ZjBEKuqVltKXevlj9Up0FA&sa=X&ved=2ahUKEwjQ2ZOEmduJAxX8E7kGHTbXGx8Q0pQJegQIExAB&biw=1920&bih=991&dpr=1#fpstate=ive&vld=cid:d92f611d,vid:ICVQj1FGEDM,st:0