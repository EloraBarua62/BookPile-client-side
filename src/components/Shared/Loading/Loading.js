import React from 'react';

const Loading = () => {
    return (
        <div>
            <div class="spinner-grow inline-block w-20 h-20 bg-current rounded-full opacity-0 text-amber-700" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;