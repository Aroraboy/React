

function Button() {

    // let count = 0;
    //     const handleClick= (name) => {
    //         if(count < 3){
    //             count++;
    //             console.log(`${name} clicked me ${count} time/s`)

    //         }else{
    //             console.log(`No more clicks allowed, ${name}`)
    //         }
    //     }

    const handleClick = (e) => e.target.textContent = "Clicked!";
        
       
        const styles = {
            
            backgroundColor: "hsl(200, 100%, 50%)",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer"

        }
        return(
        <button onClick={(e) => handleClick(e)} style={styles}>Click me</button>
    );
}

export default Button;