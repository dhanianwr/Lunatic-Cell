import React from 'react'
import '../../app.css'
import NavbarComp from '../components/NavbarComp'
import CoverComp from '../components/CoverComp'
import CardComp from '../components/CardComp'
import Reservasi from '../components/Reservasi'
import Footer from '../components/FooterComp'


const LandingPage = () => {
  
    return (
    <>
    <NavbarComp />

    <div className="content">
      <CoverComp/>
    </div>
    
    <div className="container">
      <h1 id='tentang'>Tentang Kami</h1>
    <div className="konten-card">
      <div className="row">
        <div className="col 4">
          <CardComp 
            img = "../image/kurir.jpg"
            title = "Bisa Antar Jemput"
            text = "Jika anda tidak punya waktu untuk mengantar handphone anda ke outlet kami, jangan khawatir. Kami memiliki layanan Antar Jemput Untuk Radius 20KM dari Outlet kami" />
        </div>
        <div className="col 4">
          <CardComp
            img = "../image/jempol.jpg"
            title = "Pelayanan Yang Ramah"
            text = "Kami sangat mengutamakan kenyamanan costumer kami. Pelayan kami telah terverifikasi secara internal untuk menangani masalah pada handphone anda ataupun berkonsultasi" />
        </div>
        <div className="col 4">
          <CardComp
            img = "../image/waktu.jpg"
            title = "Cepat dan Tanggap"
            text = "Time is Money. bagi kami, waktu sangat berharga bagi kami. Kami berusaha semaksimal mungkin agar layanan untuk memperbaiki Handphone anda secepat mungkin agar dapat anda gunakan" />
        </div>
      </div>
    </div>
    </div>

    <div className="peta">
    <div className="container">
   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d339.09072061367!2d114.371890660694!3d-8.224076019140332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd15ad21d3d092f%3A0x8076a96412f6e059!2sService%20HP%20%22%20ZIE%20CELL%20%22!5e0!3m2!1sid!2sid!4v1688801604039!5m2!1sid!2sid" width={1048} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
    </div>
    </div>

    <div className="container">
      <h1 id='text-reservasi'>Silahkan Isi Form Dibawah Ini</h1>
      <div className="formreservasi">
        <Reservasi/>
      </div>
    </div>

      <Footer/>
    
              
    </>

  )
}

export default LandingPage;