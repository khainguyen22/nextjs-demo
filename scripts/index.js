if (typeof window === 'object') {
    document.addEventListener("DOMContentLoaded", function () {
        console.log('red');
        const cursor = document.querySelector(".cursor");
        document.addEventListener("mousemove", (e) => {
            let leftPosition = e.pageX + 4;
            let topPosition = e.pageY + 4;

            cursor.style.left = leftPosition + "px";
            cursor.style.top = topPosition + "px";
        });
    });
}
