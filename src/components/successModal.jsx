import React from "react";

const SuccessModal = ({setShowModal, aiToolName, specName, domainName}) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-white p-2 rounded">
                <h1 className="text-Text-Black font-Lato text-2xl font-bold leading-normal tracking-tight">Hurray!!</h1>
                <p>You have generated you personal Ai tool your AI tool is <b>{aiToolName}</b> in the domain<b>{domainName}</b> and its spcifications are <b>{specName}</b></p>
                <button onClick={() => {setShowModal(false)}}>close</button>
            </div>
        </div>
    )
}

export default SuccessModal 