function Props(props) {
    const {name, number, siswa} = props.DaftarSiswa;
    return ( 
        <>
        {siswa ?
            <div>
                <p>Nama : {name}</p>
                <p>Kelas: {number}</p>
            </div> :
        <p>Anda Belum Mengimbalikan Buku</p>}
        </>
     );
}

export default Props;