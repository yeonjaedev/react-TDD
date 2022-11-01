type propsType = {
    name: string;
    imagePath: string;
};
const Products = ({name, imagePath}: propsType) => {
    return (
        <div style={{textAlign: "center"}}>
            <p>{name}</p>
            <img style={{width: "75%"}} src={`http://localhost:4000/${imagePath}`} alt={`${name} Product`} />
            <form style={{marginTop: 10}}>
                <label style={{textAlign: "right"}}>{name}</label>
                <input style={{marginLeft: 10}}></input>
            </form>
        </div>
    );
};
export default Products;
