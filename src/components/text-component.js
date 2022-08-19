import { useEffect, useState } from "react"

export default function TextComponent(){
    const [emailInput, setEmailInput] = useState({ email: ''});
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    const changeHandler = (e) => {
        const {name, value} = e.target;
        setEmailInput(
            {
                ...emailInput,
                [name]: value
            });
    }

    const validateEmail = (value) => {
        const error = {};

        if(!value.email){
            error.email = "An email is required";
        } else if(!emailRegex.test(value.email)) {
            error.email = "Please provide a valid email address"
        } 
        return error;
    }   

    const submitHandler = (e) => {
        e.preventDefault();
        if(emailRegex.test(emailInput.email)){
            alert(`We'll send an email to ${emailInput.email}`);
            setEmailInput({ email: ''})
        }
        setFormErrors(validateEmail(emailInput));
        setIsSubmitted(true);
    }

    useEffect(() => {
        if(Object.keys(emailInput).length === 0 && isSubmitted){
            console.log(emailInput)
        }
    }, [emailInput, isSubmitted])

    return (
        <section className="text">
            <img src="/images/logo.svg" alt="" />
            <div>
                <h1>We are launching <span>soon!</span></h1>
                <p>Subscribe and get notified</p>
            </div>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder="Your email address..." value={emailInput.email} name="email" onChange={changeHandler} className={formErrors.email ? 'inputError' : ''}/>
                {<span className="error">{formErrors.email}</span>}
                <button>Notify Me</button>
            </form>
        </section>
    )
}