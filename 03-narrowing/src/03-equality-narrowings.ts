interface Container {
    value: number | null | undefined
}

function mulitplyValue (container: Container, factor: number) {
    if (container.value != null) {
        console.log(container.value);
        container.value *= factor;
    }
}

// mulitplyValue({value : 5}, 6);
mulitplyValue({value : undefined}, 6);

export default {}