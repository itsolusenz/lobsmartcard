"use client"
import React, { Fragment, useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { Card, TextField, Container, Row, Col, FormControl, InputLabel, Select, MenuItem, FormHelperText, Alert, TableBody, Table } from '@mui/material';
import axios from 'axios';
import Autocomplete from '@mui/material/Autocomplete';
//import { useParams } from "react-router-dom";
import InputAdornment from '@mui/material/InputAdornment';
//import jsCookie from 'js-cookie';
//mport { Modal, Button, CardHeader, Col, Container, Row, ModalHeader, ModalBody, Form, FormGroup, Label, ModalFooter } from "reactstrap";
//import Breadcrumb from "../../common/breadcrumb";
//import { ToastContainer, toast } from "react-toastify";
import Input from '@mui/material/Input';
import Item from '../cart/item';

//import Productview from './productview';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import { decode as base64_decode, encode as base64_encode } from 'base-64';


function profile_details() {

    const [Errorval, setErrorval] = useState('');
    const [companyerror, setcompanyerror] = useState('');
    const [inverror, setinverror] = useState('');
    const [countryerror, setcountryerror] = useState('');
    const [stateerror, setstateerror] = useState('');
    const [cityerror, setcityerror] = useState('');
    const [postcodeerror, setpostcodeerror] = useState('');
    const [add1error, setadd1error] = useState('');
    const [add2error, setadd2error] = useState('');
    const [phoneerror, setphoneerror] = useState('');
    const [emailerror, setemailerror] = useState('');
    const [phone, setphone] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [name, setname] = useState('');
    const [lname, setlname] = useState('');
    const [landmark, setlandmark] = useState('');
    const [designation, setdesignation] = useState('');

    const [aboutcontent, setaboutcontent] = useState('');
    const [referrer, setreferrer] = useState('');
    const [website, setwebsite] = useState('');
    const [phonewhat, setphonewhat] = useState('');
    const [phonew, setphonew] = useState('');
    const [phonep, setphonep] = useState('');
    const [org, setorg] = useState('');
    const [insta, setinsta] = useState('');
    const [pname, setpname] = useState('');
    const [pimage, setpImage] = useState([]);
    const [pdescription, setpdescription] = useState('');
    const [plink, setplink] = useState('');
    const [sname, setsname] = useState('');
    const [simage, setsImage] = useState([]);
    const [sdescription, setsdescription] = useState('');
    const [slink, setslink] = useState('');







    const [jobtiterror, setjobtiterror] = useState('');


    const [orgerror, setorgerror] = useState('');
    const [Buttonloader, setButtonloader] = useState('1');

    const [add1, setadd1] = useState('');
    const [add2, setadd2] = useState('');
    const [city, setcity] = useState('');
    const [state, setstate] = useState('');
    const [countryval, setcountryval] = useState('');
    const [postcode, setpostcode] = useState('');

    const [designationerror, setdesignationerror] = useState('');


    const [image, setImage] = useState([]);
    const [createObjectURL, setCreateObjectURL] = useState(null);
    const [createObjectURL_pimage, setCreateObjectURL_pimage] = useState(null);
    const [createObjectURL_simage, setCreateObjectURL_simage] = useState(null);

    const [cusid, setcusid] = useState('');
    const [status, setstatus] = useState('1');
    const [setupcompid, Setsetupcompid] = useState('');
    const [logcomp, setlogcomp] = useState('');
    const [logcompid, setlogcompid] = useState('');
    const [Countrylist, setCountrylist] = useState([]);
    const [setupcompanydata, Setsetupcompanydata] = useState('');
    const [profiledata, setprofiledata] = useState('');
    const [sizeerr, setsizeerr] = useState('');
    const [fb, setfb] = useState('');
    const [twitter, settwitter] = useState('');
    const [linkedin, setlinkedin] = useState('');
    const [youtube, setyoutube] = useState('');
    const [type, settype] = useState('');
    const [pageurl, setpageurl] = useState('');
    const [p_uniqueid, setp_uniqueid] = useState('');
    const [p_uniqueiderr, setp_uniqueiderr] = useState('');
    const [err, seterr] = useState('');
    const [succ, setsucc] = useState('');

    useEffect(async () => {
        // Perform localStorage action

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
        const Getnexturiid = async () => {

            const response = await fetch('https://www.laabamone.com/Lobsmart/api.php?eventtype=getnexturiid');
            const json = await response.json();
            setp_uniqueid(json[0]['newuriid']);
            setpageurl("https://www.lobsmartcard.me/p/")
            settype("p");
        }


        const getCountry = async (a) => {

            const response = await fetch('https://www.laabamone.com/appoint_api.php?eventtype=countylist');
            const json = await response.json();

            // alert(json[0]['usercode']);
            // setcountryval(json[0]['usercode']);
            console.log(json);
            setCountrylist(json);




        }


        let cus1id = localStorage.getItem("LOGIN_USER_ID");
        console.log('---', cus1id);
        if (cus1id != null && cus1id != undefined && cus1id != '') {
            setcusid(cus1id);
            getProfile(cus1id);
            setlogcompid(cus1id);




        }
        else {
            Getnexturiid();

        }


        getCountry();





    }, [])

    const SaveServiceImage = (e) => {
        const SIZE = 20 * 1024;
        if (e.target.files && e.target.files[0]) {

            if (e.target.files[0].size > SIZE) {

                setsizeerr('Product Image Size greater than 20kb');
                // toast.error("Service Image Size greater than 20kb");
                //console.log("file size greater than " + SIZE);
            } else {
                setsizeerr('');
                const i = e.target.files[0];
                setsImage(i);
                console.log(i);
                setCreateObjectURL_simage(URL.createObjectURL(i));
            }

            // registerDocument1('1', i);
        }

    }
    const SaveProductImage = (e) => {
        const SIZE = 20 * 1024;
        if (e.target.files && e.target.files[0]) {

            if (e.target.files[0].size > SIZE) {

                setsizeerr('Product Image Size greater than 20kb');
                // toast.error("Product Image Size greater than 20kb");
                //console.log("file size greater than " + SIZE);
            } else {
                setsizeerr('');
                const i = e.target.files[0];
                setpImage(i);
                console.log(i);
                setCreateObjectURL_pimage(URL.createObjectURL(i));
            }

            // registerDocument1('1', i);
        }

    }
    const saveDocument1 = (e) => {
        const SIZE = 20 * 1024;
        if (e.target.files && e.target.files[0]) {

            if (e.target.files[0].size > SIZE) {
                seterr("Profile Image Size greater than 20kb");

                // setsizeerr('File size greater than 20kb');
                // toast.error("Profile Image Size greater than 20kb");
                //console.log("file size greater than " + SIZE);
            } else {
                setsizeerr('');
                const i = e.target.files[0];
                setImage(i);
                console.log(i);
                setCreateObjectURL(URL.createObjectURL(i));
            }

            // registerDocument1('1', i);
        }

    }
    const registerDocument1 = async (a) => {
        // event.preventDefault();


        //console.log(image.name);
        // console.log(simage.name);
        //  console.log(pimage.name);

        if (image.name != '' && image.name != undefined && image.name != null) {
            setButtonloader('2');
            let url = "https://www.laabamone.com/Lobsmart/api.php"
            const formData = new FormData();
            formData.append('eventtype', 'lob_addprofile_image');
            formData.append('id', a);
            formData.append('image', image);
            let config = {
                headers: {
                    'content-type': 'multipart/form-data',
                },
            };

            axios.post(url, formData, config)
                .then((response) => {

                    console.log('result', response);
                    setButtonloader('1');
                    setsucc("Successfully Added...")
                    // toast.success("Updated Successfully...");

                    // setActiveStep('2');

                })
                .catch((error) => {
                    // toast.success("Error...");
                    setButtonloader('1');
                    console.log({ status: `upload failed ${error}` });
                })
        }


        // toast.success("Updated Successfully...");

        if (cusid != '') {
            window.location.href = "/customer";
        }


    }

    const SaveCompany = () => {
        let error = '0';
        // handleset('2');

        setButtonloader('2');
        if (name != undefined && name != null && name != '') {
            setcompanyerror();
            error = 0;
        }
        else {
            setcompanyerror('Required');
            error = 1;
            setButtonloader(1);
            // return false;


        }

        if (countryval != undefined && countryval != null && countryval != '') {
            setcountryerror();
            error = 0;

        }
        else {
            setcountryerror('Required');
            error = 1;
            setButtonloader(1);
            //return false;

        }
        if (state != undefined && state != null && state != '') {
            setstateerror();
            error = 0;
        }
        else {
            setstateerror('Required');
            error = 1;
            setButtonloader(1);
            // return false;

        }
        if (city != undefined && city != null && city != '') {
            setcityerror();
            error = 0;
        }
        else {
            setcityerror('Required');
            error = 1;
            setButtonloader(1);
            // return false;

        }
        if (postcode != undefined && postcode != null && postcode != '') {
            setpostcodeerror();
            error = 0;
        }
        else {
            setpostcodeerror('Required');
            error = 1;
            setButtonloader(1);
            //  return false;


        }
        if (add1 != undefined && add1 != null && add1 != '') {
            setadd1error();
            error = 0;
        }
        else {
            setadd1error('Required');
            error = 1;
            setButtonloader(1);
            // return false;


        }
        if (add2 != undefined && add2 != null && add2 != '') {
            setadd2error();
            error = 0;
        }
        else {
            setadd2error('Required');
            error = 1;
            setButtonloader(1);
            // return false;


        }
        if (designation != undefined && designation != null && designation != '') {
            setdesignationerror();
            error = 0;
            seterr("All Field Required");
        }
        else {
            setdesignationerror('Required');
            error = 1;
            setButtonloader(1);
            // return false;


        }



        if (error == 0) {
            console.log('yes');
            setButtonloader(2);

            let str = '';
            if (logcompid != null && logcompid != '' && logcompid != undefined) {
                str = '&profileid=' + logcompid;
            }
            console.log(str);
            console.log('https://www.laabamone.com/Lobsmart/api.php?eventtype=lob_addprofile'
                + str + '&name=' + name +
                '&lname=' + lname +
                '&email=' + email +
                '&mobile=' + phone +
                '&country=' + countryval +
                '&state=' + state +
                '&city=' + city +
                '&postcode=' + postcode +
                '&flat=' + add1 +
                '&street=' + add2 +
                '&landmark=' + landmark +
                '&designation=' + designation +
                '&status=' + status +
                '&fb=' + fb +
                '&twitter=' + twitter +
                '&linkedin=' + linkedin +
                '&youtube=' + youtube +
                '&type=' + type +
                '&uriid=' + p_uniqueid +
                '&aboutcontent=' + aboutcontent +
                '&referrer=' + referrer +
                '&website=' + website +
                '&phonewhat=' + phonewhat +
                '&phonew=' + phonew +
                '&phonep=' + phonep +
                '&org=' + org +
                '&insta=' + insta +
                '&pname=' + pname +
                '&pdescription=' + pdescription +
                '&plink=' + plink +
                '&sname=' + sname +
                '&sdescription=' + sdescription +
                '&slink=' + slink
            );

            fetch('https://www.laabamone.com/Lobsmart/api.php?eventtype=lob_addprofile'
                + str + '&name=' + name +
                '&lname=' + lname +
                '&email=' + email +
                '&mobile=' + phone +
                '&country=' + countryval +
                '&state=' + state +
                '&city=' + city +
                '&postcode=' + postcode +
                '&flat=' + add1 +
                '&street=' + add2 +
                '&landmark=' + landmark +
                '&designation=' + designation +
                '&status=' + status +
                '&fb=' + fb +
                '&twitter=' + twitter +
                '&linkedin=' + linkedin +
                '&youtube=' + youtube +
                '&type=' + type +
                '&uriid=' + p_uniqueid +
                '&aboutcontent=' + aboutcontent +
                '&referrer=' + referrer +
                '&website=' + website +
                '&phonewhat=' + phonewhat +
                '&phonew=' + phonew +
                '&phonep=' + phonep +
                '&org=' + org +
                '&insta=' + insta +
                '&pname=' + pname +
                '&pdescription=' + pdescription +
                '&plink=' + plink +
                '&sname=' + sname +
                '&sdescription=' + sdescription +
                '&slink=' + slink

            )
                .then((res) => res.json())
                .then(
                    (result) => {
                        console.log('yessssssss');
                        const id = result[0]['uniqueid'];
                        const message = result[0]['message'];
                        if (id != undefined && message == 'success') {

                            //  setButtonloader(1);

                            registerDocument1(id);
                            setErrorval('');

                        }
                        else {
                            const errormsg = result[0]['errormsg'];
                            // toast.error(errormsg)
                            eterr("errormsg");
                            setErrorval(errormsg);
                            setButtonloader(1);
                        }


                        console.log(result);
                    },
                    (error) => {
                        console.log('no');
                        console.log(error);
                        seterr("Error");
                        // toast.error("Try again..Data not update..");
                        setButtonloader(1);
                    }
                );
        }
        else {
            //  toast.error("Required fields are missing..")
            setButtonloader('1');
            return false;
        }

    }


    const Changeurl = (a) => {
        settype(a);

        let url = "https://www.lobsmartcard.me/" + a + "/";
        setpageurl(url);

    }
    const Checkrule = (a) => {

        if (!a.match(/[<>.!@#$%^&*()+\\$'"\[\]]/)) {
            setp_uniqueiderr("");
            setp_uniqueid(a);
        } else {
            setp_uniqueiderr("Unforbidden character: .!@#$%^&*()+<>$'\"");

        }


    }
    const deleteProduct = (a) => {

    }



    return (




        <Box sx={{ width: '100%', display: 'flex' }}>


            <Box fullWidth sx={{ paddingBottom: '20px', borderRadius: '6px', width: '50%' }}>
                <div className="col-md-12" style={{ padding: '10px' }}>
                    {err != '' &&
                        <Alert severity="error">Error — {err}</Alert>
                    }
                    {succ != '' &&
                        <Alert severity="success">Success — {succ}</Alert>
                    }
                </div>
                {sizeerr != '' &&
                    <Alert severity="error">{sizeerr}</Alert>

                }

                <div className="col-md-12 " style={{ paddingBottom: '20px' }}></div>





                <div className="col-md-12 " style={{ paddingBottom: '20px' }}></div>

                <div className="col-md-3 col-lg-3 offset-md-10 offset-lg-10">

                    {Buttonloader == '1' ?
                        <button
                            className="btn btn-primary btn-square bootstrap-touchspin-down"
                            type="button"
                            onClick={() => SaveCompany()}
                        >
                            Update
                        </button>

                        :
                        <div className="btn btn-primary btn-square bootstrap-touchspin-down"
                        >

                            <img src="/buttonload3.gif" style={{ height: '30px' }}></img>
                        </div>
                    }
                </div>


            </Box>
            <Box fullWidth sx={{ padding: '30px', width: '50%' }}>

                <Item />
            </Box>

        </Box >




    );



}
export default profile_details;
