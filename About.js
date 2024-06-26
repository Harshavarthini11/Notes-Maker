import React from 'react'

const About = () => {
  return (
    <div className='container' >
      <h2>About Us </h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Introduction
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">

              <strong>
              Notes Maker is a simple and easy-to-use notes app </strong> that allows you to create, edit, and delete notes. You can also log in and out of the app, and your notes will be saved even when you log out.
                <br /><br />
                I created Notes Maker to offer everyone a simple, convenient way to track thoughts and ideas. Our goal was to develop an app that is both user-friendly and robust, promoting organization and productivity.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Features
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            <strong>Notes Maker offers a variety of features to help you stay organized, including:</strong>
              <li>
              The ability to create, edit, and delete notes
              </li>
              <li>The ability to organize your notes in HomePage</li>
              <li> The ability to password protect your account</li>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
