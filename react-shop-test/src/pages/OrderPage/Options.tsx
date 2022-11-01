interface OptionInterface {
    name: string;
}
const Options = ({name}: OptionInterface) => {
    return (
        <>
            <form>
                <input type="checkbox" id={`${name} option`} />
                {""}
                <label htmlFor={`${name} option`}>{name}</label>
            </form>
        </>
    );
};
export default Options;
