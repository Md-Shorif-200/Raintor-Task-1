import React from 'react';

const ReusableIcon = ({icon,colour}) => {
    return (
        <div>
             <div className= {`icon w-[38px] h-[38px] flex justify-center items-center  text-${colour}  border border-${colour} rounded-full`}>
                                      
                                </div>
        </div>
    );
};

export default ReusableIcon;