import { Helmet } from "react-helmet-async";

export default function CompleteScreen() {
    return (
        <div>
            <Helmet>
                <title>Complete</title>
            </Helmet>
            <h1>Completed Purchase!</h1>
        </div>
    )
}