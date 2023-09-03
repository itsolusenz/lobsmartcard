"use client";
//import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from './Footer';
// import { ThemeProvider } from 'the-theme-library';
// import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useEffect, useState, useRef } from 'react';

// import './App.css'; // Import your CSS file if needed

function Contact() {
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [mess, setmess] = useState('');

    const [succ, setsucc] = useState('');

    const saveQry = async () => {
        alert();
        let str = '';
        fetch(
            'http://www.laabamone.com/Lobsmart/api.php?eventtype=lob_addcontact&name='
            + str + '&name=' + name + '&message=' + mess + '&email=' + email
        )
            .then((res) => res.json())
            .then(
                (result) => {
                    console.log('yes1', result);
                    const mes = result[0].success;
                    if (mes == 'success') {

                        setsucc('Contact form submitted successfully....Admin contact you soon...')
                        /* AsyncStorage.setItem('Profileid', result[0].id);
                         AsyncStorage.setItem('signupotp', result[0].otp);
                         setprofileid(result[0].id);
                         setpageview('2')
                         setIsLoading(false);*/
                    }
                    else {
                        setsucc();
                    }

                },
                (error) => {
                    console.log('no');
                    console.log(error);
                    setIsLoading(false);
                    alert('Error.Please Try again later');
                    setpageview('1');

                }
            );
    }



    return (
        <>
            <div className='mains' style={{ backgroundColor: "white" }}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h2 className='hr-lines' style={{ color: "black" }}>Contact</h2>
                        </div>
                    </div>
                </div>
                <div className='space'></div>
                <div className='container'>

                    <div className='row'>

                    </div>
                    <div className='row' >
                        <div className='col-md-6 sm-btm'>
                            <div className='bg-color-3' style={{ color: "white", padding: "4%" }}>
                                <div className='row'>
                                    <div className='col-md-2 pt-3 ps-4'>
                                        <i className="bi bi-telephone-fill p"></i>
                                    </div>
                                    <div className='col-md-10'>
                                        <h5 className='pt-3 head-5' >Phone:</h5>
                                        <p className='p' >9867543421</p>
                                        <p className='p' >9978565434</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 sm-btm' >
                            <div className='bg-color-2' style={{ padding: "4%" }}>
                                <div className='row'>
                                    <div className='col-md-2 pt-3 ps-4'>
                                        <i className="bi bi-envelope-fill text-color-dark"></i>
                                    </div>
                                    <div className='col-md-10'>
                                        <h5 className='pt-3 head-5'>Email:</h5>
                                        <p className='' style={{ color: "#657286" }}>demo@gmail.com</p>
                                        <p className='' style={{ color: "#657286" }}>demo1@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />

                    <div className='contact-pg p-5'>
                        <div className='row' >
                            <div className='col-md-12 sm-btm' >
                                <div className='pt-3' >
                                    <div className='container'></div>
                                    <div className='row'>
                                        <div className='col-md-9'>
                                            <p className='fs-3'>I'm always open to discussing product
                                                <p className='head-5'>design work or partnerships.</p></p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <form onSubmit={saveQry}>
                                            <p>{succ}</p>
                                            <div className='col-md-6'>

                                                <input type="text" placeholder="Name*" value={name} onChange={(e) => setname(e.target.value)} className='input-line pt-4' required />

                                                <input type="email" placeholder="Email*" value={email} onChange={(e) => setemail(e.target.value)} className='input-line pt-5' required />

                                                <input type='message' placeholder="Message*" value={mess} onChange={(e) => setmess(e.target.value)} className='input-line pt-5' required />
                                                <div className='pt-4'>
                                                    <button type="submit" className='btn-mary'>Submit</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
            <Footer />


            {/* <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
          <Footer/>
          </div>
          
        </div>
        </div> */}
        </>
    )
}

export default Contact