import React, { useState } from 'react';
import AlertComp from './AlertComp';
import FormComp from './FormComp';

const Reservasi = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleClick = () => {
    setShowAlert(true);
  };

  return (
    <div className="formulir" id='reservasi'>
      <div className="formindex">
        <div className="formisi">
          <FormComp textform="Masukan Nama Anda" />
        </div>
        <div className="formisi">
          <FormComp textform="Masukan No.Hp Anda" />
        </div>
        <div className="formisi">
          <FormComp textform="Masukan Alamat Rumah Anda" />
        </div>
        <div className="formisi">
          <FormComp textform="Masukan Merk dan Tipe Hp Anda" />
        </div>
      </div>
      <button className='btn btn-primary' id='tombol-reservasi' onClick={handleClick}>
        Tambahkan
      </button>

      {showAlert && <AlertComp />}
    </div>
  );
};

export default Reservasi;