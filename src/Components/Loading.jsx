import React from 'react';

const Loading = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="relative h-12 w-12">
                <div className="absolute inset-0 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div>
            </div>
        </div>

    );
};

export default Loading;