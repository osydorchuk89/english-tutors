export const useNavButtons = ({ event, reviewSlice, setReviewSlice }) => {
    const handlePresButton = () => {
        console.log(event.target);
        const buttonUpPressed = ["button-up", "svg-up", "path-up"].includes(
            event.target.id
        );
        const buttonDownPressed = [
            "button-down",
            "svg-down",
            "path-down",
        ].includes(event.target.id);
        let newReviewSlice = [];

        if (buttonUpPressed) {
            setReviewSlice((prevSlice) => prevSlice.map((index) => index - 1));
            newReviewSlice = reviewSlice.map((index) => index - 1);
        }

        if (buttonDownPressed) {
            setReviewSlice((prevSlice) => prevSlice.map((index) => index + 1));
            newReviewSlice = reviewSlice.map((index) => index + 1);
        }

        console.log(reviewSlice);

        if (newReviewSlice[0] === 0) {
            setButtonDisabled((prevState) => ({
                ...prevState,
                buttonUp: true,
            }));
        } else {
            setButtonDisabled((prevState) => ({
                ...prevState,
                buttonUp: false,
            }));
        }

        if (newReviewSlice[1] === reviews.length) {
            setButtonDisabled((prevState) => ({
                ...prevState,
                buttonDown: true,
            }));
        } else {
            setButtonDisabled((prevState) => ({
                ...prevState,
                buttonDown: false,
            }));
        }
    };
    return handlePresButton;
};
