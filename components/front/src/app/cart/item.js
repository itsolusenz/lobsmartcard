"use client"
import React from 'react'
import Header from '../component/header'
import Footer from '../component/footer'
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import GooglePayButton from '@google-pay/button-react';
const axios = require('axios');
import { decode as base64_decode, encode as base64_encode } from 'base-64';
const crypto = require('crypto');
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Alert from '@mui/material/Alert';
import { Typography, Divider } from '@mui/material';
export default function page(props) {
    const { landmark, mobile, name, lname, email, add1, add2, city, state, postcode, countryval } = props
    const [navbarFixed, setNavbarFixed] = useState(false);
    const [cardtype, setcardtype] = useState('0');
    const [pvccardtype, setpvccardtype] = useState(false);
    const [metalcardtype, setmetalcardtype] = useState(false);
    const [cartid, setcartid] = useState('');
    const [cartarrid, setcartarrid] = useState([]);
    const [carttot, setcarttot] = useState('0.00');
    const [confirmcheckout, setconfirmcheckout] = useState(false);
    const [profiledata, setprofiledata] = useState('');
    const [cusid, setcusid] = useState('0');
    const [nettotal, setnettotal] = useState('0');
    const [tax, settax] = useState('0');
    const carddetails = [
        {
            headid: '1',//PVC
            headname: 'PVC Card',
            id: '1',
            name: 'Black',
            tyepid: '1',
            img: '/assets/front/card/new/matt_black.png',
            typename: 'PVC MATT CARD',
            amt: '2000',

        },
        {
            headid: '1',//PVC
            headname: 'PVC Card',
            id: '2',
            name: 'California Gold',
            tyepid: '1',
            img: '/assets/front/card/new/matt_californiagold.png',
            amt: '2000',
            typename: 'PVC MATT CARD'
        },
        {
            headid: '1',//PVC
            headname: 'PVC Card',
            id: '3',
            name: 'Gold',
            tyepid: '1',
            img: '/assets/front/card/new/matt_gold.png',
            amt: '2000',
            typename: 'PVC MATT CARD'
        },
        {
            headid: '1',//PVC
            headname: 'PVC Card',
            id: '4',
            name: 'Olive',
            tyepid: '1',
            img: '/assets/front/card/new/matt_olive.png',
            amt: '2000',
            typename: 'PVC MATT CARD'
        },
        {
            headid: '1',//PVC
            headname: 'PVC Card',
            id: '5',
            name: 'Silver',
            tyepid: '1',
            img: '/assets/front/card/new/matt_silver.png',
            amt: '2000',
            typename: 'PVC MATT CARD'
        },
        {
            headid: '1',//PVC
            headname: 'PVC Card',
            id: '6',
            name: 'White',
            tyepid: '1',
            img: '/assets/front/card/new/matt_white.png',
            amt: '2000',
            typename: 'PVC MATT CARD'
        },
        {
            headid: '1',//PVC
            headname: 'PVC Card',
            id: '7',
            name: 'Blue',
            tyepid: '2',
            img: '/assets/front/card/new/glassy_blue.png',
            amt: '2000',
            typename: 'PVC GLASSY CARD'

        },
        {
            headid: '1',//PVC
            headname: 'PVC Card',
            id: '8',
            name: 'Braze',
            tyepid: '2',
            img: '/assets/front/card/new/glassy_braze.png',
            amt: '2000',
            typename: 'PVC GLASSY CARD'

        },
        {
            headid: '1',//Metal
            headname: 'PVC Card',//Metal
            id: '9',
            name: 'Gold',
            tyepid: '2',
            img: '/assets/front/card/new/glassy_gold.png',
            amt: '2000',
            typename: 'PVC GLASSY CARD'

        },
        {
            headid: '1',//Metal
            headname: 'Glassy Card',//Metal
            id: '10',
            name: 'Silver',
            tyepid: '2',
            img: '/assets/front/card/new/glassy_silver.png',
            amt: '2000',
            typename: 'METAL GLASSY CARD'

        },

    ];
    useEffect(() => {
        const handleScroll = () => {
            //  console.log("Scroll event triggered"); // Check if the scroll event is being triggered
            const scrollY = window.scrollY;

            // Check if the scroll position is greater than or equal to the banner section height
            if (scrollY >= 300) {
                setNavbarFixed(true);
                //console.log("Navbar is fixed");
            } else {
                setNavbarFixed(false);
                // console.log("Navbar is not fixed");
            }

        };
        const setTotal = (value) => {
            let i;
            let j;
            let restot = 0;

            console.log('resssssssss', value.length);
            for (j = 0; j < carddetails.length; j++) {
                for (i = 0; i < value.length; i++) {

                    if (value[i] == carddetails[j]['id']) {
                        restot = Number(restot) + Number(carddetails[j]['amt'])

                    }
                }
            }
            //  alert(restot);
            //let res = Number(carttot) + Number(value);
            setcarttot(restot);
            let tax = (parseInt(restot) * 0.12); //10% tax
            settax(tax);
            let total = parseInt(tax) + parseInt(restot);
            setnettotal(total);
            console.log('--------', restot);
            // return restot;
        }
        const getProfile = async (a) => {

            const response = await fetch('https://www.laabamone.com/Lobsmart/api.php?eventtype=lob_Getprofile&profileid=' + a);
            const json = await response.json();
            console.log('res', json);
            setprofiledata(json);

        }
        let cus1id = localStorage.getItem("LOGIN_USER_ID");

        if (cus1id != null && cus1id != undefined && cus1id != '') {
            setcusid(cus1id);
            getProfile(cus1id);
        }
        if (localStorage.getItem("CART_STOREAGE_VALUE") != null && localStorage.getItem("CART_STOREAGE_VALUE") != undefined && localStorage.getItem("CART_STOREAGE_VALUE") != '') {
            let cartid = localStorage.getItem("CART_STOREAGE_VALUE");
            console.log('cartid', cartid);
            let res1 = cartid.slice(0, -1);
            let res = res1.split(",");
            setcartarrid(res);
            console.log('len', res.length);
            setTotal(res);
            //alert(cartid);
        }
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });
    const Paynow = () => {
        axios.post('/api').then(res => {
            // window.location.href = "https://mercury-uat.phonepe.com/transact/simulator?token=9E7mYEWviFlagB06K57DXxQpeHfDcRETOhbtSdZaS8"
            setTimeout(() => {

            }, 1500);
        })
            .catch(error => {
                //setLoading2(false)
                console.error(error);
            });


    }

    /*   (async function () {
          // event.preventDefault();
 
          const response1234 = await axios.get("/api");
          console.log('---res', response1234)
 
 
       })();*/













    /* const payload1 = JSON.stringify(data)
     const payload = base64_encode(payload1);
     const key = '099eb0cd-02cf-4e2a-8aca-3e6c6aff0399';
     const keyindex = '1';
     const string = "SHA256" + payload + "/pg/v1/pay" + key + "###" + keyindex;
     console.log("string", string);
 
 
 
 
 
    const options = {
       method: 'POST',
       url: 'https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay',
       headers: { accept: 'application/json', 'Content-Type': 'application/json' }
    };
 
    axios
       .request(options)
       .then(function (response) {
          console.log(response.data);
       })
       .catch(function (error) {
          console.error(error);
       });*/


    const navbarClass = navbarFixed ? 'navbar-fixed' : '';

    const carddetails_head = [
        {

            id: '1',
            name: 'PVC',

        },
        {
            id: '2',
            name: 'Metal',

        }
    ];

    const carddetails_pvchead = [
        {

            id: '1',
            name: 'Matt',


        },
        {
            id: '2',
            name: 'Glassy',

        }
    ];
    const carddetails_metalhead = [
        {

            id: '1',
            name: 'Matt',

        },
        {
            id: '2',
            name: 'Glassy',

        }
    ];


    const updateCookie = (a) => {
        localStorage.setItem("CART_STOREAGE_VALUE", a);

    }

    const Add_to_cart = (id, type) => {
        let res = '';

        if (type == 'add') {
            if (cartid != '') {
                res = cartid + '' + id + ',';
            }
            else {
                res = id + ',';
            }
            setcartid(res);
            updateCookie(res);
            console.log('res1', res);


        }
        if (type == 'remove') {
            let search = id + ',';
            let position = cartid.search(search);
            let res = '';
            if (position >= 0) {
                res = cartid.replace(search, "");
                setcartid(res);
                updateCookie(res);
                console.log('res2', res);
            }

        }



    }

    const FindCartArr = (id) => {

        let search = id + ',';
        let position = cartid.search(search);
        console.log('position', position);
        if (position >= 0) {
            return '1';
        }
        else {
            return '0';
        }

    }
    const Saveorderdetails = async () => {

        let total = (parseInt(carttot) * 0.12) + parseInt(carttot); //10% tax


        console.log('https://www.laabamone.com/Lobsmart/api.php?eventtype=lob_createorder&name=' + name +
            '&lname=' + lname +
            '&email=' + email +
            '&mobile=' + mobile +
            '&country=' + countryval +
            '&state=' + state +
            '&city=' + city +
            '&postcode=' + postcode +
            '&landmark=' + landmark +
            '&flat=' + add1 +
            '&street=' + add2 +
            '&cusid=' + cusid +
            '&item_ids=' + cartarrid +
            '&pay_type=0' +
            '&subtotal=' + carttot +
            '&tax=10' +
            '&total=' + total);
        fetch('https://www.laabamone.com/Lobsmart/api.php?eventtype=lob_createorder&name=' + name +
            '&lname=' + lname +
            '&email=' + email +
            '&mobile=' + mobile +
            '&country=' + countryval +
            '&state=' + state +
            '&city=' + city +
            '&postcode=' + postcode +
            '&landmark=' + landmark +
            '&flat=' + add1 +
            '&street=' + add2 +
            '&cusid=' + cusid +
            '&item_ids=' + cartarrid +
            '&pay_type=0' +
            '&subtotal=' + carttot +
            '&tax=10' +
            '&total=' + total
        )
            .then((res) => res.json())
            .then(
                (result) => {
                    console.log('yessssssss', result);
                    const id = result[0]['uniqueid'];
                    const message = result[0]['message'];
                    if (id != undefined && message == 'success') {

                        Paynow();

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
    const checkoutmodalclose = (a) => {
        Saveorderdetails();

    }
    return (
        <>

            <Dialog
                open={confirmcheckout}
                TransitionComponent={Transition}
                keepMounted
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle style={{ color: '#2f4fbe', fontWeight: 700 }}>Review Your Details</DialogTitle>
                <DialogContent>
                    {profiledata.length > 0 ?
                        <DialogContentText id="alert-dialog-slide-description">

                            <Typography><b>Customer:</b> {name} {lname}</Typography>
                            <Typography><b>Contact Number:</b> + {mobile}</Typography>
                            <Typography><b>email:</b> {email}</Typography>
                            <Divider>&nbsp;</Divider>
                            <Typography><b>Shipping Address:</b> {add1} {add2}<br />
                                {state},{city}-{postcode}</Typography>
                            <Typography><b>Billing Address:</b> Same as shipping</Typography>


                        </DialogContentText>
                        :
                        <>Loading..</>
                    }
                </DialogContent>
                <DialogActions>
                    <Button type='button' onClick={() => checkoutmodalclose('1')}>PLACE ORDER</Button>
                    <Button type='button' onClick={() => setconfirmcheckout(false)}>CANCEL</Button>
                </DialogActions>
            </Dialog>

            <div className="row g-4" style={{ padding: '20px', borderRadius: '6px', border: '1px solid #557191' }}>

                <div className="col-xl-12 col-lg-12">
                    <div className="row g-4 justify-content-center">


                        {cartarrid.length > 0 ?
                            <>
                                {carddetails.map((b, inc) => (
                                    cartarrid.map((arr, i) => (

                                        arr == b.id ?

                                            <div className="col-xxl-8 col-xl-12 col-lg-8 col-md-8">

                                                <div className="popular__items popular__v2 round16" style={{ padding: '0px' }}>
                                                    <div className="card__boxleft" style={{ width: '80%' }}>
                                                        <div className="w-100 d-flex mb-30 align-items-center justify-content-between flex-wrap gap-2">
                                                            <img src={b.img} alt="card" style={{ width: '100px' }} className="w-10 mb-24" />

                                                            <h6 className="title mb-30  ">
                                                                {b.name}


                                                            </h6>
                                                            <br /> <h7 className="title mb-30  " style={{ color: 'blue' }}>
                                                                {b.typename}
                                                            </h7>

                                                        </div>
                                                    </div>

                                                    <div className="card__boxright " style={{ width: '20%' }}>
                                                        <div className="d-flex mb-10 align-items-center flex-wrap gap-3">
                                                            <h5 className="title mb-30 " style={{ color: '#eaac66' }}>
                                                                ₹{b.amt}
                                                            </h5>

                                                        </div>


                                                    </div>
                                                </div>
                                            </div>
                                            : null
                                    ))))}
                                <Divider>&nbsp;</Divider>
                                <div className="row col-md-12">


                                    <div className='col-md-8'>

                                        <h6 className="title " style={{ textAlign: 'right' }}>SubTotal</h6>


                                    </div>
                                    <div className='col-md-4'>

                                        <h6 className="title  " style={{ textAlign: 'right' }}>₹{carttot}</h6>

                                    </div>

                                </div>
                                <div className="row col-md-12">


                                    <div className='col-md-8'>

                                        <h6 className="title " style={{ textAlign: 'right' }}>Tax</h6>


                                    </div>
                                    <div className='col-md-4'>

                                        <h6 className="title  " style={{ textAlign: 'right' }}>₹{tax}</h6>

                                    </div>

                                </div>
                                <Divider>&nbsp;</Divider>
                                <div className="row col-md-12">


                                    <div className='col-md-8'>

                                        <h6 className="title " style={{ textAlign: 'right' }}>Total</h6>


                                    </div>
                                    <div className='col-md-4'>

                                        <h6 className="title" style={{ textAlign: 'right' }}>₹{nettotal}</h6>

                                    </div>

                                </div>

                                <div className="row col-md-12">

                                    <button type="button" className="cmn--btn" onClick={() => setconfirmcheckout(true)} >
                                        <span>
                                            Review your details to Place Order
                                        </span>
                                    </button>

                                    {/*}    <GooglePayButton
                                          environment="TEST"
                                          paymentRequest={{
                                             apiVersion: 2,
                                             apiVersionMinor: 0,
                                             allowedPaymentMethods: [
                                                {
                                                   type: 'CARD',
                                                   parameters: {
                                                      allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                                                      allowedCardNetworks: ['MASTERCARD', 'VISA'],
                                                   },
                                                   tokenizationSpecification: {
                                                      type: 'PAYMENT_GATEWAY',
                                                      parameters: {
                                                         gateway: 'example',
                                                         gatewayMerchantId: 'exampleGatewayMerchantId',
                                                      },
                                                   },
                                                },
                                             ],
                                             merchantInfo: {
                                                merchantId: '660010520860956873',
                                                merchantName: 'SELVAKUMAR T P',
                                             },
                                             transactionInfo: {
                                                totalPriceStatus: 'FINAL',
                                                totalPriceLabel: 'Total',
                                                totalPrice: '1.00',
                                                currencyCode: 'INR',
                                                countryCode: 'IN',
                                             },
                                          }}
                                          onLoadPaymentData={paymentRequest => {
                                             console.log('load payment data', paymentRequest);
                                          }}
                                       />*/}

                                </div>
                            </>
                            :
                            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8">
                                <div className="d-flex mb-5 align-items-center justify-content-between flex-wrap gap-3">
                                    <h2 style={{ color: 'black' }}>Cart is Empty.</h2>
                                </div>
                            </div>


                        }

















                    </div>
                    {/*} <ul className="pagination justify-content-center mt-40">
                        <li>
                           <a href="#0">
                              <i className="material-symbols-outlined">
                                 chevron_left
                              </i>
                           </a>
                        </li>
                        <li>
                           <a href="#0">
                              1
                           </a>
                        </li>
                        <li>
                           <a href="#0">
                              2
                           </a>
                        </li>
                        <li>
                           <a href="#0">
                              3
                           </a>
                        </li>
                        <li>
                           <a href="#0">
                              ...
                           </a>
                        </li>
                        <li>
                           <a href="#0">
                              <i className="material-symbols-outlined">
                                 chevron_right
                              </i>
                           </a>
                        </li>
                     </ul>*/}
                </div>
            </div>


        </>
    )
}
