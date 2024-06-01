class MasonryLayout {
    constructor(container, items, columns) {
        this.container=container;
        this.items=items;
        this.columns=columns
    }
    fetchMasonry(container, items, columns) {
        let CONTAINER_EL = document.querySelector("#" + container);
        let WRAPPER_CONTAINER_EL = CONTAINER_EL.parentNode;

        //console.log(WRAPPER_CONTAINER_EL);
        let ITEMS_ELS = CONTAINER_EL.querySelectorAll("." + items);

        CONTAINER_EL.parentNode.removeChild(CONTAINER_EL);
        let NEW_CONTAINER_EL = document.createElement('div');
        NEW_CONTAINER_EL.setAttribute('id', container);
        NEW_CONTAINER_EL.classList.add('masonry-layout', "columns-" + columns);
        WRAPPER_CONTAINER_EL.appendChild(NEW_CONTAINER_EL);
        for (let i = 1; i <= columns; i++) {
            let COLUMN = document.createElement('div');
            COLUMN.classList.add("masonry-column-" + i);
            NEW_CONTAINER_EL.appendChild(COLUMN);
        }
        let countColumn = 1;
        ITEMS_ELS.forEach(function (item) {
            let col = document.querySelector("#" + container + " > .masonry-column-" + countColumn);
            col.appendChild(item);
            countColumn = countColumn < columns ? countColumn + 1 : 1;
        });
    };
}
export default MasonryLayout