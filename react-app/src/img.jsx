
function Img() {
    const imageUrl = './src/assets/certificate_fundoo.jpg'

    const handleClick = (e) => e.target.style.display = "none";

    return(<img onClick={(e) => handleClick(e)} src={imageUrl} alt="Certificate Fundoo" />)
}

export default Img