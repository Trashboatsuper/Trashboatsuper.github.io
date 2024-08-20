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
