const baseStyles = "rounded-lg bg-gray-400";

const Loading = () => {
    return (
        <div className="animate-pulse">
            <div
                className={`${baseStyles} flex-none max-w-96 h-16 mb-12`}
            ></div>
            <div className="mx-auto max-w-8xl flex flex-row gap-6 flex-1">
                <div className="flex-1">
                    <div className={`${baseStyles} aspect-video`}></div>
                </div>
                <div className="flex-1 space-y-6">
                    <div className={`${baseStyles} max-w-lg h-10`}></div>
                    <div className={`${baseStyles} max-w-80 h-8`}></div>
                    <div className={`${baseStyles} max-w-md h-8`}></div>
                    <div className={`${baseStyles} max-w-sm h-8`}></div>
                </div>
            </div>
        </div>
    );
};

export default Loading;
