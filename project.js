let projects = []

function addProject(event) {
    event.preventDefault()

    let title = document.getElementById('input-project-name').value
    let startDate = document.getElementById('input-start-date').value
    let endDate = document.getElementById('input-end-date').value
    let desc = document.getElementById('input-project-desc').value
    let nodejs = document.getElementById('input-nodejs').checked
    let react = document.getElementById('input-react').checked
    let nextjs = document.getElementById('input-nextjs').checked
    let typescript = document.getElementById('input-typescript').checked
    let image = document.getElementById('input-project-image').files


    if (nodejs) {
       nodejs = document.getElementById('input-nodejs').value
    } else {
        nodejs =''
    }

    if (react) {
       react = document.getElementById('input-react').value
    } else {
        react =''
    }

    if (nextjs) {
       nextjs = document.getElementById('input-nextjs').value
    } else {
        nextjs =''
    }

    if (typescript) {
        typescript = document.getElementById('input-typescript').value
    } else {
        typescript =''
    }


    image = URL.createObjectURL(image[0]) // untuk menampilkan gambar agar tampil

    let project = {
        title: title,
        startDate: startDate,
        endDate: endDate,
        desc: desc,
        nodejs: nodejs,
        react: react,
        nextjs: nextjs,
        typescript: typescript,
        image: image
    }


    projects.push(project)
    console.log(projects);

    renderBlog()
}


function renderBlog() {

    document.getElementById('contents').innerHTML = ''

    for (let dataBlog = 0; dataBlog < projects.length; dataBlog++) {

        document.getElementById('contents').innerHTML +=
        `
            <div class="card">

                <div>
                    <img src= ${projects[dataBlog].image} /> 
                </div>

                <div class="title">
                    <h3> ${projects[dataBlog].title} </h3>
                </div>

                <div class="durasi">
                    <P>durasi : 3 bulan</P>
                </div>

                <div class="desc">
                    <p> ${projects[dataBlog].desc}
                    </p>
                </div>

                <div class="tech">
                    <i class="${projects[dataBlog].nodejs}"></i>
                    <i class="${projects[dataBlog].react}"></i>
                    <i class="${projects[dataBlog].nextjs}"></i>
                    <i class="${projects[dataBlog].typescript}"></i>                  
                </div>

                <div>
                    <button  class="edit">edit</button>
                    <button class="delete">delete</button>
                </div>
            </div>
        
        `
    }

}
