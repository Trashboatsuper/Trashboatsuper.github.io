document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img.manipulatable');
    const imageSize = 100;
    let activeImage = null;
    let offsetX = 0;
    let offsetY = 0;
    let velocityX = 0;
    let velocityY = 0;
    let lastMouseX = 0;
    let lastMouseY = 0;

    images.forEach(image => {
        const { left, top } = getRandomPosition();
        image.style.left = `${left}px`;
        image.style.top = `${top}px`;
        let dx = (Math.random() - 0.5) * 4;
        let dy = (Math.random() - 0.5) * 4;
        let isBeingThrown = false;
        function moveImage() {
            if (image !== activeImage) {
                const rect = image.getBoundingClientRect();
                const containerRect = document.body.getBoundingClientRect();
                let newLeft = rect.left + dx;
                let newTop = rect.top + dy;
                if (newLeft <= containerRect.left || newLeft + imageSize >= containerRect.right) {
                    dx *= -0.9; 
                    newLeft = Math.max(containerRect.left, Math.min(newLeft, containerRect.right - imageSize));
                }
                if (newTop <= containerRect.top || newTop + imageSize >= containerRect.bottom) {
                    dy *= -0.9;
                    newTop = Math.max(containerRect.top, Math.min(newTop, containerRect.bottom - imageSize));
                }
                image.style.left = `${newLeft}px`;
                image.style.top = `${newTop}px`;
                dx *= 0.99;
                dy *= 0.99;
                if (Math.random() < 0.05) { 
                    dx += (Math.random() - 0.5) * 2;
                    dy += (Math.random() - 0.5) * 2;
                }
                images.forEach(otherImage => {
                    if (otherImage !== image) {
                        const otherRect = otherImage.getBoundingClientRect();
                        if (checkCollision(rect, otherRect)) {
                            handleCollision(image, otherImage);
                        }
                    }
                });
            }
            requestAnimationFrame(moveImage);
        }
        moveImage();
        image.addEventListener('mousedown', (e) => {
            if (!isBeingThrown) {
                activeImage = image;
                offsetX = e.clientX - image.getBoundingClientRect().left;
                offsetY = e.clientY - image.getBoundingClientRect().top;
                lastMouseX = e.clientX;
                lastMouseY = e.clientY;
                velocityX = 0;
                velocityY = 0;
                if (image.id === 'image2') {
                    document.getElementById('text2').style.display = 'block';
                }
                if (image.id === 'image1') {
                    document.getElementById('text1').style.display = 'block';
                }
                if (image.id === 'image3') {
                    document.getElementById('text3').style.display = 'block';
                }
                if (image.id === 'image4') {
                    document.getElementById('text4').style.display = 'block';
                }
                if (image.id === 'image5') {
                    document.getElementById('text5').style.display = 'block';
                }
                if (image.id === 'image6') {
                    document.getElementById('text6').style.display = 'block';
                }
                if (image.id === 'image7') {
                    document.getElementById('text7').style.display = 'block';
                }
                if (image.id === 'image8') {
                    document.getElementById('text8').style.display = 'block';
                }
                // //////////////////////Stop the image from moving during drag
                e.preventDefault();
            }
        });
        // //////////////////////////Mouse move to drag the image
        document.addEventListener('mousemove', (e) => {
            if (activeImage === image) { ///////////////// Only drag the currently active image
                const newLeft = e.clientX - offsetX;
                const newTop = e.clientY - offsetY;
                velocityX = e.clientX - lastMouseX;
                velocityY = e.clientY - lastMouseY;
                lastMouseX = e.clientX;
                lastMouseY = e.clientY;
                activeImage.style.left = `${newLeft}px`;
                activeImage.style.top = `${newTop}px`;
//shiiiiiiiiiiiiiiiitttttttttttttt
                if (activeImage.id === 'image2') {
                    const text = document.getElementById('text2');
                    text.style.left = `${newLeft + imageSize}px`;
                    text.style.top = `${newTop}px`;
                }
                if (activeImage.id === 'image1') {
                    const text = document.getElementById('text1');
                    text.style.left = `${newLeft + imageSize}px`;
                    text.style.top = `${newTop}px`;
                }
                if (activeImage.id === 'image3') {
                    const text = document.getElementById('text3');
                    text.style.left = `${newLeft + imageSize}px`;
                    text.style.top = `${newTop}px`;
                }
                if (activeImage.id === 'image4') {
                    const text = document.getElementById('text4');
                    text.style.left = `${newLeft + imageSize}px`;
                    text.style.top = `${newTop}px`;
                }
                if (activeImage.id === 'image5') {
                    const text = document.getElementById('text5');
                    text.style.left = `${newLeft + imageSize}px`;
                    text.style.top = `${newTop}px`;
                }
                if (activeImage.id === 'image6') {
                    const text = document.getElementById('text6');
                    text.style.left = `${newLeft + imageSize}px`;
                    text.style.top = `${newTop}px`;
                }
                if (activeImage.id === 'image7') {
                    const text = document.getElementById('text7');
                    text.style.left = `${newLeft + imageSize}px`;
                    text.style.top = `${newTop}px`;
                }
                if (activeImage.id === 'image8') {
                    const text = document.getElementById('text8');
                    text.style.left = `${newLeft + imageSize}px`;
                    text.style.top = `${newTop}px`;
                }
            }
        });
        document.addEventListener('mouseup', () => {
            if (activeImage === image) { /////////// Only release the active image
                isBeingThrown = true; /////////// Set the flag to true when throwing starts
                activeImage = null; ///////////////////// Release the image

                /////////////////////////// Hide text when image is released omgaaaaaaaaaaaaaaa
                if (image.id === 'image2') {
                    document.getElementById('text2').style.display = 'none';
                }
                
                if (image.id === 'image1') {
                    document.getElementById('text1').style.display = 'none';
                }

                if (image.id === 'image3') {
                    document.getElementById('text3').style.display = 'none';
                }

                if (image.id === 'image4') {
                    document.getElementById('text4').style.display = 'none';
                }

                if (image.id === 'image5') {
                    document.getElementById('text5').style.display = 'none';
                }

                if (image.id === 'image6') {
                    document.getElementById('text6').style.display = 'none';
                }

                if (image.id === 'image7') {
                    document.getElementById('text7').style.display = 'none';
                }

                if (image.id === 'image8') {
                    document.getElementById('text8').style.display = 'none';
                }
                function animateThrow() {
                    const rect = image.getBoundingClientRect();
                    const containerRect = document.body.getBoundingClientRect();
                    let newLeft = rect.left + velocityX;
                    let newTop = rect.top + velocityY;
                    // Bounce off edges dont cuz chump if so
                    if (newLeft <= containerRect.left || newLeft + imageSize >= containerRect.right) {
                        velocityX *= -0.9; ////////////Decrease bounce
                        newLeft = Math.max(containerRect.left, Math.min(newLeft, containerRect.right - imageSize));
                    }
                    if (newTop <= containerRect.top || newTop + imageSize >= containerRect.bottom) {
                        velocityY *= -0.9; ////////////Decrease on bounce
                        newTop = Math.max(containerRect.top, Math.min(newTop, containerRect.bottom - imageSize));
                    }
                    //fuck this is from chatgpt but i know how it works know just dont know from scratch shit
                    velocityX *= 0.99;
                    velocityY *= 0.99;

                    image.style.left = `${newLeft}px`;
                    image.style.top = `${newTop}px`;

                    // Randomly adjust direction slightly for continuous random movement
                    if (Math.random() < 0.05) { // 5% chance to change direction on each frame
                        velocityX += (Math.random() - 0.5) * 2;
                        velocityY += (Math.random() - 0.5) * 2;
                    }

                    // Continue animation if the image is still moving
                    if (Math.abs(velocityX) > 0.1 || Math.abs(velocityY) > 0.1) {
                        requestAnimationFrame(animateThrow);
                    } else {
                        isBeingThrown = false; // Reset the flag when the throw ends
                    }
                }

                // Start the throw animation
                animateThrow();
            }
        });
    });
////////////////////////////////////////////////////////////////////////////////////////chat gpt ends here
    ///////////position within the viewport
    function getRandomPosition() {
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const maxLeft = viewportWidth - imageSize;
        const maxTop = viewportHeight - imageSize;
        const left = Math.random() * maxLeft;
        const top = Math.random() * maxTop;
        return { left, top };
    }
    ///////////////collision and shit
    function checkCollision(rect1, rect2) {
        return !(rect1.right < rect2.left || 
                 rect1.left > rect2.right || 
                 rect1.bottom < rect2.top || 
                 rect1.top > rect2.bottom);
    }
    //repelling effect between two images
    function handleCollision(image1, image2) {
        // Calculate direction vector between the two images cuz just count man
        let dx = parseFloat(image1.style.left) - parseFloat(image2.style.left);
        let dy = parseFloat(image1.style.top) - parseFloat(image2.style.top);
        let distance = Math.sqrt(dx * dx + dy * dy);
        ///////////////////////////////////////////////////////////////////
        if (distance < imageSize) { ///////Check if they are colliding: but real comes from youtube 
            let overlap = imageSize - distance;
            dx /= distance;
            dy /= distance;
            // Move each image away from each other and fuck
            image1.style.left = `${parseFloat(image1.style.left) + dx * overlap}px`;
            image1.style.top = `${parseFloat(image1.style.top) + dy * overlap}px`;
            image2.style.left = `${parseFloat(image2.style.left) - dx * overlap}px`;
            image2.style.top = `${parseFloat(image2.style.top) - dy * overlap}px`;
            // Apply reduced velocity for collision
            ///////////shiiiiiiiiiiiitttt why it does not do what i want it to do shitttttt but anyway all let it there
            let repelFactor = 0.8; // Apply less force on collision for a more softer bounce
            image1.dx += dx * repelFactor;
            image1.dy += dy * repelFactor;
            image2.dx -= dx * repelFactor;
            image2.dy -= dy * repelFactor;
        }
    }
});
//////////////aaaaaaaaaaaaaaaaaaa ima kill myself here i just let it there




function makeDraggable(element) {
    let startX, startY, initialX, initialY, offsetX, offsetY;

    function onMouseDown(e) {
        startX = e.clientX;
        startY = e.clientY;
        initialX = element.offsetLeft;
        initialY = element.offsetTop;
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    }

    function onMouseMove(e) {
        offsetX = e.clientX - startX;
        offsetY = e.clientY - startY;
        element.style.left = initialX + offsetX + 'px';
        element.style.top = initialY + offsetY + 'px';
        element.style.cursor = 'grabbing';
    }

    function onMouseUp() {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
        element.style.cursor = 'grab';
    }

    function onTouchStart(e) {
        e.preventDefault(); // Prevent scrolling while dragging
        const touch = e.touches[0];
        startX = touch.clientX;
        startY = touch.clientY;
        initialX = element.offsetLeft;
        initialY = element.offsetTop;
        document.addEventListener('touchmove', onTouchMove);
        document.addEventListener('touchend', onTouchEnd);
    }

    function onTouchMove(e) {
        const touch = e.touches[0];
        offsetX = touch.clientX - startX;
        offsetY = touch.clientY - startY;
        element.style.left = initialX + offsetX + 'px';
        element.style.top = initialY + offsetY + 'px';
        element.style.cursor = 'grabbing';
    }

    function onTouchEnd() {
        document.removeEventListener('touchmove', onTouchMove);
        document.removeEventListener('touchend', onTouchEnd);
        element.style.cursor = 'grab';
    }

    element.addEventListener('mousedown', onMouseDown);
    element.addEventListener('touchstart', onTouchStart);
}

document.querySelectorAll('.manipulatable').forEach(makeDraggable);
