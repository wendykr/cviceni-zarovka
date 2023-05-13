export const Bulb = (props) => {

    const element = document.createElement('div');
    element.classList.add('bulb');

    if (props.isOn) {
        element.classList.add('bulb--on');
    }

    element.addEventListener('click', () => {
        element.replaceWith(Bulb({
            isOn: !props.isOn,
        }

        ));
    });

    return element;
}