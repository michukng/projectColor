import Color from "./ClassColor";
import validateColor from "validate-color";
import { useEffect, useState } from "react";

const ColorForm = ({ color, setColor, colorsList, setColorsList }) => {

    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        const checkColor = validateColor(color)
        setIsValid(checkColor)
    }, [color])

    const handleAddColor = (e) => {
        e.preventDefault()
        setColor('');
        const newColor = new Color(color.toUpperCase(), color.toUpperCase())
        const checkColor = validateColor(newColor.name)
        if (colorsList.includes(newColor.name)) {
            alert("Taki kolor już znajduje się w liście")
            return
        }
        if (checkColor) {
            const newColorsList = [...colorsList, newColor.name];
            setColorsList(newColorsList.sort());
            localStorage.setItem('COLORS', JSON.stringify(newColorsList));
        }
    }

    const regExp = (inputValue) => {
        return inputValue.replace(/[^A-Fa-f0-9#]|(?<!^)#/g, '').slice(0, 7);
    }    

    return (
        <>                    
            <form className="form">
                <label htmlFor="ColorForm">
                    Dodaj kolor do listy:
                </label>
                <input 
                    type="text"
                    maxLength={7}
                    value={color}
                    onChange={(e) => setColor(regExp(e.target.value))}
                />
                <button type="submit" disabled={!isValid} onClick={(e) => handleAddColor(e)}>{isValid && <p>Dodaj kolor</p>}</button>
            </form>
        </>
    )
}

export default ColorForm;