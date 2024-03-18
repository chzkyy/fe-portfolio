import "./loading.css";

const Loading = () => {
    return (
        <div className="bg-loading">
            <div className="loader">
                <div className="loader--dot" />
                <div className="loader--dot" />
                <div className="loader--dot" />
                <div className="loader--dot" />
                <div className="loader--dot" />
                <div className="loader--dot" />
                <div className="loader--text" />
            </div>
        </div>
    );
};
export default Loading;
