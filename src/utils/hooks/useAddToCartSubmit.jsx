import { useState } from 'react'

const useAddToCartSubmit = () => {
    const [formData, setFormData] = useState()

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if(formData)
            console.log(formData)
    }

    return {handleChange, handleSubmit}
}

export default useAddToCartSubmit