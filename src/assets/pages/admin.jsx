import Cardpel from "../components/CardPelComp"
import { useState } from 'react'
import Footer from "../components/FooterComp"

const AdminPage = () => {

    const [atribut,setAtribut] = useState ([
  
      {
          "nama" : "Hardi",
          "alamat" : "jl.patimura",
          "nohp" : "0812345678",
          "merk" : "Mi 13 Pro"
      }])
  
    const [nama, setNama] = useState ('')
    const [alamat, setAlamat] = useState ('')
    const [nohp, setNohp] = useState ('')
    const [merk, setMerk] = useState ('')
  
    const tambahPelanggan = () => {
  
      setAtribut([...atribut, {"nama":nama, "alamat":alamat, "nohp":nohp, "merk":merk}])
  
    }
  
  return (
  
    <>
  
      <h2 id="title-admin">Selamat Datang di Halaman Admin</h2>
      <br></br>
      <div className="mx-auto" style={{width : 800}}>
          <input className="form-control my-3" type="text" placeholder="Nama" aria-label="default input example" value={nama} 
            onChange={(e)=>(setNama(e.target.value))} />
          <input className="form-control my-3" type="text" placeholder="Alamat" aria-label="default input example" value={alamat} 
            onChange={(e)=>(setAlamat(e.target.value))} />
          <input className="form-control my-3" type="text" placeholder="No. Handphone" aria-label="default input example" value={nohp} 
           onChange={(e)=>(setNohp(e.target.value))} />
          <input className="form-control my-3" type="text" placeholder="Merk dan Tipe Handphone" aria-label="default input example" value={merk} 
           onChange={(e)=>(setMerk(e.target.value))} />
      </div>
  
      <br></br>
  
      <div className="mx-auto" id="tombol-admin">
      <button type="button" class="btn btn-primary btn-lg" onClick={tambahPelanggan}>
        Submit
      </button>
      </div>
  
      <br></br>
    <h1 id="semua-data">SEMUA DATA PELANGGAN</h1>
         
            <div className="container" id="card-pelanggang">
                {atribut.map((attr, idx)=>(
                <Cardpel atribut = {attr} />
              ))}  
            </div>
                    
    <Footer/>
      
    </>
  
    
  );
  
  }
  
  export default AdminPage;