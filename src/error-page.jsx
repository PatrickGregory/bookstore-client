import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="bg-gray-300 text-2xl flex justify-center text-center h-screen" id="error-page">
            <div className="shadow w-1/2 p-20 text-red-700 h-1/2 mt-24">
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </div>
    );
}