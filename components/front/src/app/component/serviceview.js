import React, { Fragment, useState, useEffect } from 'react';
import Box from '@mui/material/Box';
//import { useParams } from "react-router-dom";
import { TextField, FormControl, InputLabel, Select, MenuItem, FormHelperText, Modal, Alert } from '@mui/material';
import axios from 'axios';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function Productview(props) {
    const { cusid, productid } = props;
    const [createObjectURL_pimage, setCreateObjectURL_pimage] = useState(null);
    const [pname, setpname] = useState('');
    const [pimage, setpImage] = useState([]);
    const [logcompid, setlogcompid] = useState('');
    const [Errorval, setErrorval] = useState('');
    const [pdescription, setpdescription] = useState('');
    const [plink, setplink] = useState('');
    const [sizeerr, setsizeerr] = useState('');
    const [proddata, setproddata] = useState('');
    const [Buttonloader, setButtonloader] = useState('1');
    const [profiledata, setprofiledata] = useState('');
    const [pnameerror, setpnameerror] = useState('');
    const [err, seterr] = useState('');
    const [succ, setsucc] = useState('');
    const [openloader, setopenloader] = React.useState(false);
    useEffect(() => {
        // Perform localStorage action
        const getProfile1 = async (a) => {

            const response = await fetch('https://www.laabamone.com/Lobsmart/api.php?eventtype=lob_Getprofile&profileid=' + a);
            const json = await response.json();
            console.log(json);
            setprofiledata(json);




        }

        const getProfile = async (a, b) => {

            const response = await fetch('https://www.laabamone.com/Lobsmart/api.php?eventtype=lob_Getservice&profileid=' + a + '&productid=' + b);
            const json = await response.json();
            console.log(json);
            setproddata(json);
            setpname(json[0].name);
            setpdescription(json[0].message);
            setplink(json[0].link);
            setCreateObjectURL_pimage(json[0].image)
        }





        if (productid != null && productid != undefined && productid != '') {
            getProfile(cusid, productid);
            setlogcompid(productid);

        }
        getProfile1(cusid);





    }, [productid, cusid])


    const SaveProductImage = (e) => {
        const SIZE = 20 * 1024;
        if (e.target.files && e.target.files[0]) {

            if (e.target.files[0].size > SIZE) {

                setsizeerr('Product Image Size greater than 20kb');
                seterr("Product Image Size greater than 20kb");
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
    const registerDocument1 = async (a) => {
        // event.preventDefault();


        //console.log(image.name);
        // console.log(simage.name);
        //  console.log(pimage.name);



        if (pimage.name != '' && pimage.name != undefined && pimage.name != null) {
            setButtonloader('2');
            let url = "https://www.laabamone.com/Lobsmart/api.php"
            const formData = new FormData();
            formData.append('eventtype', 'lob_addprofile_image');
            formData.append('id', a);
            formData.append('simage', pimage);
            let config = {
                headers: {
                    'content-type': 'multipart/form-data',
                },
            };

            axios.post(url, formData, config)
                .then((response) => {

                    console.log('result', response);
                    setsucc('Updated Successfully...');

                    // window.location.href = "/customeredit/" + a;
                    // setActiveStep('2');

                })
                .catch((error) => {
                    seterr("Error...");
                    setButtonloader('1');
                    console.log({ status: `upload failed ${error}` });
                })
        }

        setsucc("Added Successfully...");



    }
    const SaveProduct = () => {
        setopenloader(true);
        let str = '';
        let error = 0;
        if (pname == '' || pname == undefined || pname == null) {
            setpnameerror("Required");
            seterr("Fill Requried Fields");
            setopenloader(false);
            error = 1;
        }

        if (error == 1) {
            setButtonloader('1');
            return false;
        }
        else {
            setpnameerror("");
            if (logcompid != null && logcompid != '' && logcompid != undefined) {
                str = '&productid=' + logcompid;
            }
            console.log('https://www.laabamone.com/Lobsmart/api.php?eventtype=lob_addprofile&type=addservice'
                + str + '&profileid=' + cusid + '&name=' + pname +
                '&message=' + pdescription +
                '&link=' + plink)
            fetch('https://www.laabamone.com/Lobsmart/api.php?eventtype=lob_addprofile&type=addservice'
                + str + '&profileid=' + cusid + '&name=' + pname +
                '&message=' + pdescription +
                '&link=' + plink
            )
                .then((res) => res.json())
                .then(
                    (result) => {
                        console.log('yessssssss');
                        const id = result[0]['id'];
                        const message = result[0]['message'];
                        if (id != undefined && message == 'success') {
                            setopenloader(false);
                            if (productid != undefined) {

                            }
                            else {
                                setpname('');
                                setplink('');
                                setpdescription('');
                                setpImage('');
                            }
                            registerDocument1(id);
                            setErrorval('');


                        }
                        else {
                            const errormsg = result[0]['errormsg'];
                            seterr(errormsg)
                            setErrorval(errormsg);
                            setopenloader(false);
                        }


                        console.log(result);
                    },
                    (error) => {
                        console.log('no');
                        console.log(error);
                        seterr("Try again..Data not update..");
                        setButtonloader(1);
                    }
                );
        }
    }
    if (profiledata.length > 0) {
        return (

            <Box fullWidth sx={{ padding: '20px', borderRadius: '6px', border: '1px solid #557191' }}>
                <div>

                    <Backdrop
                        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open={openloader}
                        onClick={() => setopenloader(false)}
                    >
                        <CircularProgress color="inherit" />
                    </Backdrop>
                </div>
                {err != '' &&
                    <Alert severity="error">Error — {err}</Alert>
                }
                {succ != '' &&
                    <Alert severity="success">Success — {succ}</Alert>
                }
                <div className="row col-md-12" >
                    <div className="col-md-12 " >
                        <h5 className="title addi__head round16">Service:</h5>
                    </div>

                    <div className="col-md-12" style={{ paddingTop: '10px' }}>

                        <TextField
                            value={pname}
                            error={!!pnameerror}
                            helperText={pnameerror}

                            onChange={(e) => { setpname(e.target.value) }}
                            fullWidth label="Service Name: *" variant="outlined">


                        </TextField>
                    </div>
                    <div className="col-md-12" style={{ paddingTop: '10px' }}>

                        <TextField
                            value={plink}
                            onChange={(e) => {
                                setplink(e.target.value)
                                // , setadd2error('') 
                            }}
                            fullWidth label="Link" variant="outlined">


                        </TextField>
                    </div>
                    <div className="col-md-12" style={{ paddingTop: '10px' }}>

                        <TextField
                            value={pdescription}
                            multiline
                            rows={4}
                            onChange={(e) => {
                                setpdescription(e.target.value)
                                // , setadd2error('') 
                            }}
                            fullWidth label="Description::" variant="outlined">


                        </TextField>
                    </div>


                    <div className="col-md-12 " style={{ paddingTop: '10px' }}>
                        <h5 className="title addi__head round16">Service Image:</h5>
                    </div>
                    <div className="row col-md-12" >


                        <div className="col-md-3 "></div>
                        <div className="col-md-3 ">

                            <Box sx={{ border: '1px dashed #dbdbe3', padding: '55px' }}
                                variant="contained"
                                component="label"
                            >
                                <b style={{ fontSize: '25px', color: 'black' }}> +</b>
                                <input

                                    onChange={(e) => SaveProductImage(e)}
                                    type="file"
                                    name="myImage"
                                    accept="image/x-png,image/jpeg,image/jpg"
                                    hidden
                                />
                            </Box>
                        </div>
                        <div className="col-md-6 ">
                            {createObjectURL_pimage != null && createObjectURL_pimage != '' && createObjectURL_pimage != undefined &&
                                <img src={createObjectURL_pimage} style={{ width: '150px', height: '150px' }} />
                            }

                        </div>


                    </div>

                    <div className="col-lg-6" style={{ float: 'center' }}>
                        <div className="frm__grp">
                            <button type="submit" className="cmn--btn" onClick={() => SaveProduct()} >
                                <span>
                                    Update
                                </span>
                            </button>
                        </div>
                    </div>



                </div>

            </Box >

        );
    }
    else {
        return (
            <>Loading.</>
        )
    }

}