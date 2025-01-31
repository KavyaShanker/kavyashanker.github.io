const container = document.querySelector('.container');

function generateMasonryGrid(columns, posts) {
    container.innerHTML = ''; 

    let columnWrappers = {};

    for (let i = 0; i < columns; i++) {
        columnWrappers[`column${i}`] = [];
    }

    for (let i = 0; i < posts.length; i++) {
        const column = i % columns;
        columnWrappers[`column${column}`].push(posts[i]);
    }

    // Create columns and add images
    for (let i = 0; i < columns; i++) {
        let columnPosts = columnWrappers[`column${i}`];
        let div = document.createElement('div');
        div.classList.add('column');

        // Add images to each column
        columnPosts.forEach(imageURL => {
            let postDiv = document.createElement('div');
            postDiv.classList.add('post');
            let image = document.createElement('img');
            image.src = imageURL;  
            postDiv.appendChild(image);  
            div.appendChild(postDiv);  
        });

        container.appendChild(div);
    }
}


let previousScreenSize = window.innerWidth;

window.addEventListener('resize', () => {
    if(window.innerWidth < 600 && previousScreenSize >= 600){
        generateMasonryGrid(1, posts);
    }else if(window.innerWidth >= 600 && window.innerWidth < 1000 && (previousScreenSize < 600 || previousScreenSize >= 1000)){
        generateMasonryGrid(2, posts);

    }else if(window.innerWidth >= 1000 && previousScreenSize < 1000){
        generateMasonryGrid(4, posts)
    }
    previousScreenSize = window.innerWidth;

})

if(previousScreenSize < 600){
    generateMasonryGrid(1, posts)
}else if(previousScreenSize >= 600 && previousScreenSize < 1000){
    generateMasonryGrid(2, posts)
}else{
    generateMasonryGrid(4, posts)
}
