
const FirstSection = ({num, setNum}) => {
    // const {num, setNum} = props;

    const numChange = () => {
        setNum(num + 1)
        console.log(num);
    }
    return (
        <div>
            <h1>Hello react 2</h1>
            <button onClick={numChange}>+</button>
        </div>
    );
}

export default FirstSection;
