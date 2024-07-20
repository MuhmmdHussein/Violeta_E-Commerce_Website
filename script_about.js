    // Get the main section
        var mainSection = document.getElementById('sectionAbout');

        // Create the aboutUs div
        var aboutUs = document.createElement('div');
        aboutUs.className = 'aboutUs';

        // Create and append the h1 element
        var heading = document.createElement('h1');
        heading.textContent = 'About Us';
        aboutUs.appendChild(heading);

        // Create the container div
        var container = document.createElement('div');
        container.className = 'container';

        // Create the content div
        var content = document.createElement('div');
        content.className = 'content';

        // Create and append the h3 element
        var title = document.createElement('h3');
        title.textContent = 'Welcome to Violeta Store!';
        content.appendChild(title);

        // Create and append the p element
        var paragraph1 = document.createElement('p');
        paragraph1.textContent = 'At Violeta, we are dedicated to providing you with the best online shopping experience. Founded in 2024, our mission has always been to offer a wide range of high-quality products at competitive prices. We believe in making shopping easy, convenient, and enjoyable for everyone.';
        content.appendChild(paragraph1);

        var paragraph2 = document.createElement('p');
        paragraph2.textContent = 'Our team is passionate about selecting the finest products from trusted suppliers and ensuring that each item meets our strict quality standards. Whether you are looking for the latest fashion trends, top-notch electronics, home essentials, or unique gifts, we have something for everyone.';
        content.appendChild(paragraph2);

        var paragraph3 = document.createElement('p');
        paragraph3.textContent = 'Thank you for choosing Violeta. We are excited to have you as part of our community and look forward to serving you with the best products and services. Happy shopping!';
        content.appendChild(paragraph3);

        // Create and append the button contact us div
        var buttonDiv = document.createElement('span');
        buttonDiv.className = 'button';
        var buttonLink = document.createElement('a');
        buttonLink.href = 'contactus.html';
        buttonLink.textContent = 'Contact US';
        buttonDiv.appendChild(buttonLink);
        content.appendChild(buttonDiv);

        // Create and append the button back to home div
        var buttonDiv = document.createElement('span');
        buttonDiv.className = 'button1';
        var buttonLink = document.createElement('a');
        buttonLink.href = 'home.html';
        buttonLink.textContent = 'Back to Home';
        buttonDiv.appendChild(buttonLink);
        content.appendChild(buttonDiv);


        // Create and append the social div
        var socialDiv = document.createElement('div');
        socialDiv.className = 'social';
        var facebookLink = document.createElement('a');
        facebookLink.href = '';
        var facebookImg = document.createElement('img');
        facebookImg.src = './images/facebook.jpg';
        facebookImg.alt = '';
        facebookImg.style.height = '50px';
        facebookImg.style.width = '50px';
        facebookLink.appendChild(facebookImg);
        socialDiv.appendChild(facebookLink);

        var twitterLink = document.createElement('a');
        twitterLink.href = '';
        var twitterImg = document.createElement('img');
        twitterImg.src = './images/twitter.jpg';
        twitterImg.alt = '';
        twitterImg.style.height = '50px';
        twitterImg.style.width = '50px';
        twitterLink.appendChild(twitterImg);
        socialDiv.appendChild(twitterLink);

        content.appendChild(socialDiv);

        // Create the image div
        var imageDiv = document.createElement('div');
        imageDiv.className = 'image';
        var image = document.createElement('img');
        image.src = './images/market.jpg';
        image.alt = 'e-commerce';
        image.style.transform = 'scale(0.5)'; 
        image.style.transition = 'transform 2s';
        image.style.borderRadius="5px"; 
        // image.style.position="fixed";
        imageDiv.appendChild(image);

        // Append content and image divs to container
        container.appendChild(content);
        container.appendChild(imageDiv);

        // Append container to aboutUs
        aboutUs.appendChild(container);

        // Append aboutUs to main section
        mainSection.appendChild(aboutUs);

    
        var styles = `
            body {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                line-height: 1.5;
                font-family: "Poppins", sans-serif;
                width: 100%;
                max-height: 100vh;
            }
            .aboutUs {
                width: 100%;
            }
            .aboutUs h1 {
                text-align: center;
                font-size: 40px;
                color: #000000;
                text-transform: uppercase;
                letter-spacing: 1.5;
                margin-top: 50px;
            }
            .aboutUs h1::after {
                content: "";
                height: 5px;
                width: 200px;
                background-color: #000000;
                border-radius: 10px;
                display: block;
                margin: auto;
            }
            .container {
                padding: 0px 60px;
                margin: 60px auto;
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
            }
            .content {
                width: 60%;
                text-align: left;
                padding: 0px 30px;
            }
            .content h3 {
                color: #222;
                letter-spacing: 1px;
            }
            .content p {
                font-family: sans-serif;
                font-size: 18px;
                color: #3d3d3d;
                margin-top: 20px;
            }
            .content .button {
                margin-top: 40px;
                // margin-left:40px
            }
            .content .button a {
                color: #fff;
                background-color: #000000;
                border: 1px solid #13515a;
                padding: 10px 35px;
                text-decoration: none;
                letter-spacing: 1px;
                font-size: 22px;
                text-transform: uppercase;
            }
            .content .button a:hover {
                color:#000000;
                background-color: #fff;
            }
            .content .button1 {
                margin-top: 40px;
                 margin-left:40px

            }
            .content .button1 a {
                color: #fff;
                background-color: #000000;
                border: 1px solid #13515a;
                padding: 10px 35px;
                text-decoration: none;
                letter-spacing: 1px;
                font-size: 22px;
                text-transform: uppercase;
            }
            .content .button1 a:hover {
                color: #000000;
                background-color: #fff;
            }
            .content .social {
                margin-top: 30px;
                margin-left: 15px;
            }
            .content .social a {
                text-decoration: none;
                color: #222;
                font-size: 25px;
            }
            .content .social img {
                height: 40px;
                width: 40px;
                background-color: #fff;
                border: 1px solid #222;
                border-radius: 50%;
                text-align: center;
                line-height: 40px;
                margin: 5px;
            }
            .image {
                width: 40%;
                padding: 0px 30px;
                display: flex;
                align-items: flex-start;
            }
            .image img {
                max-width: 100%;
                height: auto;
            }
        `;
        document.getElementById('styleAbout').textContent = styles;
      
        setTimeout(function() {
            image.style.transform = 'scale(1)'; 
        }, 100); 