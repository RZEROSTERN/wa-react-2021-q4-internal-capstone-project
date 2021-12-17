import { useState } from "react";
import { useHistory } from "react-router-dom";

const useSearchSubmit = () => {
    const [formData, setFormData] = useState()
    const history = useHistory()

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if(formData)
            history.push('/search/' + formData.searchTerm)
        else
            alert("Debes ingresar un término")
    }

    return { handleChange, handleSubmit }
}

export default useSearchSubmit