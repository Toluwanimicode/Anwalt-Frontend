import React, { useState } from 'react'
import "./Footer.css"

const Footer = () => {

const [formData, setFormData] = useState({
    email: "",
    message: ""
})

const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })
}

const handleSubmit = async (e) => {
    e.preventDefault()

    try {

        const response = await fetch(
            "http://localhost:5000/submit-form",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            }
        )

        const data = await response.json()

        alert(data.message)

        // Clear form after successful submit
        setFormData({
            email:"",
            message:""
        })

    } catch(error){
        console.log(error)
    }
}

return (
<div>

<div className='footer-section'>

<div className='FooterSection-1'>
    <div>
        <h1>Law Office</h1>
        <p>
            Lorem Ipsn gravida aliquet. Aenean solici, lorem quis biben auci elit ipsu sem nibh id elit Phasellus vive varius laet.Quisque rutrum.Aenean imperdiet. Etiam ultrices. Aenean solici, lorem quis biben auci
        </p>
    </div>
</div>

<div className='FooterSection-2'>
    <h3>Latest news</h3>
</div>

<div className='FooterSection-3'>
    <h3>Usual questions</h3>
    <ul>
        <li>How can I protct myself ?</li>
        <li>Can I divorce without a lawyer ?</li>
        <li>Do I need a personal lawyer ?</li>
        <li>If hourly, what is the hourly fees ?</li>
        <li>is there a cap on fees ?</li>
        <li>Are you licensed in my country ?</li>
    </ul>
</div>

<div className='FooterSection-4'>
    <h3>Emergency Contact</h3>

    <form
        className="contact-form"
        onSubmit={handleSubmit}
    >

        <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
        />

        <textarea
            name="message"
            placeholder="Message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
        />

        <button type="submit">
            Send
        </button>

    </form>

</div>

</div>

</div>
)
}

export default Footer