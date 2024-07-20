    //  create "contact"
    var contactSection = document.createElement('section');
    contactSection.classList.add('contact');
  
    // create "content"
    var contentDiv = document.createElement('div');
    contentDiv.classList.add('content');
    var heading = document.createElement('h1');
    heading.textContent = 'Contact Us';
    var paragraph = document.createElement('p');
    paragraph.textContent = 'Welcome, we always seek to help our clients. If you have any questions, you can send a message at any time. We are always available 24/7.';
    contentDiv.appendChild(heading);
    contentDiv.appendChild(paragraph);
  
    contactSection.appendChild(contentDiv);
  
    // "container"
    var containerDiv = document.createElement('div');
    containerDiv.classList.add('container');
    var contactInfoDiv = document.createElement('div');
    contactInfoDiv.classList.add('contact-info');
  
    // Info Data
    var infoData = [
      { icon: '📍', title: 'Address', text: 'El-Maady, Cairo, Egypt' },
      { icon: '📞', title: 'Phone', text: '01135685908' },
      { icon: '✉️', title: 'Email', text: 'abcd@gmail.com' , isEmail:true }
    ];

    
    infoData.forEach(info => {
      var boxDiv = document.createElement('div');
      boxDiv.classList.add('box');
      
      var iconDiv = document.createElement('div');
      iconDiv.classList.add('icon');
      iconDiv.textContent = info.icon;
      
      var textDiv = document.createElement('div');
      textDiv.classList.add('text');
      
      var h3 = document.createElement('h3');
      h3.textContent = info.title;
      textDiv.appendChild(h3);
      if (info.isEmail) {
        var a = document.createElement('a');
        a.href = 'mailto:' + info.text;
        a.textContent = info.text;
        textDiv.appendChild(a);
      } else {
        var p = document.createElement('p');
        p.textContent = info.text;
        textDiv.appendChild(p);
      }
      // textDiv.appendChild(p);
      boxDiv.appendChild(iconDiv);
      boxDiv.appendChild(textDiv);
      contactInfoDiv.appendChild(boxDiv);
    });
  
    containerDiv.appendChild(contactInfoDiv);

    // Create and append the button back to home div
    var buttonDiv = document.createElement('div');
    buttonDiv.className = 'button1';
    var buttonLink = document.createElement('a');
    buttonLink.href = 'home.html';
    buttonLink.textContent = 'Back to Home';
    buttonDiv.appendChild(buttonLink);
    contactInfoDiv.appendChild(buttonDiv);
    // document.body.appendChild(buttonDiv);
    ///////////////////////////////////////////////////////////////////
    
    // Creat "contact Form"
    var contactFormDiv = document.createElement('div');
    contactFormDiv.classList.add('contactForm');
    var form = document.createElement('form');
    var formHeading = document.createElement('h2');
    formHeading.textContent = 'Send Message';
    
    // Form Data array
    var formData = [
      { label: 'Full Name:', type: 'text', required: true , id:"fullName", pattern: "^[a-zA-Z\\s]+$"  },
      { label: 'Email:', type: 'email', required: true, id:"E-mail", pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$" },
      { label: 'Type your Message:', type: 'textarea', required: true }
    ];
  
    // Create Form element
    formData.forEach(data => {
      var inputBox = document.createElement('div');
      inputBox.classList.add('inputBox');
      
      var label = document.createElement('label');
      label.textContent = data.label;
      label.htmlFor = data.id;
      inputBox.appendChild(label);
      
      let input;
      if (data.type === 'textarea') {
        input = document.createElement('textarea');
      } else {
        input = document.createElement('input');
        input.type = data.type;
      
      }
      input.required = data.required;
      input.id = data.id;
      input.pattern = data.pattern;
      inputBox.appendChild(input);
      form.appendChild(inputBox);
    });
////////////////////////////////////////////////
   
    // Add Send Button
    var submitBox = document.createElement('div');
    submitBox.classList.add('inputBox');
    var submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.value = 'Send';
    submitButton.addEventListener('click', function() {
      if (form.checkValidity()) {
        storeData();
    } else {
        alert("Please fill out the form correctly.");
    }
             });
    submitBox.appendChild(submitButton);
    form.appendChild(submitBox);
  
    contactFormDiv.appendChild(form);
    containerDiv.appendChild(contactFormDiv);

    // // Create and append the button back to home div
    // var buttonDiv = document.createElement('div');
    // buttonDiv.className = 'button1';
    // var buttonLink = document.createElement('a');
    // buttonLink.href = 'home.html';
    // buttonLink.textContent = 'Back to Home';
    // buttonDiv.appendChild(buttonLink);
    // // containerDiv.appendChild(buttonDiv);
    // document.body.appendChild(buttonDiv);

    contactSection.appendChild(containerDiv);
    document.body.appendChild(contactSection);
  
    var styles = `
      .contact {
        position: relative;
        min-height: 100vh;
        padding: 50px 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-size: cover;
      }
      .contact .content {
        max-width: 800px;
        text-align: center;
      }
      // .contact .content h2 {
      //   font-size: 40px;
      //   font-weight: 500;
      //   color: #13515a;
      //   margin-bottom: 10px;
      // }
      .contact .content h1 {
            text-align: center;
            font-size: 40px;
            color: #000000;
            text-transform: uppercase;
            letter-spacing: 1.5;
            margin-top: 50px;
            }
      .contact .content h1::after {
            content: "";
            height: 5px;
            width: 200px;
            background-color: #000000;
            border-radius: 10px;
            display: block;
            margin: auto;
            }
      .contact .content p {
        font-weight: 400;
        color: #000000;
        text-align: left;
        margin-top: 10px;
        // padding:0px;
        font-size: large;
      }
      .container {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 30px;
      }
      .container .contact-info {
        width: 50%;
        display: flex;
        flex-direction: column;
      }
      .container .contact-info .box {
        position: relative;
        padding: 10px 0;
        display: flex;
      }
      .container .contact-info .box .icon {
        min-width: 40px;
        height: 40px;
        border-radius: 10px;
        background: #fff;
        display: flex;
        justify-content: center;
        font-size: 22px;
        margin:5px
      }
      .container .contact-info .box .text {
        display: flex;
        margin-left: 20px;
        font-size: 18px;
        color: #080808;
        flex-direction: column;
        font-weight: 500;
      }
      .container .contact-info .box .text h3 {
        font-weight: 500;
        color: cadetblue;
      }
      .contactForm {
        width: 40%;
        padding: 40px;
        background: #fff;
      }
      .contactForm h2 {
        font-size: 30px;
        color: #333;
        font-weight: 500;
      }
      .contactForm .inputBox {
        position: relative;
        width: 100%;
        margin-top: 10px;
      }
      .contactForm .inputBox input,
      .contactForm .inputBox textarea {
        width: 100%;
        padding: 5px 0;
        font-size: 16px;
        margin: 10px 0;
        border: none;
        border-bottom: 2px solid #333;
        outline: none;
        resize: none;
      }
      .contactForm .inputBox label {
        left: 0;
        padding: 5px 0;
        font-size: 16px;
        margin: 10px 0;
        color: #666;
      }
      .contactForm .inputBox input[type="submit"] {
        width: 100px;
        background: #000000;
        color: #fff;
        border: none;
        cursor: pointer;
        padding: 10px;
        font-size: 18px;
        border-radius: 5px;
      }

    .button1 {
      width: 100%;
      text-align: left;
      margin-top: 40px;
      padding-top: 20px;
      padding-bottom: 20px;
       }
    .button1 a {
      text-decoration: none;
      color: white;
      background: #000000;
      padding: 10px 20px;
      border-radius: 5px;
  }


    `;
    document.getElementById('styleContact').textContent = styles;

  ////////////////////////////////////
  function storeData(){
        var fullName=document.getElementById("fullName").value
        localStorage.setItem("full_Name",fullName)
        var email=document.getElementById("E-mail").value
        localStorage.setItem("e_mail",email)
        
        // alert("Data stored successfully!");

    };
  