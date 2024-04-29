const Daftar = ({DaftarBuku, DaftarBuku2, children}) => {
    return ( 
        <>
        {children}
        <h2>DAFTAR BUKU PELAJARAN</h2>
        <ol>
            {DaftarBuku.map((name, index) =>(
                <li key={index}>
                    <p>{name}</p>
                </li>
            ))}
        </ol>
        <hr/>
        <h2>DAFTAR BUKU</h2>
        <ol>
            {DaftarBuku2.map((number, index) =>(
                <li key={index}>
                    <p>{number}</p>
                </li>
            ))}
        </ol>
        </>
     );
}
 
export default Daftar;