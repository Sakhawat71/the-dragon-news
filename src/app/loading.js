export const metadata = {
    title: 'Next.js | Loading',
    description: 'this is Loading page for my next.js app'
}

const LoadingPage = () => {

    return (
        <div className="flex mx-auto justify-center h-screen items-center">
            <span className="loading loading-infinity loading-lg"></span>
        </div>
    );
};

export default LoadingPage;