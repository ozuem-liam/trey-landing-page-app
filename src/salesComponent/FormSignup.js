import React from 'react';
import useForm from './useForm';
import validate from './validate';
import '../Form.css';

const FormSignup = ({submitForm}) => {
    const {handleSubmit, handleChange, values, errors} 
    = useForm(
        submitForm,
        validate
        );

        
    return (
        <div>
            
            <form className="form" onSubmit={handleSubmit}>
                <h1>
                    Get started with us today!
                    Send us a message and we 
                    will reply in 48hrs.
                </h1>
                <div className="form-inputs">
                    <label htmlFor="name"
                    className="form-label">
                        Full Name
                    </label>
                    <input
                    id="name"
                    type="text"
                    name="name"
                    className="form-input"
                    placeholder="Enter your name"
                    value={values.name}
                    onChange={handleChange}
                    />
                    {errors.name && <p>{errors.name}</p>}
                </div>

                <div className="form-inputs">
                    <label htmlFor="email"
                    className="form-label">
                        Email
                    </label>
                    <input
                    id="email"
                    type="email"
                    name="email"
                    className="form-input"
                    placeholder="Enter your email"
                    value={values.email}
                    onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>

                <div className="form-inputs">
                    <label htmlFor="number"
                    className="form-label">
                        Enter your number
                    </label>
                    <input
                    id="number"
                    type="number"
                    name="number"
                    className="form-input"
                    placeholder="Enter your number"
                    value={values.number}
                    onChange={handleChange}
                    />
                    {errors.number && <p>{errors.number}</p>}
                </div>

                {/* <div className="form-inputs">
                    <label htmlFor="text"
                    className="form-label">
                        Enter your request
                    </label>
                    <textarea
                    id="comment"
                    type="comment"
                    name="comment"
                    className="form-input"
                    placeholder="Enter your request"
                    onChange={handleChange}
                    />
                </div> */}

                <button className="form-input-btn"
                type="submit">
                    Submit
                </button>
            </form>

        </div>
    )
}

export default FormSignup
