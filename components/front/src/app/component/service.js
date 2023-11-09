"use client"

import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';
import Serviceview from "./serviceview"
import { Box, Modal, Typography } from '@mui/material';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,

};

function Product() {
    const [profiledata, setprofiledata] = useState('');
    const [cusid, setcusid] = useState('');
    const [openmodal, setopenmodal] = useState(false);

    const [productid, setproductid] = useState('');

    useEffect(async () => {
        const getProfile = async (a) => {

            const response = await fetch('https://www.laabamone.com/Lobsmart/api.php?eventtype=lob_Getprofile&profileid=' + a);
            const json = await response.json();
            console.log('res', json);
            setprofiledata(json);
            setname(json[0].name);
            setlname(json[0].lname);
            // setorgtypeval(json[0].orgtype);
            //  setjobtitval(json[0].jobtitle);
            setpostcode(json[0].postcode);
            setcity(json[0].city);
            setstate(json[0].state);
            setadd1(json[0].flat)
            setadd2(json[0].street);
            setcountryval(json[0].country);
            setlandmark(json[0].landmark);
            setemail(json[0].email);
            setphone(json[0].mobile);
            setphonew(json[0].phonew);
            setphonep(json[0].phonep);
            setphonewhat(json[0].phonewhat);
            setdesignation(json[0].designation);
            setCreateObjectURL(base64_decode(json[0].proimage))
            setCreateObjectURL_pimage(json[0].pimage)
            setCreateObjectURL_simage(json[0].simage)
            setstatus(json[0].status)
            setfb(json[0].fb);
            settwitter(json[0].twitter);
            setlinkedin(json[0].linkedin);
            setyoutube(json[0].youtube);
            setinsta(json[0].insta);
            setaboutcontent(json[0].aboutcontent);
            setreferrer(json[0].referrer);
            setpname(json[0].pname);
            setpdescription(json[0].pdescription);
            setplink(json[0].plink);
            setsname(json[0].sname);
            setsdescription(json[0].sdescription);
            setslink(json[0].slink);
            setwebsite(json[0].website);
            setorg(json[0].org);
            settype(json[0].type);
            if (json[0].type == 'p') {
                setpageurl("https://www.lobsmartcard.me/p/")
            }
            if (json[0].type == 'b') {
                setpageurl("https://www.lobsmartcard.me/b/")
            }
            setp_uniqueid(json[0].uriid)
        }
        let cus1id = localStorage.getItem("LOGIN_USER_ID");

        if (cus1id != null && cus1id != undefined && cus1id != '') {
            setcusid(cus1id);
            getProfile(cus1id);



        }
    }, [])
    const seteditid = (a, b) => {
        setcusid(a)
        setproductid(b);
        setopenmodal(true);
    }
    const deleteProduct = (a) => {

    }
    const getProfile = async () => {
        let a = localStorage.getItem("LOGIN_USER_ID");
        const response = await fetch('https://www.laabamone.com/Lobsmart/api.php?eventtype=lob_Getprofile&profileid=' + a);
        const json = await response.json();
        console.log('res', json);
        setprofiledata(json);
        setname(json[0].name);
        setlname(json[0].lname);
        // setorgtypeval(json[0].orgtype);
        //  setjobtitval(json[0].jobtitle);
        setpostcode(json[0].postcode);
        setcity(json[0].city);
        setstate(json[0].state);
        setadd1(json[0].flat)
        setadd2(json[0].street);
        setcountryval(json[0].country);
        setlandmark(json[0].landmark);
        setemail(json[0].email);
        setphone(json[0].mobile);
        setphonew(json[0].phonew);
        setphonep(json[0].phonep);
        setphonewhat(json[0].phonewhat);
        setdesignation(json[0].designation);
        setCreateObjectURL(base64_decode(json[0].proimage))
        setCreateObjectURL_pimage(json[0].pimage)
        setCreateObjectURL_simage(json[0].simage)
        setstatus(json[0].status)
        setfb(json[0].fb);
        settwitter(json[0].twitter);
        setlinkedin(json[0].linkedin);
        setyoutube(json[0].youtube);
        setinsta(json[0].insta);
        setaboutcontent(json[0].aboutcontent);
        setreferrer(json[0].referrer);
        setpname(json[0].pname);
        setpdescription(json[0].pdescription);
        setplink(json[0].plink);
        setsname(json[0].sname);
        setsdescription(json[0].sdescription);
        setslink(json[0].slink);
        setwebsite(json[0].website);
        setorg(json[0].org);
        settype(json[0].type);
        if (json[0].type == 'p') {
            setpageurl("https://www.lobsmartcard.me/p/")
        }
        if (json[0].type == 'b') {
            setpageurl("https://www.lobsmartcard.me/b/")
        }
        setp_uniqueid(json[0].uriid)
    }
    return (
        <>
            <Modal
                open={openmodal}
                onClose={() => { setopenmodal(false), getProfile() }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box style={{ px: 4, mt: 2, maxHeight: "80vh", overflowY: "auto" }}>
                        <Serviceview cusid={cusid} productid={productid} />
                    </Box>
                </Box>
            </Modal>
            <section className="compare__section ralt bgadd ">
                <div className="container">
                    <div className="additional__info mt-40 bgwhite round16">

                        <h5 className="title addi__head round16">
                            Service
                            <span style={{ float: 'right', cursor: 'pointer' }} onClick={() => setopenmodal(true)}>
                                <i className="material-symbols-outlined base">
                                    add
                                </i>&nbsp;
                            </span>
                        </h5>

                        <div className="table__here">
                            <table className="table">
                                <thead>
                                    <tr >

                                        <td className="fz-16 fw-600 inter ttile">
                                            S.no
                                        </td>
                                        <td className="fz-16 fw-600 inter ttile">
                                            Service Name
                                        </td>
                                        <td className="fz-16 fw-600 inter ttile">
                                            Action
                                        </td>

                                    </tr>
                                </thead>
                                <tbody>
                                    {profiledata.length > 0 &&


                                        profiledata[0].servicedetails.map((res, a) => res.id != undefined ?
                                            <tr>
                                                <td className="fz-16  inter ttile">
                                                    {res.sno}
                                                </td>
                                                <td className="fz-16  inter ttile">
                                                    {res.name}
                                                </td>
                                                <td>
                                                    <span style={{ cursor: 'pointer' }} onClick={() => seteditid(profiledata[0].id, res.id)}>
                                                        <i className="material-symbols-outlined base" >
                                                            edit
                                                        </i></span>&nbsp;
                                                    <span style={{ cursor: 'pointer' }} onClick={() => deleteProduct(res.id)}>
                                                        <i className="material-symbols-outlined base2" >
                                                            close
                                                        </i></span>
                                                </td>

                                            </tr>
                                            :
                                            <tr>
                                                <td colSpan={6} align='center'>No Product Available.</td>
                                            </tr>
                                        )}



                                </tbody>
                            </table>
                        </div>
                    </div></div>
            </section>
        </>
    );
}
export default Product