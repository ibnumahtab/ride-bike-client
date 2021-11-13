import { useEffect, useState } from "react";

const useReviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("https://morning-ridge-85275.herokuapp.com/reviews/")
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);
    return [reviews];
};
export default useReviews;
