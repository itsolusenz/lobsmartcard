const crypto = require('crypto');
const axios = require('axios');
import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req, res) {
    try {
        const data = {
            "merchantId": "PGTESTPAYUAT",
            "merchantTransactionId": "MT7850590068188104",
            "merchantUserId": "MUID123",
            "amount": 1,
            "redirectUrl": "https://www.lobsmartcard.me/",
            "redirectMode": "REDIRECT",
            "mobileNumber": "919361931050",
            "paymentInstrument": {
                "type": "PAY_PAGE"
            }
        }
        const salt_key = "099eb0cd-02cf-4e2a-8aca-3e6c6aff0399";
        const payload = JSON.stringify(data);
        const payloadMain = Buffer.from(payload).toString('base64');
        const keyIndex = 1;
        const string = payloadMain + '/pg/v1/pay' + salt_key;
        const sha256 = crypto.createHash('sha256').update(string).digest('hex');
        const checksum = sha256 + '###' + keyIndex;

        const prod_URL = "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay"
        const options = {
            method: 'POST',
            url: prod_URL,
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
                'X-VERIFY': checksum
            },
            data: {
                request: payloadMain
            }
        };

        axios.request(options).then(function (response) {
            console.log('----------resdd', response.data)
            const status = response.data.success;
            if (status == true) {
                console.log('----------redir', response.data.data.instrumentResponse.redirectInfo.url)
                const redir = response.data.data.instrumentResponse.redirectInfo.url;
                return response.json(response);
            }

            // return res.redirect(response.data.data.instrumentResponse.redirectInfo.url)
        })
            .catch(function (error) {
                //  res.status(200).json({ message: error })
                console.error(error);
            });
    } catch (error) {
        res.status(500).send({
            message: error.message,
            success: false
        })
    }
}
