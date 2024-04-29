import Props from "../Componen/Props";
import Daftar from "../Componen/Daftar";
import Button from "../Componen/Button";
import Navbar from "../Componen/Navbar";
import Layout from "../Componen/Layout";
import React from "react";
import { useNavigate } from "react-router-dom";

const IndukProps = () => {
    const navigate = useNavigate();
    const name = "jibran";
    const number = 10;

    const DaftarBuku = ["BUKU IPA",
                        "BUKU IPS", 
                        "BUKU PENJAS"]
    const DaftarBuku2 = ["BUKU NOVEL",
                        "BUKU CERITA", 
                        "BUKU MTK"]
    
    const DaftarSiswa = {"name" : "JIBRAN",
                        "number" : 10,
                        "siswa" : true}
    const DaftarSiswa2 = {"name" : "UMAM",
                        "number" : 10,
                        "siswa" : false}
    const DaftarSiswa3 = {"name" : "MAKHRUF",
                        "number" : 10,
                        "siswa" : true}
    function handleClik(){
        alert ('data anda telah berhasil disimpan !!!')
    }
    return ( 
        <> 
        <Layout>
            <h1 className="text-3xl font-bold underline text-orange-500">Hello world!</h1>
        <div className="mx-8">
        <Daftar DaftarBuku={DaftarBuku} DaftarBuku2={DaftarBuku2}/>
        <p>ini menggunakan children</p>
        </div>
        <hr/>
        <Props DaftarSiswa={DaftarSiswa}/>
        <hr/>
        <Props DaftarSiswa={DaftarSiswa2}/>
        <hr/>
        <Props DaftarSiswa={DaftarSiswa3}/>
        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
             onClick={() => navigate("/")}> <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
             kembali ke halaman home
             </span>
            </button>
        </Layout>
            {/*<Props 
            name={name}
            number={number}
            siswa={true}/>
            <hr/>
            <Props 
            name="JIBRAN"
            number={10}
    siswa={true}/>*/}
        </>
    );
}
 
export default IndukProps;