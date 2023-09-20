const labels = document.querySelectorAll('.form-control label')

// ===============================

labels.forEach(label=>{
    label.innerHTML = label.innerText
    .split('')
    .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
    .join('')
})

// so we can see in console 
// <label >Email</label>

// ====> ITS CONVERT IN ======

/* <span>E</span>
<span>m</span>
<span>a</span>
<span>i</span>
<span>l</span> */