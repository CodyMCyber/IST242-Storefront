function ClickMe(props) {
    let counter = 0;

    const increaseCounter = () => {
        counter += 1;
        console.log(counter)
    };

    return (
        <div>
            <h4>You clicked {counter} times</h4>
            <button onClick={increaseCounter}>Click me</button>
        </div>
    );
}

export default ClickMe;