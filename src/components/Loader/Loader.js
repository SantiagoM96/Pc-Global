import { SuperBalls } from "@uiball/loaders";


const Loader = () => {
    return (
        <div className="loader">
            <SuperBalls size={45} speed={1.4} color="var(--primary-color)" />
        </div>
    )
}

export default Loader