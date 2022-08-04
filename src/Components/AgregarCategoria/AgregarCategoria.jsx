import React, { useState } from 'react';

const AgregarCategoria = () => {
    return (
        <>
            <div className="container">
                <form className='d-flex justify-content-center'>
                    <div className='my-4'>
                        <label className='text-light' htmlFor="nombre">Nombre</label>
                        <input maxLength={20} className={`ms-3`} type="text" id='nombre' name='nombre' placeholder='Ej: Accion' required />
                    </div>
                </form>
            </div>
        </>
    )
}

export default AgregarCategoria