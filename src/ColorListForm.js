import { useState } from "react";

const ColorListForm = ({ colorsList }) => {
    const [selectedColor, setSelectedColor] = useState(colorsList[0])

    const handleColorChange = (e) => {
        setSelectedColor(e.target.value)
    }

    document.documentElement.style.setProperty('--bc-color', selectedColor)
    
    return (
        <>
            <div>
                <p className="rectangle"></p>
                <form className="formList">
                    <label htmlFor="colorListForm">
                        Wybierz kolor z listy:
                    </label>
                    <select value={selectedColor} onChange={handleColorChange}>
                        {colorsList.map((color, index) => (
                            <option key={index} value={color}>{color}
                            </option>
                        ))}    
                    </select>        
                </form>
            </div>
        </>
    )
}

export default ColorListForm;