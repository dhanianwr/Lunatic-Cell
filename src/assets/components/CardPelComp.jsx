import { bottom } from "@popperjs/core";

const Cardpel = (props) => {
    return(

          <div className="card" id="card-pelanggan-isi">
            <div className="card-header">
            {props.atribut.nama}
            </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{props.atribut.alamat}</li>
            <li className="list-group-item">{props.atribut.nohp}</li>
            <li className="list-group-item">{props.atribut.merk}</li>
          </ul>
          </div>
          

);
  }

export default Cardpel;