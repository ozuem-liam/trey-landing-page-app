import React, { useState } from 'react'
import FormSignup from './FormSignup';

const CopyForm = () => { 
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }

    return (
        <div>
            {!isSubmitted ? <FormSignup submitForm
            ={submitForm} /> : <FormSignup />}
        </div>
    )
}

export default CopyForm
