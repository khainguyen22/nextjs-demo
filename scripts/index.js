if (typeof window === 'object') {
    // Check if document is finally loaded
    document.addEventListener("DOMContentLoaded", function () {
        const cursor = document.querySelector(".cursor");
        // const cursor = document.getElementsByClassName('cursor');
        document.addEventListener("mousemove", (e) => {
            let leftPosition = e.pageX + 4;
            let topPosition = e.pageY + 4;

            cursor.style.left = leftPosition + "px";
            cursor.top = topPosition + "px";
        })
    });
}