import React from 'react';

const Loading = () => {
    return (
        <div>
            {/* <div class="spinner-grow inline-block w-20 h-20 bg-current rounded-full opacity-0 text-amber-700" role="status">
                <span class="visually-hidden">Loading...</span>
            </div> */}
            <div>
                <div style="border-top-color:transparent"
                    class="w-16 h-16 border-4 border-amber-500 border-solid rounded-full animate-spin"></div>
            </div>
        </div>
    );
};

export default Loading;